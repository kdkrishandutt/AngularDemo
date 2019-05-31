import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { CountryService } from '../../Services/country-service.service'
import { CMRCallDetails } from '../../Models/cmrcall-details'
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  country: CMRCallDetails[];
  countries: CMRCallDetails[];
  filteredCountriesSingle: CMRCallDetails[];
  queryField: FormControl = new FormControl();
  dispay: boolean = false;
  InputGroup: boolean = false;
  Calendar: boolean = false;
  temp: boolean = false;
  Indiastate = [
    "Rajasthan",
    "UP",
    "Mp",
    "Delhi",
    "Goa",
    "Gurjat",
    "Punjab"
  ];
  Ausstate = [

    "New South Wales",
    "Queensland",
    "South Australia",
    "Tasmania"
  ];
  Slstate = [
    "Kandy",
    "Galle",
    "Kegalle",
    "Mannar"
  ];

  date1: Date;

  date2: Date;

  date3: Date;

  date4: Date;

  date5: Date;

  date6: Date;

  date7: Date;

  date8: Date;

  date9: Date;

  date10: Date;

  date11: Date;

  date12: Date;

  date13: Date;

  dates: Date[];

  rangeDates: Date[];

  minDate: Date;

  maxDate: Date;

  es: any;
  tr: Number;
  invalidDates: Array<Date>

  ngOnInit() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }

    this.tr = {
      firstDayOfWeek: 1
    }

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }
  constructor(private countryService: CountryService) {
  }

  filterCountrySingle(event) {
    let query = event.query;
    this.countryService.search(query).
      subscribe((data: CMRCallDetails[]) => {
        this.filteredCountriesSingle = data,
          this.dispay = false;
      },
        response => {
          this.dispay = false;
          console.log("Error:")
        }
      );
  }

  filterCountry(query, countries: CMRCallDetails[]): CMRCallDetails[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: CMRCallDetails[] = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if (country.CallId.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    return filtered;
  }
  add(event) {
    debugger;
    this.dispay = true;
  }
  showInputGroup() {
    this.Calendar = false;
    if (this.InputGroup === true)
      this.InputGroup = false;
    else
      this.InputGroup = true;
  }
  showCalendar() {
    this.InputGroup = false;
    if (this.Calendar === true)
      this.Calendar = false;
    else
      this.Calendar = true;;
  }
}
