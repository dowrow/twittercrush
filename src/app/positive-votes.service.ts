import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class PositiveVotesService {

  constructor(private http: Http) { }

  vote(voter, rated) {
    let endpoint = '/api/positive-votes/';
    let params = {
      voter: voter,
      rated: rated
    }
    return this.http.post(endpoint, params).map(response => response.json());
  }
}
