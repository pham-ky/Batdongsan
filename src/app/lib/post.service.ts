import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_URL = 'https://localhost:44365/api/BaiDang';
  constructor(private readonly http: HttpClient) { }
  addProduct(product: any): Observable<number> {
    const url = `${this.API_URL}/addPost`;
    var body = JSON.stringify(product);
    return this.http.post<any>(url, body, httpOptions);
  }
  getNew(){
    const url = `${this.API_URL}/getNew`;
    return this.http.get(url);
  }
  getVip(){
    const url = `${this.API_URL}/getVip`;
    return this.http.get(url);
  }
  getDetail(id:any){
    const url = `${this.API_URL}/getDetail/${id}`;
    return this.http.get(url);
  }
}
