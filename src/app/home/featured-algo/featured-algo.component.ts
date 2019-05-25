import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-featured-algo',
  templateUrl: './featured-algo.component.html',
  styleUrls: ['./featured-algo.component.css']
})
export class FeaturedAlgoComponent implements OnInit, AfterViewInit {
  featuredAlgo: { name: string; description: string };

  constructor() {}

  ngOnInit() {
    this.featuredAlgo = {
      name: 'Test1',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.\
         Ratione tenetur soluta fuga ipsam minima minus placeat nobis voluptatibus obcaecati quasi odit est porro ducimus esse,\
         quibusdam velit quo nemo optio!'
    };
  }

  ngAfterViewInit() {
    const angle = Math.floor(Math.random() * 90);
    $('.featured').css(
      'background',
      `linear-gradient(${angle}deg, ${this.getRandomColor()}, ${this.getRandomColor()})`
    );
  }

  getRandomColor() {
    const letters = '456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }
}
