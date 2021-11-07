import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  links: Link[] = [
    {url: 'dashboard', name: 'Home'},
    {url: 'search', name: 'Search'},
    {url: 'recommendation', name: 'Recommendation'},
    {url: 'trailer', name: 'Trailer'},
    {url: 'admin/movies/manage', name: 'Manage movies'},
    {url: 'admin/movies/rate', name: 'Rate movies'},
    {url: 'admin/friends/invite', name: 'Invite Friend'},
    {url: 'user/login', name: 'Login'},
    {url: 'user/register', name: 'Register'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

interface Link {
  url: string;
  name: string;
}
