import {Component, OnInit} from '@angular/core';
import {ActivationStart, Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  links: Link[] = [
    {url: 'dashboard', name: 'Home'},
    {url: 'admin/movies/manage', name: 'Manage movies'},
    {url: 'admin/movies/rate', name: 'Rate movies'},
    {url: 'admin/friends/invite', name: 'Invite Friend'},
    {url: 'user/login', name: 'Login'},
    {url: 'user/register', name: 'Register'},
  ];

  isHeaderVisible = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    //example three --> the only solution for this purpose
    this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof ActivationStart) {
        console.log(routerEvent.snapshot.data);
        this.isHeaderVisible = !routerEvent.snapshot.data.hideHeader;
      }
    })
  }
}

interface Link {
  url: string;
  name: string;
}
