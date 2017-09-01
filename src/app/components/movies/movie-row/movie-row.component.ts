import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html',
})
export class MovieRowComponent implements OnInit {

  @Input() movieRow: Movie;
  

  constructor() { }

  ngOnInit() {
  }

}
