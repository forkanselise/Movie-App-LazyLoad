import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl= 'https://api.themoviedb.org/3/movie/'

  apiKey= '?api_key=4972464e7c5458ebaaf29cb554132bd6'

  constructor(private http: HttpClient) { }

  getMovies(data: string) {
    let s = this.baseUrl + data + this.apiKey;
    // console.log(s)

    return this.http.get(this.baseUrl + data + this.apiKey).pipe(
      map((response:any) => {
        console.log(response)
        return (response.results);
      })
    )
  }

}
