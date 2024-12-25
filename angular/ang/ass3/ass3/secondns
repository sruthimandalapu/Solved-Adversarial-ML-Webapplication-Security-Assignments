var second;
(function (second) {
    class stadium {
        constructor(stadiumName, city, capacity) {
            this.stadiumName = stadiumName;
            this.city = city;
            this.capacity = capacity;
        }
        matchResult(team1Score, team2Score) {
            console.log("The match is in " + this.stadiumName + " stadium situated in a city " + this.city + " with a capacity of " + this.capacity);
            if (team1Score > team2Score) {
                console.log("Team A won the match!");
            }
            else if (team2Score > team1Score) {
                console.log("Team B won the match!");
            }
            else {
                console.log("Both Teams with simillar score");
            }
        }
    }
    second.stadium = stadium;
})(second || (second = {}));
///<reference path="./secondNs.ts"/>
let s = new second.stadium("ntr", "guntur", 200);
s.matchResult(30, 50);
