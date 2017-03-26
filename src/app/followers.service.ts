import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class FollowersService {

  constructor(private http: Http) {
  }

  getFollowers(accessToken, accessTokenSecret) {
    let endpoint = '/api/followers/?access_token=' + encodeURIComponent(accessToken) +
                    '&access_token_secret=' + encodeURIComponent(accessTokenSecret);
    return this.http.get(endpoint).map(response => response.json());
  }
}
