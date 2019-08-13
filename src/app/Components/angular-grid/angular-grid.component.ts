import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-angular-grid',
  templateUrl: './angular-grid.component.html',
  styleUrls: ['./angular-grid.component.scss']
})
export class AngularGridComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  constructor() { }

  ngOnInit() {
  }
  gridcolumns = [
    { headerName: 'Studentname', field: 'studentname', sortable: true, filter: true, checkboxSelection: true, editable: true },
    { headerName: 'Classname', field: 'Classname', sortable: true, filter: true, editable: true },
    { headerName: 'Fee', field: 'fee', sortable: true, filter: true, editable: true }
  ];

  gridData = [
    { studentname: 'Gajendra', Classname: 'Celica', fee: 35000 },
    { studentname: 'Rohit', Classname: 'Mondeo', fee: 32000 },
    { studentname: 'Rahul', Classname: 'Boxter', fee: 72000 },
    { studentname: 'Sachin', Classname: 'Boxter', fee: 82000 },
    { studentname: 'Ajay', Classname: 'Boxter', fee: 98000 },
    { studentname: 'Punam', Classname: 'Boxter', fee: 24000 },
    { studentname: 'Rohit', Classname: 'Mondeo', fee: 32000 },
    { studentname: 'Rahul', Classname: 'Boxter', fee: 72000 },
    { studentname: 'Sachin', Classname: 'Boxter', fee: 82000 },
    { studentname: 'Ajay', Classname: 'Boxter', fee: 98000 },
    { studentname: 'Punam', Classname: 'Boxter', fee: 24000 },
    { studentname: 'Rohit', Classname: 'Mondeo', fee: 32000 },
    { studentname: 'Rahul', Classname: 'Boxter', fee: 72000 },
    { studentname: 'Sachin', Classname: 'Boxter', fee: 82000 },
    { studentname: 'Ajay', Classname: 'Boxter', fee: 98000 },
    { studentname: 'Punam', Classname: 'Boxter', fee: 24000 },
  ];

  getSelectedRows() {    
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.studentname + '/' + node.Classname + '/' + node.fee).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
  onCellClicked(event) {    
    alert(`Selected nodes: ${event.data.studentname + '/' + event.data.Classname + '/' + event.data.fee}`);
  }
  onCellDoubleClicked(event) {    
    alert(`Selected nodes: ${event.data.studentname + '/' + event.data.Classname + '/' + event.data.fee}`);
  }
}
