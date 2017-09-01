import { Injectable } from '@angular/core';
import { moviesAll } from '../examples';
import { Movie } from '../../components/movies/movie.model';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class MovieService {

  private movies: any = []; 
  private moviesAll: any[] = [];
  

  constructor() {
    this.movies = moviesAll;
  }

  getMovies(){
    this.movies.forEach((value) => {
      this.moviesAll.push(new Movie(value.id, value.Name, value.Director, value.ImageUrl,
                                      value.Duration, value.ReleaseDate, value.Genres))
    })
    return new Observable((movie: Observer<any>) => {
      movie.next(this.moviesAll);
    })
  }
}
