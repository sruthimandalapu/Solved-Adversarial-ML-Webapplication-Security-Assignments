import {Sruthi} from "./namespace1";
import B=Sruthi.Bus;
import P=Sruthi.Passenger;
let obj1=new B(2,"iwioewjk");
let obj2=new P();
console.log(obj1.travelling());
console.log(obj2.booking());


import * as source from "./namespace1";
let obj3=new source.Sruthi.Bus(67,"djdsj");
let obj4=new source.Sruthi.Passenger();
console.log(obj3.travelling());
console.log(obj4.booking());

