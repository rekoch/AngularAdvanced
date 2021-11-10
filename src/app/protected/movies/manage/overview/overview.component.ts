import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../../shared/models/movie";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() allMovies: Movie [] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
