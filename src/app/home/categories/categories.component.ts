import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    this.categories = [
      { name: 'Test1', description: 'Random Text 1' },
      { name: 'Test2', description: 'Thode aur algos' },
      { name: 'Test3', description: 'Aur bhi zada' },
      { name: 'Test4', description: 'Ab bas na' },
      { name: 'Test5', description: 'Description Description 5' },
      { name: 'Test6', description: 'Description Description 6' },
      { name: 'Test7', description: 'Description Description 7' }
    ];
    this.filteredCategories = this.categories.slice();
    this.topCategories = this.filteredCategories.slice(0, 4);
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
