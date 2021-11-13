import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../../../shared/models/movie";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() allMovies: Movie [] = [];
  @Output() movieChanged = new EventEmitter<Movie>();
  selectedMovie: Movie | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectMovie(movie: Movie | null) {
    if (movie) {
      this.selectedMovie = {...movie};
    }
  }

  hoverMovie(movie: Movie) {
    this.allMovies.forEach(movie => movie.isActive = false);
    movie.isActive = true;
  }
}
