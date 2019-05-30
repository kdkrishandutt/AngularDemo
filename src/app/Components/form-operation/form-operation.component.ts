import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 
export class MyItems {
  id: number;
  Fname: string;
  Lname: string;
  message: string;
  Email: string;
  country: string;
  constructor(id: number, Fname: string, Lname: string, message: string, Email: string, country: string) {
    this.id = id;
    this.Fname = Fname;
    this.Lname = Lname;
    this.message = message;
    this.Email = Email;
    this.country = country;

  }
}
@Component({
  selector: 'app-form-operation',
  templateUrl: './form-operation.component.html',
  styleUrls: ['./form-operation.component.scss']
})
export class FormOperationComponent implements OnInit {
  myItems: MyItems[] = [];
  messageForm: FormGroup;
  submitted = false;
  success = false;
  count = 0;
  msg: string = "";
  regModel: MyItems;
  selectedRow: number;
  Fname: string = "";
  Lname: string = "";
  message: string = "";
  Email: string = "";
  country: string = "Select Country";
  CountryList: any;
  isupdated: boolean = false;
  constructor(private formBuilder: FormBuilder,private toastr: ToastrService) { }


  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      Fname: ['', Validators.required],
      Lname: ['', Validators.required],
      message: ['', Validators.required],
      Email: ['', Validators.required],
      country: ['', Validators.required]
    });

    this.CountryList = [
      {
        "Name": "Attorney Case"
      },
      {
        "Name": "bikesh appeal"
      },
      {
        "Name": "BikeshAppeal"
      },
      {
        "Name": "Case Info"
      },
      {
        "Name": "Case Infoe"
      },
      {
        "Name": "Case Prep"
      }
    ]
  }

  onSubmit() {
    this.submitted = true;
    debugger;
    if (this.messageForm.invalid) {
      this.success = false;
      return;
    }
    else {
      this.success = true;
      if (this.isupdated == false) {
        this.count = this.myItems.length;
        if (this.count == 0) {
          this.count = 1;
        }
        this.myItems.push(new MyItems(this.count, this.messageForm.controls.Fname.value, this.messageForm.controls.Lname.value, this.messageForm.controls.message.value, this.messageForm.controls.Email.value, this.messageForm.controls.country.value));
        this.messageForm.reset();
        this.submitted = false;
        this.toastr.success("Data Save Successfully!",'Success')
        this.msg = "Data Save Successfully!";
      }
      else {

        this.myItems[this.selectedRow].Fname = this.messageForm.controls.Fname.value;
        this.myItems[this.selectedRow].Lname = this.messageForm.controls.Lname.value;
        this.myItems[this.selectedRow].message = this.messageForm.controls.message.value;
        this.myItems[this.selectedRow].Email = this.messageForm.controls.Email.value;
        this.myItems[this.selectedRow].country = this.messageForm.controls.country.value;
        this.messageForm.reset();
        this.submitted = false;
        this.isupdated = false
        this.toastr.success("Data Updated Successfully!",'Success')
        this.msg = "Data Updated Successfully!";
      }
    }
  }
  fnDetete(data) {
    this.myItems = this.myItems.filter(item => item !== data);
  }
  fnEdit(index: number) {
    this.selectedRow = index;
    this.regModel = this.myItems[this.selectedRow];
    this.Fname = this.regModel.Fname;
    this.Lname = this.regModel.Lname;
    this.message = this.regModel.message;
    this.Email = this.regModel.Email;
    this.country = this.regModel.country;
    this.isupdated = true;
  }
  onChangeCountry(country: string) {
    if (this.isupdated == true) {
      this.regModel.country = country;
    }
  }
}
