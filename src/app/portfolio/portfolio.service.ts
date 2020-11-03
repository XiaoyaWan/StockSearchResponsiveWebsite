import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

@Injectable({
   providedIn: 'root'
})

export class PortfolioService{
   private missionAnnouncedSource = new Subject<string>();
   missionAnnounced$ = this.missionAnnouncedSource.asObservable();
   constructor(private http: HttpClient) { }
   announceMission(mission: string): void {
      this.missionAnnouncedSource.next(mission);
   }
   getData(input: string): any {
      return this.http.get('/simpledata?input=' + input).pipe(
        catchError((err) => {
          console.log('error caught in portfolio service');
          console.error(err);
          return throwError(err);
        })
      );
   }
}
