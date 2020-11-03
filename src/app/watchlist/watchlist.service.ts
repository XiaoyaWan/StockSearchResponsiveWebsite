import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Params} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

@Injectable({
   providedIn: 'root'
})

export class WatchlistService{
   private missionAnnouncedSource = new Subject<string>();
   missionAnnounced$ = this.missionAnnouncedSource.asObservable();

   constructor(private http: HttpClient) { }
   announceMission(mission: string): void {
    this.missionAnnouncedSource.next(mission);
   }
   getData(input: string): any {
      return this.http.get('/simpledata?input=' + input).pipe(
        catchError((err) => {
          console.log('error caught in watchlist service');
          console.error(err);
          return throwError(err);
        })
      );
   }

}
