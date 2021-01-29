import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.scss']
})
export class KittenComponent implements OnInit {

  @Input()name:string;
  constructor() { }

  ngOnInit() {
  }

}
