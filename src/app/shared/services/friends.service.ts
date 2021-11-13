import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {Friend} from "../models/friend";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  friends: Friend[] = [
    {name: 'dr Dänu', status: 'accepted', email: 'daenu@gmx.ch'},
    {name: 'Simä', status: 'invited', email: 'simae.guggi@grandios.com'},
    {name: 'Gäbu', status: 'invited', email: 'g-y-me@apple.com'},
    {name: 'Joelle', status: 'accepted', email: 'scho-elle@tomorrow.be'},
    {name: 'Xavier', status: 'invited', email: 'x-men-no1@liveforrever.usa'},
    {name: 'Chantale', status: 'accepted', email: 'hacker-coder@anonymous.li'},
    {name: 'Frederico', status: 'invited', email: 'le-chanson.99@musical.ly'},
  ]

  constructor() {
  }

  getAllFriends(): Observable<Friend[]> {
    return of<Friend[]>(this.friends).pipe(
      map(allFriends => allFriends.map(friend => {
        friend.isSelected = false;
        return friend
      }))
    )
  }

  addNewFriend(friend: Friend): Observable<boolean> {
    this.friends.push(friend);
    return of(true);
  }

}
