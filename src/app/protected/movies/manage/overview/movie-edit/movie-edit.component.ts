import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Movie} from "../../../../../shared/models/movie";
import {MovieEdit} from "../movie-edit";
import {MovieEditDirective} from "../movie-edit.directive";

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieEditComponent implements OnInit, MovieEdit {

  @Input() movie!: Movie;
  @Input() childRef!: MovieEditDirective;

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
        title: [this.movie?.title, Validators.minLength(3)],
        imageUrl: [this.movie?.imageUrl, Validators.minLength(3)],
        trailerUrl: [this.movie?.trailerUrl, Validators.minLength(3)],
        boxOffice: [this.movie?.boxOffice, Validators.minLength(1)],
      })
  }

  editMovie() {
    this.childRef.movieSaved.emit({
      trailerUrl: this.trailerUrl.value,
      imageUrl: this.imageUrl.value,
      title: this.title.value,
      id: this.movie?.id ? this.movie?.id : 0
    });
  }
}
