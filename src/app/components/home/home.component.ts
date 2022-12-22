import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieList: any

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.getMovies('upcoming').subscribe(res => {
      this.movieList = res;
      console.log(this.movieList)
    })
  }

}
