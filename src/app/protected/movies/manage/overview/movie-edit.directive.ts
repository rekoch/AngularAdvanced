import {Directive, EventEmitter, Output, ViewContainerRef} from '@angular/core';
import {Movie} from "../../../../shared/models/movie";

@Directive({
  selector: '[appMovieEdit]'
})
export class MovieEditDirective {

  @Output() changeMode = new EventEmitter<string>();
  @Output() movieSaved = new EventEmitter<Movie>();

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
