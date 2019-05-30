import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class CountryService {

    //constructor(private http: HttpClient) {}

    // getCountries() {
    //     return this.http.get("http://localhost:5000/api/SearchData?fromDate='28-May-2018'&todate='28-May-2019'&prefixText='DL21091800001'");
    // }

    clientID: string = 'PAST YOUR CLIENT ID';
baseUrl2: string = "http://localhost:5000/api/SearchData?fromDate='28-May-2018'&todate='28-May-2019'&prefixText='DL21091800001'";
baseUrl: string = "http://localhost:5000/api/SearchData?fromDate='28-May-2018'&todate='28-May-2019'&prefixText='";
constructor(private _http: HttpClient) { }
search(queryString: string) {
      let _URL = this.baseUrl + queryString;
      return this._http.get(_URL);
  }

  searchNew() {
    let _URL = this.baseUrl2;
    return this._http.get(_URL);
}
}