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

  constructor(private apollo: Apollo) {}

  ngOnInit() {
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
        this.topCategories = this.categories.slice(0, 4);
      });
  }

  // when More/Less button is clicked, then display categories accordingly
  changeCategoryView(isMoreNeeded: boolean) {
    if (isMoreNeeded) {
      this.topCategories = this.categories.slice();
    } else {
      this.topCategories = this.categories.slice(0, 4);
    }
  }
}
