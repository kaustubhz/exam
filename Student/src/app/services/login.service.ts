import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL = "http://localhost:9080";
  constructor(private http: HttpClient) {
  }

  // getRequestOptions():RequestOptions{
  //   const options=new RequestOptions();

  //   return options;
  // }
  getAllStudents() {
    return this.http.get(this.apiURL + "/students");
  }
}
