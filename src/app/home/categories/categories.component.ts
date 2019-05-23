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
    this.topCategories = this.categories.slice(0, 4);
  }
}
