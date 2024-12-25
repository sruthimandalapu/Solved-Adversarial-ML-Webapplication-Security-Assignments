import { Injectable } from '@angular/core';
import {Product} from './app.component';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts():any[]{
    return [
      new Product(1,'Memory Card', 500, 3.5),
      new Product(2,'Pen Drive', 750, 4.3),
      new Product(3,'Power Bank', 100, 2.9),
      new Product(4,'CD', 80, 3.0),
      new Product(5,'Keyboard', 450, 3.5),
      new Product(6,'Mouse', 250, 4.0),
      new Product(7,'Harddisk', 2200, 4.3),
      new Product(8,'Tablet', 9500, 4.2),
      new Product(9,'Laptop', 32500, 2.5),
      new Product(10,'Earphone', 399, 4.4),
      new Product(11,'Scanner', 20500, 3.6),
      new Product(12,'Printer', 14000, 4.1),
      new Product(13,'Web Cam', 7500, 3.6)
    ];
  }
}
