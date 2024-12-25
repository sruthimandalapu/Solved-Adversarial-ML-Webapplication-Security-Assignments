namespace second{
    export class stadium{
        stadiumName:string;
        city:string;
        capacity:number;
        constructor(stadiumName:string,city:string,capacity:number){
            this.stadiumName=stadiumName;
            this.city=city;
            this.capacity=capacity;
        }
        matchResult(team1Score:number,team2Score:number){
            console.log("The match is in "+this.stadiumName+" stadium situated in a city "+this.city+" with a capacity of "+this.capacity);
            if(team1Score>team2Score){
                console.log("Team A won the match!");
            }
            else if(team2Score>team1Score){
                console.log("Team B won the match!");
            }
            else{
                console.log("Both Teams with simillar score");
            }
        }
    }
}