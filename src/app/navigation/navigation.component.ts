import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  links: Link[] = [
    { url: 'dashboard', name: 'Home' },
    { url: 'search', name: 'Search' },
    { url: 'recommendation', name: 'Recommendation' },
    { url: 'trailer', name: 'Trailer' },
    { url: 'manage', name: 'Manage movies' },
    { url: 'rate', name: 'Rate movies' },
    { url: 'invite', name: 'Invite Friend' },
    { url: 'login', name: 'Login' },
    { url: 'register', name: 'Register' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface Link {
  url: string;
  name: string;
}
