import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Params} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
   providedIn: 'root'
})

export class DetailsService{
   constructor(private http: HttpClient) { }

  getData(input: string): any {
      return this.http.get('/details?input=' + input).pipe(
        catchError((err) => {
          console.log('error caught in Details service');
          console.error(err);
          return throwError(err);
        })
      );
   }

  getNews(input: string): any {
      return this.http.get('/news?input=' + input).pipe(
        catchError((err) => {
          console.log('error caught in DetailsNews service');
          console.error(err);
          return throwError(err);
        })
      );
   }
  autoRefresh(input: string): any {
      return this.http.get('/detailsrefresh?input=' + input).pipe(
        catchError((err) => {
          console.log('error caught in DetailsRefresh service');
          console.error(err);
          return throwError(err);
        })
      );
   }
}
