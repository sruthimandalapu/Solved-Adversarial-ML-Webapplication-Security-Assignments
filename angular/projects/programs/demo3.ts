export let country:string="india";
export class Product{
    pcode:number;
    pname:string;
    constructor(pcode:number,pname:string){
        this.pcode=pcode;
        this.pname=pname;
    }
    displayall(){
        console.log("Product id is: "+this.pcode+" Product name is: "+this.pname);
    }
}