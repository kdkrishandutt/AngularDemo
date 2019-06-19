import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildvialocalvariableComponent } from '../childvialocalvariable/childvialocalvariable.component';
import { ChildviaviewchildComponent } from '../childviaviewchild/childviaviewchild.component';
import { Message } from 'src/app/Models/message';
@Component({
  selector: 'app-parentvialocalvariable',
  templateUrl: './parentvialocalvariable.component.html',
  styleUrls: ['./parentvialocalvariable.component.scss']
})
export class ParentvialocalvariableComponent {
  @ViewChild(ChildviaviewchildComponent) alert: ChildviaviewchildComponent;

  success() {
    // Saved successfully show the message
    const msg: Message = { message: 'Saved successfully!', status: true };
    this.alert.show(msg);
  }

  failed() {
    // Saved failed show the error message
    const msg: Message = { message: 'Failed to save!', status: false };
    this.alert.show(msg);
  }
}
