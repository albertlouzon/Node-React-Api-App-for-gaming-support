const screenWidth = window.screen.width

export  function generateNextLevel(num,newMinHeight,newMaxHeight) {
    const blockObj = {}
    for (var i = 0; i < num; i++) {
            if(screenWidth<500){
                let randomHeight =randomIntFromInterval(40,90) ;
                let randomWidth =randomIntFromInterval(screenWidth/5,screenWidth/3)
                let randomYPos = randomIntFromInterval(newMinHeight,newMaxHeight)
                let randomXPos = randomIntFromInterval(0,screenWidth/1.5)
                blockObj[i] = {key:i,  height: 75, width: randomWidth, yPosition: randomYPos, xPosition: randomXPos, 
                    }
        
            
            }else{
                let randomHeight =randomIntFromInterval(60,150) ;
                let randomWidth =randomIntFromInterval(340,640)
                let randomYPos = randomIntFromInterval(newMinHeight,newMaxHeight)
                let randomXPos = randomIntFromInterval(20,screenWidth/2)
                blockObj[i] = {key:i,  height: 75, width: randomWidth, yPosition: randomYPos, xPosition: randomXPos, 
                 }
        
        
            
    
        }
            }
       
    // console.log('new Obj: ',    blockObj)
    return blockObj
}

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}