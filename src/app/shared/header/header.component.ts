import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = [
    {id: '/',value: 'Home'},
    {id: '/movies',value: 'Movies'},
    {id: '/tv_shows',value: 'TV Shows'},
    {id: '/genres',value: 'Genres'},
  ]

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.getMovies('popular').subscribe(res =>{
      console.log(res)
    })
  }

  display(data: any) {
    console.log(data)
  }

}
