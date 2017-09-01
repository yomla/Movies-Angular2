import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie.service';

import { MovieRowComponent } from '../components/movies/movie-row/movie-row.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule   
  ],

  providers: [
    MovieService
  ],

  exports: [
    MovieRowComponent
  ],

  declarations: [
    MovieRowComponent
  ]
})
export class SharedModule { }
