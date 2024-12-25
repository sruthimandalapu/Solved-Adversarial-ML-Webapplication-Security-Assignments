let n:number=30;
function indiaAustralia(n:number){
    for(var i=1;i<=n;i++){
        if(i%15==0)
        console.log("IndiaAustralia");
        else if(i%3==0)
        console.log("India");
        else if(i%5==0)
        console.log("Australia");
        else
        console.log(i);
    }
}
indiaAustralia(n);