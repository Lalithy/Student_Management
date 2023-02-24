import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly Root_URL: any;

  constructor(private http: HttpClient) {
    this.Root_URL = 'http://localhost:8080'
   }

   getToken() {
    return localStorage.getItem('refreshToken');
  }

   post(uri: string, payload: any) {
  
    let objHeader: Object = {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${this.getToken()}`,
    };

    let objOptions: Object = {
      headers: objHeader,
    };

    return this.http.post(this.Root_URL + '/' + uri, payload, objOptions);
  }
}
