import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { Algorithm } from 'src/app/models/algorithm.model';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-featured-algo',
  templateUrl: './featured-algo.component.html',
  styleUrls: ['./featured-algo.component.css']
})
export class FeaturedAlgoComponent implements OnInit, AfterViewInit {
  featuredAlgo: Algorithm;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            codeOfTheDay {
              name
              description
              langs {
                langName
              }
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        const res = result.data as { codeOfTheDay: Algorithm[] };
        this.featuredAlgo = res.codeOfTheDay[0];
        console.log(this.featuredAlgo);
      });
  }

  ngAfterViewInit() {
    const angle = Math.floor(Math.random() * 90);
    $('.featured').css('background', `linear-gradient(${this.getRandomColor()})`);
  }

  getRandomColor() {
    const hue = Math.floor(Math.random() * 719);
    const sat = Math.floor(Math.random() * 40);
    return `90deg, hsl(${hue}, ${sat + 20}%, 70%), hsl(${hue}, ${sat + 60}%, 60%)`;
  }
}
