import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MainpageService {
  users = [];
  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('http://localhost/api/api.php?rquest=users')
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  }
  getUser(id) {
    return this.http.get('http://localhost/api/selectuser.php' + id)
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  }
  addUser(info) {
    return this.http.get('http://localhost/api/adduser.php' + info)
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  }
  deleteUser(id) {
    return this.http.get('http://localhost/api/deluser.php' + id)
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  }
}
