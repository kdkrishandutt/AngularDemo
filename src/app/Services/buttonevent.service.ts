import { Injectable } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ButtoneventService {
  text: string = "";
  constructor() { }
   buttonclick() {
     this.text = "Call Click event from service!S";
     return this.text;
  }
}

