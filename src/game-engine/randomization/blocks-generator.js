import Block0 from "../block0";
const screenWidth = window.screen.width
const screenHeight = window.screen.height

export  function generateNextLevel(num,newMinHeight,newMaxHeight) {
    const blockObj = {}
    for (var i = 0; i < num; i++) {
     
            let randomHeight =randomIntFromInterval(60,150) ;
            let randomWidth =randomIntFromInterval(350,650)
            let randomYPos = randomIntFromInterval(newMinHeight,newMaxHeight)
            let randomXPos = randomIntFromInterval(20,screenWidth/2)
    
            blockObj[i] = {key:i,  height: 120, width: randomWidth, yPosition: randomYPos, xPosition: randomXPos }
    
        

    }
    // console.log('new Obj: ',    blockObj)
    return blockObj
}

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}