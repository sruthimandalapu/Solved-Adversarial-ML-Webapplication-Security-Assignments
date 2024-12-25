import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './app.component';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:3000/books";
  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(`${this.url}`);
  }
}
