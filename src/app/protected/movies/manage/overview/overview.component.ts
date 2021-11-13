import {Component, ComponentRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Movie} from "../../../../shared/models/movie";
import {MovieEditDirective} from "./movie-edit.directive";
import {MovieEdit} from "./movie-edit";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {MovieEditComponent} from "./movie-edit/movie-edit.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() allMovies: Movie [] = [];
  @Output() movieChanged = new EventEmitter<Movie>();
  @ViewChild(MovieEditDirective, {static: true}) appMovieEdit!: MovieEditDirective;

  movieEditComponents = new Map<DynamicComponents, any>();
  activeComponentName: DynamicComponents = 'detail';

  selectedMovie: Movie | null = null;
  editActive = false;

  componentRef!: ComponentRef<MovieEdit>;

  constructor() {
    this.movieEditComponents.set('detail', MovieDetailComponent)
    this.movieEditComponents.set('edit', MovieEditComponent)
  }

  ngOnInit(): void {
  }

  selectMovie(movie: Movie | null) {
    if (movie) {
      this.selectedMovie = {...movie};
    }
    this.loadComponent();
  }

  hoverMovie(movie: Movie) {
    this.allMovies.forEach(movie => movie.isActive = false);
    movie.isActive = true;
  }

  changeMode() {
    this.activeComponentName = 'edit';
    this.loadComponent();
  }

  saveMovie($event: Movie) {
    this.movieChanged.emit($event);
    this.appMovieEdit.viewContainerRef.clear();
  }

  private loadComponent() {
    const viewContainerRef = this.appMovieEdit.viewContainerRef;
    viewContainerRef.clear();
    if (this.selectedMovie) {
      this.componentRef = viewContainerRef.createComponent<MovieEdit>(this.movieEditComponents.get(this.activeComponentName));
      this.componentRef.instance.movie = this.selectedMovie;
      this.componentRef.instance.childRef = this.appMovieEdit;
    }
  }
}

type DynamicComponents = 'detail' | 'edit';
