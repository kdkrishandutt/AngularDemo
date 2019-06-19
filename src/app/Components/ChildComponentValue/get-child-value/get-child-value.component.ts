import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-get-child-value',
  templateUrl: './get-child-value.component.html',
  styleUrls: ['./get-child-value.component.scss']
})
export class GetChildValueComponent implements OnInit {
  num1: string;
  num2: string;
  Total: number;
  childVal: string;
  constructor() { }

  ngOnInit() {
  }
  ConvertToInt(val: string): number {
    return parseInt(val);
  }
  getTotalAmt() {
    this.Total = this.ConvertToInt(this.num1) + this.ConvertToInt(this.num2);
  }

  getUpdatedvalue($event) {
    this.childVal = $event;
    console.log($event);
    this.Total = $event * (this.ConvertToInt(this.num1) + this.ConvertToInt(this.num2));
  }
}
