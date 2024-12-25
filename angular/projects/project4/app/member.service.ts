import { Injectable } from '@angular/core';
import {MemberModel} from './model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }
  getAllMembers():Observable<MemberModel[]>{
    const url="https://localhost:44393/api/member";
    return this.http.get<MemberModel[]>(url);
  }
}
