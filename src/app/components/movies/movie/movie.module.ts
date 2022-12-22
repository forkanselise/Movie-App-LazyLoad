import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from '../movies.component';
import { Routes, RouterModule } from '@angular/router';
// import { Moviu}

const movieRoutes: Routes = [
  {
    path: '', children:[
      {path:'', component: MoviesComponent}
    ]
  }
]

@NgModule({
  declarations: [
    MoviesComponent,
    // movieRoutes
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(movieRoutes)
  ]
})
export class MovieModule {
  constructor(){
    console.log("movie module loaded")
  }
 }
