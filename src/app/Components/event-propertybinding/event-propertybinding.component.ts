import { Component, OnInit } from '@angular/core';
import { ButtoneventService } from '../../Services/buttonevent.service';
@Component({
  selector: 'app-event-propertybinding',
  templateUrl: './event-propertybinding.component.html',
  styleUrls: ['./event-propertybinding.component.scss']
})
export class EventPropertybindingComponent implements OnInit {
  Eventtext1: string = "Please click Click me button";
  Eventtext: string = "Please click Service Call button";
  Eventtext2: string = "Please click Style binding button";
  h1Style: boolean = false;
  constructor(private Data: ButtoneventService) { }

  ngOnInit() {
  }
  clickMe() {
    this.Eventtext1 = "Call button click Event!";
    this.Eventtext = "Please click Service Call button";
    this.h1Style = false;
  }
  stypebinding() {
    this.h1Style = true;
  }
  clickMewithservice() {
    this.Eventtext1 = "Please click Click me button";
    this.Eventtext = this.Data.buttonclick();
    this.h1Style = false;
  }

}
