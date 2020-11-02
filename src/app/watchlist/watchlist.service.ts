import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Params} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
   providedIn: 'root'
})

export class WatchlistService{
   constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
   getData(input: string) {
      return this.http.get('/simpledata?input=' + input).pipe(
        catchError((err) => {
          console.log('error caught in watchlist service');
          console.error(err);
          return throwError(err);
        })
      );
   }
}
