import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // example one --> this does provide the right data, but we want to have it in the navigation component
    console.log("this is from the login component itself. Header is: " + this.activatedRoute.snapshot.data.hideHeader);

    // example two --> this does provide the right data, but we want to have it in the navigation component
    this.activatedRoute.data.subscribe(data => console.log("this is from the login component. Header is: " + data.hideHeader));
  }

}
