import { Injectable } from '@angular/core';
import { Register } from '../Register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = "http://localhost:3000/registers";

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<Register>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Register[]>{
    return this.http.get<Register[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Register>{
    return this.http.get<Register>(`${this.apiUrl}/${id}`)
  }

}
