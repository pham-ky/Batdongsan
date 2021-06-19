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
export class DiaChiService {

  private API_URL = 'https://localhost:44365/api/DiaChi';
  constructor(private readonly http: HttpClient) {}
  GetTinhTP() {
    const url = `${this.API_URL}/GetTinhTP`;
    return this.http.get(url);
  }
  GetQH(id: any) {
    const url = `${this.API_URL}/GetQH/${id}`;
    return this.http.get(url);
  }
  GetXP(id: any) {
    const url = `${this.API_URL}/GetXP/${id}`;
    return this.http.get(url);
  }
}
