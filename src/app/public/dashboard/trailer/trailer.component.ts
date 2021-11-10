import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../shared/models/movie";

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  @Input() movieTrailer: Pick<Movie, "trailerUrl"> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
