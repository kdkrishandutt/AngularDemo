import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-childcomponet',
  templateUrl: './childcomponet.component.html',
  styleUrls: ['./childcomponet.component.scss']
})
export class ChildcomponetComponent implements OnInit {
  @Input() Addition: number;
  @Output() valueUpdate = new EventEmitter();
  num3: string;
  constructor() { }
  ngOnInit() {
  }
  updateValue(val) {
    //this.valueUpdate.emit(val * this.Addition);
    this.valueUpdate.emit(val);
  }

}
