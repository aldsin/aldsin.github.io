import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})
export class AlgorithmComponent implements OnInit {
  algoName: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.algoName = this.route.snapshot.params.name;
  }
}
