import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
   providedIn: 'root'
})

export class PortfolioService{
   constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
   getData(input: string) {
      return this.http.get('/simpledata?input=' + input).pipe(
        catchError((err) => {
          console.log('error caught in portfolio service');
          console.error(err);
          return throwError(err);
        })
      );
   }
}
