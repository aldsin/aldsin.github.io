import { Component, OnInit } from '@angular/core';
import { Algorithm } from 'src/app/models/algorithm.model';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-algo',
  templateUrl: './featured-algo.component.html',
  styleUrls: ['./featured-algo.component.css']
})
export class FeaturedAlgoComponent implements OnInit {
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

  navigate(name) {
    this.router.navigate(['/algorithm', name]);
  }
}
