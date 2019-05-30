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
  constructor(private countryService: CountryService) {
  }
  ngOnInit() {
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
}
