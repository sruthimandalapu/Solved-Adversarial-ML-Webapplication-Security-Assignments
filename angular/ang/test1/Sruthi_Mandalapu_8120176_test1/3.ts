class Troll
{
    static removal(str:string):string{
        let vow=['a','e','i','o','u','A','E','I','O','U'];
        let p:string="";
        for(var st=0;st<str.length;st++){
            let flag:number=0;
            for(var i in vow){
                if(vow[i]==str[st]){
                    flag=1;
                    break;
                }
            }
            if(flag==0)
            p+=str[st];
        }
        return p;
    }
}
console.log(Troll.removal("This website is for losers LOLo!"));