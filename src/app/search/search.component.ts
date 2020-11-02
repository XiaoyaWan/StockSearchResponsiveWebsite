import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchService} from './search.service';
import {debounceTime} from 'rxjs/operators';
@Component({
   selector: 'app-search',
   templateUrl: './search.component.html',
   styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, OnDestroy{
  title = 'materialApp';
  myControl = new FormControl();
  public searchList = [];
  isLoading: boolean;
  timeoutTimer: any;
  @ViewChildren('allTheseThings') things: QueryList<any>;
  constructor(private searchService: SearchService) {}
  ngOnDestroy(): void {
    clearTimeout(this.timeoutTimer);
  }
  ngOnInit(): void{
    this.isLoading = false;
    this.myControl.valueChanges.pipe(debounceTime(500)).subscribe( input => {
      this.isLoading = true;
      this.timeoutTimer = setTimeout(() => { this.isLoading = false; }, 1200);
      this.searchService.getData(input).subscribe((data) => {
        this.searchList = Array.from(Object.keys(data), k => data[k]);
      }, error => {
        console.log('error:' + error);
      });
    });
  }
  // tslint:disable-next-line:typedef
  ngSubmit(ticker) {
    this.searchService.navigate(ticker);
  }
}

