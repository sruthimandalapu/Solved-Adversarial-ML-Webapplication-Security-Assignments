var st="cabbage";
st=st.toUpperCase();
var one="AEIOULNRST";
var two="DG";
var three="BCMP";
var four="FHVWY";
var five="K";
var eight="JX";
var ten="QZ";
let points=0;
for(var s of st){
    if(one.includes(s))
    points+=1;
    else if(two.includes(s))
    points+=2;
    else if(three.includes(s))
    points+=3;
    else if(four.includes(s))
    points+=4;
    else if(five.includes(s))
    points+=5;
    else if(eight.includes(s))
    points+=8;
    else if(ten.includes(s))
    points+=10;
}
console.log("The total points for "+st+" is: "+points);