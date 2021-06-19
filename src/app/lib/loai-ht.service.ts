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
export class LoaiHTService {

  private API_URL_Loai = 'https://localhost:44365/api/LoaiBDS';
  private API_URL_HT = 'https://localhost:44365/api/HinhThuc';
  constructor(private readonly http: HttpClient) {}
  GetHT() {
    const url = `${this.API_URL_HT}/GetAll`;
    return this.http.get(url);
  }
  GetLoai(id: any) {
    const url = `${this.API_URL_Loai}/GetLoaiBDS/${id}`;
    return this.http.get(url);
  }
}
