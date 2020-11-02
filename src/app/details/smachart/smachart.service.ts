import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Params} from '@angular/router';

@Injectable({
   providedIn: 'root'
})

export class SmachartService{
   constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getDetailsSMAChartData(input: string) {
      return this.http.get('/detailssmachart?input=' + input);
  }
}
