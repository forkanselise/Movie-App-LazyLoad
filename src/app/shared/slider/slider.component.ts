import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({opacity: 0})),
      transition('void <=> *', [animate('1000ms')]),
      // transition('* => void', [animate('1000ms')])
    ])
  ]
})
export class SliderComponent implements OnInit, OnChanges, AfterViewInit{

  @Input() slide:any

  imageBaseUrl= 'https://image.tmdb.org/t/p/original/'

  currentIndex = 0

  dataLoaded = false;

  constructor() { }

  ngOnInit(): void {
    this.sliding()
  }

  ngAfterViewInit(): void {
      console.log(this.slide)
  }
  ngOnChanges() {
    console.log(this.slide)
    this.dataLoaded=true
    // this.sliding()
  }

  sliding() {
    // if(this.dataLoaded) {
      setInterval(()=>{
        this.currentIndex++;
        this.currentIndex%=20;
      },3000)
    }
  // }

}
