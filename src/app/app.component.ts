import { Component } from '@angular/core';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedcurrency:string='INR';
  constructor( private currencyService:CurrencyService){

  }
  sendCurrency(event:string){
    console.log(event);
    this.currencyService.setCurrency(event);

  }

}
