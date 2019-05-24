import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-algo',
  templateUrl: './featured-algo.component.html',
  styleUrls: ['./featured-algo.component.css']
})
export class FeaturedAlgoComponent implements OnInit {
  featuredAlgo: { name: string; description: string };

  constructor() {}

  ngOnInit() {
    this.featuredAlgo = {
      name: 'Test1',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.\
         Ratione tenetur soluta fuga ipsam minima minus placeat nobis voluptatibus obcaecati quasi odit est porro ducimus esse,\
         quibusdam velit quo nemo optio!'
    };
  }
}
