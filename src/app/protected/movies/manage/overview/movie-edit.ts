import {Movie} from "../../../../shared/models/movie";
import {MovieEditDirective} from "./movie-edit.directive";

export interface MovieEdit {
  movie: Movie
  childRef: MovieEditDirective
}
