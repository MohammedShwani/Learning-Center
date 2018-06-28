import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getTestData() {
    this.http.get('http://localhost/codeforiraq_trainingcenter/learningCenter_backend/public/')
      .subscribe(data => {
        console.log(data);
      })

  }
}
