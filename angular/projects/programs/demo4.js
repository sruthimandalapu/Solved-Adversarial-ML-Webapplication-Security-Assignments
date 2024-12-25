"use strict";
exports.__esModule = true;
/*
import {country,Product} from "./demo3";
let product:Product=new Product(34,"Soap");
product.displayall();
console.log("The name of the country: "+country);
*/
var prod = require("./demo3");
var product = new prod.Product(5, "Paste");
product.displayall();
console.log("The name of the country is: " + prod.country);
