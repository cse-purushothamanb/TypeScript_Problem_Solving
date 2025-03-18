/*
The terrain on which the game character moves forward is made from various pieces of land placed together.
Implement the method calculatefinalspeed which takes the initial speed of the character, and an array of degrees of inclination that represent the uneven terrain. 
The speed of the character will increase or decrease proportionally to the incline of the land, as shown in the image below: 

The magnitude of the angle of inclination will always be 90%. The speed change occurs only once for each piece of land. 
The method should immediately retum © as the final speed if an incline reduces the speed to O or below Q, which makes the character lose 1 lita 
*/ 
function calculateFinalSpeed(initialSpeed: number, inclinations: number[]): number {
    let finalSpeed:number=initialSpeed;
    for(let i=0;i<inclinations.length;i++){
        if(inclinations[i]>=0){
            finalSpeed=finalSpeed-(inclinations[i]);
            //console.log(">0",finalSpeed);
        }else if(inclinations[i]<0){
            finalSpeed=finalSpeed-(inclinations[i]);
            //console.log("<0",finalSpeed);
        }
    }
    if(finalSpeed<=0){
        return 0;
    }else{
        return finalSpeed;
    }
}

console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));