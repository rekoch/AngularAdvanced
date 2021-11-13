import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  allMovies: Movie [] = [
    {
      id: 1,
      title: "what happened at BIT",
      imageUrl: 'https://picsum.photos/id/1025/200/300',
      trailerUrl: 'https://movietrailers.apple.com/movies/universal/sing-2/sing-2-trailer-3_i320.m4v',
      boxOffice: 3975397294
    },
    {
      id: 2,
      title: "the other night in Zollikofen",
      imageUrl: 'https://picsum.photos/id/158/200/300',
      trailerUrl: 'https://movietrailers.apple.com/movies/focus_features/last-night-in-soho/last-night-in-soho-trailer-2_i320.m4v',
      boxOffice: 2602347
    },
    {
      id: 3,
      title: "Don't mess with Oblique",
      imageUrl: 'https://picsum.photos/id/219/200/300',
      trailerUrl: 'https://movietrailers.apple.com/movies/mgm/no-time-to-die/no-time-to-die-final-trailer_i320.m4v',
      boxOffice: 895356054
    },
  ]

  constructor() {
  }

  public getAllMovies(): Observable<Movie[]> {
    return of(
      this.allMovies
    )
  }

  public updateMovie(movie: Movie): void {
    let foundMovie = this.allMovies.findIndex(movieIter => movieIter.id === movie.id);
    this.allMovies[foundMovie] = movie;
  }

  public getMovieById(id: number): Observable<Movie> {
    let foundMovie = this.allMovies.find(movie => movie.id === id);
    if (!foundMovie) {
      foundMovie = {id: -1, title: '', imageUrl: ''}
    }
    return of(foundMovie)
  }
}
