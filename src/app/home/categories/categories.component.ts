import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

export interface Category {
  name: string;
  description: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  topCategories: Category[];
  filteredCategories: Category[];
  moreCategories = false;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            allCategories {
              description
              name
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        const res = result.data as { allCategories: Category[] };
        this.categories = res.allCategories;
        this.filteredCategories = this.categories.slice();
        this.topCategories = this.filteredCategories.slice(0, 4);
      });
  }

  filter(event) {
    this.filteredCategories = this.categories.filter(el => el.name.toLowerCase().includes(event.target.value.toLowerCase()));
    this.topCategories = this.moreCategories ? this.filteredCategories.slice() : this.filteredCategories.slice(0, 4);
  }

  changeCategoryView(isMoreNeeded: boolean) {
    if (isMoreNeeded) {
      this.moreCategories = true;
      this.topCategories = this.filteredCategories.slice();
    } else {
      this.moreCategories = false;
      this.topCategories = this.filteredCategories.slice(0, 4);
    }
  }
}
