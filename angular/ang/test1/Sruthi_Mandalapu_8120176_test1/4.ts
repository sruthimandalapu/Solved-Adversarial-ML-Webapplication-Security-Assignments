function CalcSheep(sheeps:boolean[]){
    if(sheeps.length>0){
        var c=0;
        for(var i=0;i<sheeps.length;i++){
            if(sheeps[i]==true)
            c+=1;
        }
        console.log("There are "+c+" sheeps in total");
    }
    else{
        console.log("undefined");
    }
}
CalcSheep([true,true,false,true,true,false,false,false]);
CalcSheep([]);