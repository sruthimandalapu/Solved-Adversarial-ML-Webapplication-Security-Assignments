namespace Sruthi1{
    export class Bike{
        time:number;
        constructor(time:number){
            this.time=time;
        }
        public move(){
            console.log("Bike is moving");
        }
        public calculatespeed(distance:number):number{
            return distance/this.time;
        }
    }
    export class Mechanic{
        public repair(){
            console.log("mechanic repair the vehicle");
        }
    }
}