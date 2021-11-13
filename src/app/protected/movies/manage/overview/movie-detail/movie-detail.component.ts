import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../../../../shared/models/movie";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie | undefined;
  @Output() activateEditMode = new EventEmitter();


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
    this.activateEditMode.emit()
  }
}
