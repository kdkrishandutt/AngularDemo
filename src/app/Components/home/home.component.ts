import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 name:string="";
  constructor() { 
    this.name="Hello, Guest<br/> this is Home Page";
  }

  ngOnInit() {
  }

}
