import { Component, OnInit } from '@angular/core';
import { Emp } from '../../Models/Employee.Model';

import { Sort } from '@angular/material';
import { SortingSearchingServiceService } from '../../Services/sorting-searching-service.service';
@Component({
  selector: 'app-sorting-searching',
  templateUrl: './sorting-searching.component.html',
  styleUrls: ['./sorting-searching.component.scss']
})
export class SortingSearchingComponent implements OnInit {
  allEmp: Emp[] = [];
  sortedFood: Emp[];
  constructor(private data: SortingSearchingServiceService) { 
    this.sortedFood = this.allEmp;
  }

  ngOnInit() {
    this.loadEmpList();
  }
  loadEmpList() {
    
    this.allEmp = this.data.GetEmployee();
    this.sortedFood = this.data.GetEmployee();
  }

  sortFood(sort: Sort) {
    debugger;
    const data1 = this.allEmp.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedFood = data1;
      return;
    }
    this.sortedFood = data1.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Name': return compare(a.Name, b.Name, isAsc);
        case 'MobileNo': return compare(a.MobileNo, b.MobileNo, isAsc);
        case 'Department': return compare(a.Department, b.Department, isAsc);
        case 'carbs': return compare(a.City, b.City, isAsc);
        case 'protein': return compare(a.country, b.country, isAsc);
        default: 0;
      }
    });
  }


}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}