import {Component, OnInit} from '@angular/core';
import {FriendsService} from "../../../shared/services/friends.service";
import {Friend} from "../../../shared/models/friend";
import {EmailHelperService} from "../../../shared/services/email-helper.service";

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
    this.checkEmail($event.email).then(result => {
        if (result) {
          this.addFriend($event).then(() => {
              console.log('juhuuuu, it worked')
            }
          );
        }
      }
    );
  }

  async checkEmail(email: string): Promise<boolean | undefined> {
    return await this.emailValidator.checkIsEmailValid(email).toPromise();
  }

  async addFriend(friend: Friend): Promise<boolean | undefined> {
    return await this.friendsService.addNewFriend(friend).toPromise();
  }

}
