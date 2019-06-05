import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, AfterViewInit {
  @Input() category: Category;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    $('.mat-card.card-' + this.index.toString()).css('background', `linear-gradient(${this.getRandomColor()})`);
  }

  getRandomColor() {
    const hue = Math.floor(Math.random() * 719);
    const sat = Math.floor(Math.random() * 40);
    return `90deg, hsl(${hue}, ${sat + 30}%, 70%), hsl(${hue}, ${sat + 60}%, 60%)`;
  }
}
