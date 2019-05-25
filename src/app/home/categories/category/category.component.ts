import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { Category } from '../categories.component';
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
    const angle = Math.floor(Math.random() * 180);
    $('.mat-card.card-' + this.index.toString()).css(
      'background',
      `linear-gradient(${angle}deg, ${this.getRandomColor()}, ${this.getRandomColor()})`
    );
  }

  getRandomColor() {
    return `hsl(${Math.floor(Math.random() * 719)}, ${Math.floor(Math.random() * 70 + 30)}%, 50%)`;
  }
}
