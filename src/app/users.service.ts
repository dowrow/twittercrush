import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUser(uid: string) {
    let endpoint = '/api/users/' + encodeURIComponent(uid);
    return this.http.get(endpoint).map(response => response.json());
  }

}
