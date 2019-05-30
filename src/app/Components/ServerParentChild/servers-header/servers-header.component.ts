import { Component, OnInit,EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-servers-header',
  templateUrl: './servers-header.component.html',
  styleUrls: ['./servers-header.component.scss']
})
export class ServersHeaderComponent implements OnInit {
  @Output() ServerCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() BluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.ServerCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.BluePrintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }
}
