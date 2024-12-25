export namespace first{
    export class Train{
        trainID:number;
        trainName:string;
        speed:number;
        constructor(trainID:number,trainName:string,speed:number){
            this.trainID=trainID;
            this.trainName=trainName;
            this.speed=speed;
        }
        coverDistance(hour:number){
            console.log("The train "+this.trainName+" of id "+this.trainID+" has covered a distance of "+hour*this.speed);
        }
    }
    export class Driver{
        driver(){
            console.log("Driver with Train");
        }
    }
}