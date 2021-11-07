import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  links: Link[] = [
    {url: '/dashboard', name: 'Home'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


interface Link {
  url: string,
  name: string
}
