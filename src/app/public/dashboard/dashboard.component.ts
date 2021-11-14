import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MoviesService} from "../../shared/services/movies.service";
import {Observable} from "rxjs";
import {Movie} from "../../shared/models/Movie";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  selectedMovie: Movie | undefined;

  constructor(private router: Router, private movieService: MoviesService) {
  }

  ngOnInit(): void {
    this.movies$ = this.movieService.getAllMovies();
  }

  rate(movie: Movie) {
    this.router.navigate(['/admin/movies/rate', {id: movie.id}], {skipLocationChange: true});
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }
}

