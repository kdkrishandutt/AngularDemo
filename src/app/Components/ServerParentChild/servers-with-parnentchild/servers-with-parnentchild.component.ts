import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-with-parnentchild',
  templateUrl: './servers-with-parnentchild.component.html',
  styleUrls: ['./servers-with-parnentchild.component.scss']
})
export class ServersWithParnentchildComponent implements OnInit {
  serverElements = [{ type: 'server', name: 'testServer', content: 'testServerContent' }];
  constructor() { }
  button_name:string="Show Disciption";
  show_dialog:boolean=false;
  ngOnInit() {
  }
  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddBlueprint(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  toggle() {
    this.show_dialog = !this.show_dialog;

    // CHANGE THE TEXT OF THE BUTTON.
    if(this.show_dialog) 
      this.button_name = "Hide Discription!";
    else
      this.button_name = "Show Discription!";
  }
}
