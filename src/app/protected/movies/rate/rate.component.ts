import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../../shared/services/movies.service";
import {Movie} from "../../../shared/models/Movie";
import {Observable} from "rxjs";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  movie$!: Observable<Movie>;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) {
  }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie$ = this.movieService.getMovieById(+movieId);
    }
  }

}
