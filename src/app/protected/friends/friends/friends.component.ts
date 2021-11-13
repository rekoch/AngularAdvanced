import {Component, OnInit} from '@angular/core';
import {FriendsService} from "../../../shared/services/friends.service";
import {Friend} from "../../../shared/models/friend";
import {EmailHelperService} from "../../../shared/services/email-helper.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friends: Friend[] = [];

  constructor(private friendsService: FriendsService, private emailValidator: EmailHelperService) {
  }

  ngOnInit(): void {
    this.friendsService.getAllFriends().subscribe(friends => this.friends = friends);
  }

  inviteFriend($event: Friend) {
    // solution 1, the less nice one :)
    this.checkEmail($event.email).subscribe(isEmailValid => {
      if (isEmailValid) {
        this.addFriend($event).subscribe({error: err => console.error('something went wrong' + err)})
        // what do you do it there is another one to call?
      }
    })

    // solution 2, the better one

    /* this.checkEmail($event.email).pipe(
       mergeMap(isMailValid => {
         if (isMailValid) {
           return this.addFriend($event);
         }
         throw Error('email was invalid');
       })
     ).subscribe({error: err => console.error('something went wrong' + err)});*/
  }

  checkEmail(email: string): Observable<boolean> {
    return this.emailValidator.checkIsEmailValid(email);
  }

  addFriend(friend: Friend): Observable<boolean | undefined> {
    return this.friendsService.addNewFriend(friend);
  }

}
