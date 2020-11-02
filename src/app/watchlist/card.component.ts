import {Component, Input} from '@angular/core';

@Component({ selector: 'app-card', templateUrl: 'card.component.html' })
export class CardComponent{
  @Input() item: any;
  destroy = false;

  changeTextColor(trend: string): string{
    if ( trend === '+' ){
      return 'text-success';
    }else if ( trend === '-' ){
      return 'text-danger';
    }else{
      return 'text-dark';
    }
  }

  changeUpCaret(trend: string): boolean{
    if ( trend === '+' ){
      return true;
    }else{
      return false;
    }
  }

  changeDownCaret(trend: string): boolean{
    if ( trend === '-' ){
      return true;
    }else{
      return false;
    }
  }

  removeLocalStorage(ticker: string): void {
    this.destroy = true;
    const prevarray = JSON.parse(localStorage.getItem('watchlist'));
    const newarray = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < prevarray.length; i++) {
      if ( prevarray[i].tickerId !== ticker ){
        newarray.push({tickerId: prevarray[i].tickerId, name: prevarray[i].name});
      }
    }
    localStorage.removeItem('watchlist');
    localStorage.setItem('watchlist', JSON.stringify(newarray));
  }
}
