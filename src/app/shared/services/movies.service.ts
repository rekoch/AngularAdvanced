import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Movie} from "../models/Movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  allMovies = [
    {id: 1, title: "what happened at BIT", imageUrl: 'https://picsum.photos/id/1025/200/300'},
    {id: 2, title: "the other night in Zollikofen", imageUrl: 'https://picsum.photos/id/158/200/300'},
    {id: 3, title: "Don't mess with Oblique", imageUrl: 'https://picsum.photos/id/219/200/300'},
  ]

  constructor() {
  }

  public getAllMovies(): Observable<Movie[]> {
    return of(
      this.allMovies
    )
  }

  public getMovieById(id: number): Observable<Movie> {
    let foundMovie = this.allMovies.find(movie => movie.id === id);
    if (!foundMovie) {
      foundMovie = {id: -1, title: '', imageUrl: ''}
    }
    return of(foundMovie)
  }
}


