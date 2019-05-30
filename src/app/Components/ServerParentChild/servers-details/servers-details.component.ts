import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers-details',
  templateUrl: './servers-details.component.html',
  styleUrls: ['./servers-details.component.scss']
})
export class ServersDetailsComponent implements OnInit {
  @Input('ServElement') element: { type: string, name: string, content: string };
  constructor() { }

  ngOnInit() {
  }

}
