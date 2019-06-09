import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  topCategories: Category[];
  moreCategories = false;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    // If algorithms are present in localstorage,
    // Then get them first and then wait for the query to get items
    if (localStorage.getItem('allCategories')) {
      this.categories = JSON.parse(localStorage.getItem('allCategories'));
      this.changeCategoryView(this.moreCategories);
    }

    // Get allCategories and display
    // initially display top 4 categories only
    this.apollo
      .watchQuery({
        query: gql`
          {
            allCategories {
              id
              description
              name
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        const res = result.data as { allCategories: Category[] };
        this.categories = res.allCategories;
        localStorage.setItem('allCategories', JSON.stringify(this.categories));
        this.changeCategoryView(this.moreCategories);
      });
  }

  // displays topCategories/allCategories
  changeCategoryView(isMoreNeeded: boolean) {
    if (isMoreNeeded) {
      this.topCategories = this.categories.slice();
      this.moreCategories = true;
    } else {
      this.topCategories = this.categories.slice(0, 4);
      this.moreCategories = false;
    }
  }
}
