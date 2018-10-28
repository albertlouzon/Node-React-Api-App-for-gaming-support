const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
var cors = require('cors');
var http = require('http')

var request = require('request');
var userDetails;
const PORT = process.env.PORT || 5000;
function initialize() {
  // Setting URL and headers for request
  var options = {
      url: 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/renekton?api_key=RGAPI-f26b300a-79ed-4917-ae2f-6960f6774828',
      headers: {
          'User-Agent': 'request'
      }
  };
  // Return new promise 
  return new Promise(function(resolve, reject) {
    // Do async job
      request.get(options, function(err, resp, body) {
          if (err) {
              reject(err);
          } else {
              resolve(JSON.parse(body));
          }
      })
  })

}


function main() {
  var initializePromise = initialize();
  initializePromise.then(function(result) {
      userDetails = result;
      console.log("Initialized user details");
      // Use user details from here
      console.log(userDetails)
  }, function(err) {
      console.log(err);
  })
  
}
main()

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();
  app.use(cors())
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
  // Answer API requests.
  app.get('/api', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.set('Content-Type', 'application/json');
    
 
      res.send(userDetails
      
      )
  }
  
  );





  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}

