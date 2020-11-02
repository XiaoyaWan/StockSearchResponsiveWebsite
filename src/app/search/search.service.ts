import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Injectable({
   providedIn: 'root'
})
export class SearchService{
   constructor(private http: HttpClient, private router: Router) { }
  // tslint:disable-next-line:typedef
  getData(input: string) {
      return this.http.get('/search?input=' + input);
   }
  // tslint:disable-next-line:typedef
   navigate(ticker: string){
     this.router.navigateByUrl('/details/' + ticker);
   }
}
