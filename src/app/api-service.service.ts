import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(protected http: HttpClient) {}

  token = localStorage.getItem("token");
  header = new Headers({Authorization: `Bearer ${this.token}`});

  isLoggedin() {
    if (localStorage.getItem('token')) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
  deleteToken() {
    localStorage.clear()
  }

  login(payload: any): Observable<any> {
    return this.http.post('https://demo.credy.in/api/v1/usermodule/login/',payload);
  }

  getMovies(page: any): Observable<any> {
    let token = localStorage.getItem('token');
    let header: HttpHeaders = new HttpHeaders({Authorization: `Token ${token}`});

    return this.http.get(`https://demo.credy.in/api/v1/maya/movies/?page=${page}`,{headers: header});
  }


}

