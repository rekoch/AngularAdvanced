import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../../../shared/models/movie";
import {MovieEdit} from "../movie-edit";
import {MovieEditDirective} from "../movie-edit.directive";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent implements OnInit, MovieEdit {

  @Input() childRef!: MovieEditDirective;
  @Input() movie!: Movie;

  constructor() {
  }

  ngOnInit(): void {
  }

  prettifyBoxOffice() {
    console.log('prettier runs');
    return this.movie?.boxOffice ?
      this.movie.boxOffice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ' ") :
      0;
  }

  editClicked() {
    this.childRef.changeMode.emit();
  }
}
