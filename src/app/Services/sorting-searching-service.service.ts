import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Emp } from "../Models/Employee.Model";
@Injectable({
  providedIn: 'root'
})
export class SortingSearchingServiceService {
  empList: Emp[] = [];
  constructor() {
  }

  GetEmployee(): Emp[] {
    this.empList.push(new Emp(1, 'Sanwar', '3232323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(2, 'Sam', '676767676', 'IT', 'Delhi', 'India'));
    this.empList.push(new Emp(3, 'Nisha', '88888', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(4, 'David', '348989898934', 'IT', 'Noida', 'India'));
    this.empList.push(new Emp(5, 'ABC', '9898989', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(6, 'XYZ', '8989898989', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(7, 'QWE', '565656565', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(8, 'SABS', '323289898323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(9, 'Sanwar', '7676767', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(10, 'Sanwar', '3232323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(11, 'Sam', '676767676', 'IT', 'Delhi', 'India'));
    this.empList.push(new Emp(12, 'Nisha', '88888', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(13, 'David', '348989898934', 'IT', 'Noida', 'India'));
    this.empList.push(new Emp(14, 'ABC', '9898989', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(15, 'XYZ', '8989898989', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(16, 'QWE', '565656565', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(17, 'SABS', '323289898323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(18, 'Sanwar', '7676767', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(19, 'Sanwar', '3232323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(20, 'Sam', '676767676', 'IT', 'Delhi', 'India'));
    this.empList.push(new Emp(21, 'Nisha', '88888', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(22, 'David', '348989898934', 'IT', 'Noida', 'India'));
    this.empList.push(new Emp(23, 'ABC', '9898989', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(24, 'XYZ', '8989898989', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(25, 'QWE', '565656565', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(26, 'SABS', '323289898323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(27, 'Sanwar', '7676767', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(28, 'Sanwar', '3232323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(29, 'Sam', '676767676', 'IT', 'Delhi', 'India'));
    this.empList.push(new Emp(30, 'Nisha', '88888', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(31, 'David', '348989898934', 'IT', 'Noida', 'India'));
    this.empList.push(new Emp(32, 'ABC', '9898989', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(33, 'XYZ', '8989898989', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(34, 'QWE', '565656565', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(35, 'SABS', '323289898323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(36, 'Sanwar', '7676767', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(37, 'Sanwar', '3232323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(38, 'Sam', '676767676', 'IT', 'Delhi', 'India'));
    this.empList.push(new Emp(39, 'Nisha', '88888', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(40, 'David', '348989898934', 'IT', 'Noida', 'India'));
    this.empList.push(new Emp(41, 'ABC', '9898989', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(42, 'XYZ', '8989898989', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(43, 'QWE', '565656565', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(44, 'SABS', '323289898323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(45, 'Sanwar', '7676767', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(46, 'Sanwar', '3232323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(47, 'Sam', '676767676', 'IT', 'Delhi', 'India'));
    this.empList.push(new Emp(48, 'Nisha', '88888', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(49, 'David', '348989898934', 'IT', 'Noida', 'India'));
    this.empList.push(new Emp(50, 'ABC', '9898989', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(51, 'XYZ', '8989898989', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(52, 'QWE', '565656565', 'HR', 'Jaipur', 'India'));
    this.empList.push(new Emp(53, 'SABS', '323289898323', 'IT', 'Jaipur', 'India'));
    this.empList.push(new Emp(54, 'ACB', '7676767', 'HR', 'Jaipur', 'India'));
    return this.empList;
  }

}  