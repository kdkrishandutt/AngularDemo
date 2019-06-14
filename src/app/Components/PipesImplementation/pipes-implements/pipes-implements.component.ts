import { Component, OnInit } from '@angular/core';
import { Emp } from '../../../Models/Employee.Model';
import { SortingSearchingServiceService } from '../../../Services/sorting-searching-service.service';

@Component({
  selector: 'app-pipes-implements',
  templateUrl: './pipes-implements.component.html',
  styleUrls: ['./pipes-implements.component.scss']
})
export class PipesImplementsComponent implements OnInit {
  allEmp: Emp[] = [];
  sortedFood: Emp[];

  title = 'Welcome';  
  birthday = new Date();  
  jsonval = {name:'John', age:'22', address:{a1:'Mumbai', a2:'Maharashtra'}};  
  days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat","Sun"];

  constructor(private data: SortingSearchingServiceService) { }

  ngOnInit() {
    this.allEmp = this.data.GetEmployee();
    this.sortedFood = this.data.GetEmployee();
  }

}
