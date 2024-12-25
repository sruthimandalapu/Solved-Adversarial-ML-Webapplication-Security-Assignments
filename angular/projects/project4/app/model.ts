export class MemberModel{
    MemberID:number;
    MemberName:string;
    PhoneNumber:string;
    constructor(MemberID:number,MemberName:string,PhoneNumber:string){
        this.MemberID=MemberID;
        this.MemberName=MemberName;
        this.PhoneNumber=PhoneNumber;
    }
}