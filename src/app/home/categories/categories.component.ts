import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Category } from 'src/app/models/category.model';
import { Algorithm } from 'src/app/models/algorithm.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  topCategories: Category[];
  algorithms: Algorithm[];
  myControl = new FormControl();
  myForm: FormGroup;
  options: string[];
  filteredOptions: Observable<string[]>;

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

    // Get all algorithms and fill their names in options
    // options is used for dropdown
    this.apollo
      .watchQuery({
        query: gql`
          {
            allAlgorithms {
              name
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        const res = result.data as { allAlgorithms: Algorithm[] };
        this.algorithms = res.allAlgorithms;
        this.options = this.algorithms.map(algorithm => algorithm.name.replace(/_/g, ' '));

        // Copied from: Angular material -> autocomplete
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      });
  }

  // when clicked on any option, route to that algorithm
  clicked(option) {
    console.log(option);
  }

  // when More/Less button is clicked, then display categories accordingly
  changeCategoryView(isMoreNeeded: boolean) {
    if (isMoreNeeded) {
      this.topCategories = this.categories.slice();
    } else {
      this.topCategories = this.categories.slice(0, 4);
    }
  }

  // filter dropdown options in searchbar
  // Copied from: Angular material -> autocomplete
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue)).slice(0, 20);
  }
}
