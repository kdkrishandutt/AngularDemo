import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Models/message';
@Component({
  selector: 'app-childviaviewchild',
  templateUrl: './childviaviewchild.component.html',
  styleUrls: ['./childviaviewchild.component.scss']
})
export class ChildviaviewchildComponent implements OnInit {
  message: Message = null;
  constructor() { }
  ngOnInit() {
  }
  show(msg: Message) {
    this.message = msg;
    setTimeout(() => {
      this.message = null;
    }, 2000);
  }

}


