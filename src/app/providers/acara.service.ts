import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcaraService {

  apiUrl = 'http://localhost/api-acara/simpan_acara.php';

  constructor(private http: HttpClient) {}

  simpanAcara(data: any) {
    return this.http.post<any>(this.apiUrl, data);
    
  }
  getAcara() {
  return this.http.get<any[]>('http://localhost/api-acara/get_acara.php');
}

}
