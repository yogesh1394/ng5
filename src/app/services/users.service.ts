import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService {
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
  addUser(users: any[]) {
    console.log(users);
    return this.http.post('http://localhost/api/api.php?rquest=adduser', users)
    .subscribe(
      (val) => {
        console.log('post call successful value return in body', val);
      },
      response => {
        console.log('post call in error', response);
      },
      () => {
        console.log('post observable is now completed.');
      });
    }
    /* .subscribe(res => console.log('Done'));*/
    // .map((response: Response) => response.json());
    // .catch(error => Observable.throw(error.json()));
  // }

  /* deleteUser(id) {
    return this.http.get('http://localhost/api/deluser.php' + id)
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  } */
}

