import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  @Input() videoSrc: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
