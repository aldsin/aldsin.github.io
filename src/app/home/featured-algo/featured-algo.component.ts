import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { Algorithm } from 'src/app/models/algorithm.model';

@Component({
  selector: 'app-featured-algo',
  templateUrl: './featured-algo.component.html',
  styleUrls: ['./featured-algo.component.css']
})
export class FeaturedAlgoComponent implements OnInit, AfterViewInit {
  featuredAlgo: Algorithm;

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
      `linear-gradient(${this.getRandomColor()})`
    );
  }

  getRandomColor() {
    const hue = Math.floor(Math.random() * 719);
    const sat = Math.floor(Math.random() * 40)
    return `90deg, hsl(${hue}, ${sat + 20}%, 70%), hsl(${hue}, ${sat + 60}%, 60%)`;
  }
}
