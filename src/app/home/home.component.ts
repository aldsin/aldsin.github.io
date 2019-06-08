import { Component, OnInit } from '@angular/core';
import { Algorithm } from 'src/app/models/algorithm.model';
import { map, startWith } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  algorithms: Algorithm[];
  options: string[];
  filteredOptions: Observable<string[]>;
  searchBar = new FormControl();

  constructor(private apollo: Apollo, private router: Router) {}

  ngOnInit() {
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
        this.options = this.algorithms.map(algorithm => algorithm.name);

        // Copied from: Angular material -> autocomplete
        this.filteredOptions = this.searchBar.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      });
  }

  // when clicked on any option, route to that algorithm
  clicked(option) {
    this.router.navigate(['/algorithm', option]);
  }

  // filter dropdown options in searchbar
  // Copied from: Angular material -> autocomplete
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue)).slice(0, 20);
  }
}
