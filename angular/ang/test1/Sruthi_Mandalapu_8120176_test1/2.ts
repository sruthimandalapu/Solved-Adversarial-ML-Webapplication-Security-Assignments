function trim(st:string,n:number){
    if(st.length<=n){
        return st;
    }
    else{
        var p="";
        var q=0;
        if(n<=3){
            q=n;
        }
        else{
            q=n-3;
        }
        for(var i=0;i<q;i++){
            p+=st[i];
        }
        p+="...";
        return p;
    }
}
console.log(trim("Creating kata is fun",14));
console.log(trim("Code Wars is pretty rad",50));
console.log(trim("He",1));