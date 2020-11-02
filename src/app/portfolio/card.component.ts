import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({ selector: 'app-card', templateUrl: 'card.component.html' })
export class CardComponent implements OnInit{
  @Input() item: any;
  @Input() index: number;
  destroy = false;

  buyControl = new FormControl('0');
  buyModalTotalQuantity = 0;
  buyButtonDisable = true;

  sellControl = new FormControl('0');
  sellModalTotalQuantity = 0;
  sellButtonDisable = true;

  ngOnInit(): void {
    this.buyControl.valueChanges.subscribe(
      (input) => {
        if (input == null || !this.checkNum(input)){
          this.buyModalTotalQuantity = 0;
        }else{
          this.buyModalTotalQuantity =  parseInt(input, 10);
        }
        if (input > 0 ) {
          this.buyButtonDisable = false;
        }else{
          this.buyButtonDisable = true;
        }
      },
      (error) => {
        console.log('ERROR');
        throw( error );
      }
    );

    this.sellControl.valueChanges.subscribe(
      (input) => {
        if (input == null || !this.checkNum(input) ){
          this.sellModalTotalQuantity = 0;
        }else{
          this.sellModalTotalQuantity =  parseInt(input, 10);
        }
        if (input > 0 && input <= this.item.quantity){
          this.sellButtonDisable = false;
        }else{
          this.sellButtonDisable = true;
        }
      },
      (error) => {
        console.log('ERROR');
        throw( error );
      }
    );
  }

  checkNum(nubmer): boolean {
    const re = /^\d+$/;
    if (re.test(nubmer)) {
      return true;
    }else{
      return false;
    }
  }
  getAvgCost(totalCost: string, quantity: string): number {
    return Math.round(parseFloat(totalCost) / parseInt(quantity, 10) * 100) / 100;
  }

  getChange(totalCost: string, quantity: string, last: string): number {
    return parseFloat(last) - this.getAvgCost(totalCost, quantity);
  }

  getMarketValue(last: string, quantity: string): number {
    return Math.round(parseFloat(last) * parseInt(quantity, 10) * 100) / 100;
  }

  buy(ticker: string, price: string, num: number): void {
    const prevarray = JSON.parse(localStorage.getItem('portfolio'));
    const newarray = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; prevarray != null && i < prevarray.length; i++) {
      if ( prevarray[i].tickerId !== ticker ){
        newarray.push({tickerId: prevarray[i].tickerId, name: prevarray[i].name,
          totalCost: prevarray[i].totalCost, quantity: prevarray[i].quantity});
      }else{
        this.item.quantity = num + parseInt(prevarray[i].quantity, 10);
        this.item.totalCost = Math.round(parseFloat(prevarray[i].totalCost) * 100 + parseFloat(price) * num * 100) / 100;
        newarray.push(
          {tickerId: prevarray[i].tickerId, name: prevarray[i].name,
            totalCost: Math.round(parseFloat(prevarray[i].totalCost) * 100 + parseFloat(price) * num * 100) / 100,
            quantity: num + parseInt(prevarray[i].quantity, 10)});
      }
    }
    localStorage.removeItem('portfolio');
    localStorage.setItem('portfolio', JSON.stringify(newarray));
  }

  sell(ticker: string, price: string, num: number): void {
    const prevarray = JSON.parse(localStorage.getItem('portfolio'));
    const newarray = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; prevarray != null && i < prevarray.length; i++) {
      if ( prevarray[i].tickerId !== ticker ){
        newarray.push({tickerId: prevarray[i].tickerId, name: prevarray[i].name,
          totalCost: prevarray[i].totalCost, quantity: prevarray[i].quantity});
      }else{
        const leftCost =
          Math.round(parseFloat(prevarray[i].totalCost) * 100 -
            parseFloat(prevarray[i].totalCost) / parseInt(prevarray[i].quantity, 10) * num * 100) / 100;
        if ( leftCost > 0 ){
          this.item.quantity = parseInt(prevarray[i].quantity, 10) - num ;
          this.item.totalCost = leftCost;
          newarray.push(
          {tickerId: prevarray[i].tickerId, name: prevarray[i].name,
            totalCost: leftCost,
            quantity: parseInt(prevarray[i].quantity, 10) - num });
        }else{
          this.destroy = true;
        }
      }
    }
    localStorage.removeItem('portfolio');
    localStorage.setItem('portfolio', JSON.stringify(newarray));
  }


  resetValue(): void {
    this.buyModalTotalQuantity = 0;
    this.buyControl.setValue('0');
    this.sellModalTotalQuantity = 0;
    this.sellControl.setValue('0');
  }

  getTextColor(totalCost: string, quantity: string, last: string): string {
    if ( this.getChange(totalCost, quantity, last) > 0 ){
      return 'text-success';
    }else if ( this.getChange(totalCost, quantity, last) < 0 ){
      return 'text-danger';
    }else{
      return 'text-dark';
    }
  }

  changeUpCaret(totalCost: string, quantity: any, last: any): boolean{
    if ( this.getChange(totalCost, quantity, last) > 0 ){
      return true;
    }else if ( this.getChange(totalCost, quantity, last) < 0 ){
      return false;
    }else{
      return false;
    }
  }

  changeDownCaret(totalCost: string, quantity: any, last: any): boolean{
    if ( this.getChange(totalCost, quantity, last) > 0 ){
      return false;
    }else if ( this.getChange(totalCost, quantity, last) < 0 ){
      return true;
    }else{
      return false;
    }
  }

  formalizeNumber(num: string, isDigit: boolean): string{
    if ( isDigit ){
      let isNegative = '';
      if (parseFloat(num) < 0){
        isNegative = '-';
      }
      const int = Math.abs(parseFloat(num)).toFixed(2).split('.')[0];
      const digit = parseFloat(num).toFixed(2).split('.')[1];
      return isNegative + this.formalizeNumber(int, false) + '.' + digit;
    }else{
      let isNegative = '';
      if (parseInt(num, 10) < 0){
        isNegative = '-';
      }
      const str = parseInt(num, 10).toString();
      let newstr = '';
      for ( let i = str.length; i >= 0; i -= 3){
        if ( i === str.length ) {
          if ( i - 3 > 0 ){
            newstr = ',' + str.slice( i - 3 , i);
          }else{
            newstr = str.slice(0 , i);
          }
        }else{
          if ( i - 3 > 0 ){
            newstr = ',' + str.slice( i - 3 , i) + newstr;
          }else{
            newstr = str.slice(0 , i) + newstr;
          }
        }
      }
      return isNegative + newstr;
    }
  }
}
