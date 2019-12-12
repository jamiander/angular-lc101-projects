import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://theculturetrip.com/north-america/mexico/articles/12-reasons-why-you-should-visit-mexico-city-at-least-once-in-your-lifetime/","https://www.newzealand.com/us/milford-sound/"]
  constructor() { }

  ngOnInit() {
  }

}
