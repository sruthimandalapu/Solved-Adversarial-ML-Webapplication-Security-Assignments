export namespace Sruthi{
    export class Bus{
        busID:number;
        busName:string;
        constructor(busID:number,busName:string){
            this.busID=busID;
            this.busName=busName;
        }
        public travelling():string{
            return "Bus No: "+this.busID+" with the Bus Name of: "+this.busName;
        }
    }
    export class Passenger{
        public booking():string{
            return "Bus travel is booked by Passenger";
        }
    }
}