import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../../shared/services/movies.service";
import {Movie} from "../../../shared/models/movie";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe(movies => this.movies = movies)
  }

  updateMovie(movie: Movie) {
    this.moviesService.updateMovie(movie);
  }

}
