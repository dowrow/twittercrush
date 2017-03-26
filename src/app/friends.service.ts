import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

interface UsersResponse {
  users: [any],
  next_cursor: number
}

@Injectable()
export class FriendsService {

  constructor(private http: Http) {
  }

  getFriends(accessToken, accessTokenSecret, cursor): Observable<UsersResponse> {
    let endpoint = '/api/friends/?access_token=' + encodeURIComponent(accessToken) +
      '&access_token_secret=' + encodeURIComponent(accessTokenSecret) +
      '&cursor=' + encodeURIComponent(cursor);
    return this.http.get(endpoint).map(response => response.json());
  }
}

