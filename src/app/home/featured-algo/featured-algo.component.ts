import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { Algorithm } from 'src/app/models/algorithm.model';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-algo',
  templateUrl: './featured-algo.component.html',
  styleUrls: ['./featured-algo.component.css']
})
export class FeaturedAlgoComponent implements OnInit, AfterViewInit {
  featuredAlgo: Algorithm;

  constructor(private apollo: Apollo, private router: Router) {}

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
      });
  }

  ngAfterViewInit() {
    $('.featured').css('background', `linear-gradient(${this._getRandomColor()})`);
  }

  private _getRandomColor() {
    const hue = Math.floor(Math.random() * 719);
    const sat = Math.floor(Math.random() * 40);
    return `90deg, hsl(${hue}, ${sat + 20}%, 70%), hsl(${hue}, ${sat + 60}%, 60%)`;
  }

  navigate(name) {
    this.router.navigate(['/algorithm', name]);
  }
}
