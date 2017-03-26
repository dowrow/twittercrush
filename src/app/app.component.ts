import { Component } from '@angular/core';
import { AuthMethods, AuthProviders, AngularFire } from "angularfire2";
import { FriendsService } from "./friends.service";
import { UsersService } from "./users.service";
import { PositiveVotesService } from "./positive-votes.service";
import { NegativeVotesService } from "./negative-votes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = null;
  userInfo = null;
  friends = [];
  loading = true;
  currentFriendIndex = 0;
  nextCursor = -1;
  startedVoting = false;
  footerClosed = false;

  constructor(private angularFire: AngularFire,
              private friendsService: FriendsService,
              private usersService: UsersService,
              private positiveVotesService: PositiveVotesService,
              private negativeVotesService: NegativeVotesService) {
    this.angularFire.auth.subscribe(user => {
      if(user) {
        this.user = user;
        this.getUserInfo(user.auth.providerData[0].uid);
        console.log('user', user);
        this.friends = [];
        this.getFriends();
      } else {
        this.loading = false;
        this.user = null;
      }
    });
  }

  getUserInfo(uid) {
    this.usersService.getUser(uid).subscribe(res => {
      console.log('user response', res);
      this.userInfo = res;
    });
  }

  getFriends() {
    if (!this.user.twitter.accessToken) {
      this.logout();
    }
    this.friendsService.getFriends(this.user.twitter.accessToken, this.user.twitter.secret, this.nextCursor)
      .subscribe(res => {
        this.loading = false;
        console.log('Friends', res);
        if (res.users) {
          res.users.map(friend => this.friends.push(friend));
        }
        if (res.next_cursor > 0) {
          this.nextCursor = res.next_cursor;
          this.getFriends();
        }
      });
  }

  loginWithTwitter() {
    this.angularFire.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Redirect
    });
  }

  logout() {
    this.angularFire.auth.logout();
  }

  getCurrentFriend() {
    if (this.currentFriendIndex < this.friends.length) {
      return this.friends[this.currentFriendIndex];
    }
    return null;
  }

  like() {
    let voter = this.user.auth.providerData[0].uid;
    let rated = this.getCurrentFriend().id_str;
    this.positiveVotesService.vote(voter, rated).subscribe(res => console.log(res));
    this.pass();
  }

  nah() {
    let voter = this.user.auth.providerData[0].uid;
    let rated = this.getCurrentFriend().id_str;
    this.negativeVotesService.vote(voter, rated).subscribe(res => console.log(res));
    this.pass();
  }

  startVoting() {
    this.startedVoting = true;
  }

  pass() {
    this.currentFriendIndex += 1;
  }

  getRating() {
    if (this.userInfo) {
      return Math.round(this.userInfo.rating * 10) / 10;
    }
    return 0;
  }

  getVotesCount() {
    if (this.userInfo) {
      return this.userInfo.total_votes;
    }
    return 0;
  }

  getStars() {
    let stars = [];
    if (!this.userInfo) {
      return [0,0,0,0,0];
    }
    for (let i = 0; i < Math.trunc(this.userInfo.rating); i++) {
      stars.push(1);
    }
    if (this.userInfo.rating -  Math.trunc(this.userInfo.rating) > 0) {
      stars.push(0.5);
    }
    while (stars.length < 5) {
      stars.push(0);
    }
    return stars;
  }

  getStarClass(starValue) {
    if (starValue === 1) {
      return "fa fa-star";
    }
    if (starValue === 0.5) {
      return "fa fa-star-half-o";
    }
    return "fa fa-star-o";
  }

  closeFooter() {
    this.footerClosed = true;
  }
}
