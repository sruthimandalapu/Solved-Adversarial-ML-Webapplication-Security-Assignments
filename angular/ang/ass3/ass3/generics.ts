interface ProcessIdentity<T,U>{
    value:T;
    message:U;
    property():T;
}
class callIdentity<X,Y> implements ProcessIdentity<X,Y>{
    value:X;
    message:Y;
    constructor(value:X,message:Y){
        this.value=value;
        this.message=message;
    }
    property():X{
        return this.value;
    }
    message_return():Y{
        return this.message;
    }
}
let g=new callIdentity<number,string>(6,"sruthi");
console.log("The message is: "+g.message_return());
console.log("The value is: "+g.property());
