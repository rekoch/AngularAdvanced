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
    if (this.selectedMovie && movie) {
      this.selectedMovie.id = movie?.id ? movie.id : -1;
      this.selectedMovie.title = movie?.title ? movie.title : '';
      this.selectedMovie.imageUrl = movie?.imageUrl ? movie.imageUrl : '';
      this.selectedMovie.trailerUrl = movie?.trailerUrl ? movie.trailerUrl : '';
      this.selectedMovie.boxOffice = movie?.boxOffice ? movie.boxOffice : 0;
    } else if (movie) {
      this.selectedMovie = {
        id: movie?.id ? movie.id : -1,
        title: movie?.title ? movie.title : '',
        imageUrl: movie?.imageUrl ? movie.imageUrl : '',
        trailerUrl: movie?.trailerUrl ? movie.trailerUrl : '',
        boxOffice: movie?.boxOffice ? movie.boxOffice : 0
      }
    }

  }

  hoverMovie(movie: Movie) {
    this.allMovies.forEach(movie => movie.isActive = false);
    movie.isActive = true;
  }
}
