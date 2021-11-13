import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Movie} from "../../../../../shared/models/movie";

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  @Input() movieToChange: Movie | undefined;
  @Output() movieChanged = new EventEmitter<Movie>();

  isEditActive = false;
  movieFormGroup: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {
  }

  get title(): FormControl {
    return this.movieFormGroup?.get('title') as FormControl;
  }

  get imageUrl(): FormControl {
    return this.movieFormGroup?.get('imageUrl') as FormControl;
  }

  get trailerUrl(): FormControl {
    return this.movieFormGroup?.get('trailerUrl') as FormControl;
  }

  get boxOffice(): FormControl {
    return this.movieFormGroup?.get('boxOffice') as FormControl;
  }

  ngOnInit(): void {
    this.movieFormGroup = this.formBuilder.group(
      {
        title: [this.movieToChange?.title, Validators.minLength(3)],
        imageUrl: [this.movieToChange?.imageUrl, Validators.minLength(3)],
        trailerUrl: [this.movieToChange?.trailerUrl, Validators.minLength(3)],
        boxOffice: [this.movieToChange?.boxOffice, Validators.minLength(1)],
      })
  }

  editMovie() {
    this.movieChanged.emit({
      trailerUrl: this.trailerUrl.value,
      imageUrl: this.imageUrl.value,
      title: this.title.value,
      id: this.movieToChange?.id ? this.movieToChange?.id : 0
    });
  }

  prettifyBoxOffice() {
    /*
        console.log('prettier runs');
    */
    return this.movieToChange?.boxOffice ?
      this.movieToChange.boxOffice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ' ") :
      0;
  }
}
