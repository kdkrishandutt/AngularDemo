import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-lifecycle',
  templateUrl: './comp-lifecycle.component.html',
  styleUrls: ['./comp-lifecycle.component.scss']
})
export class CompLifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit( ) {
  }

}
