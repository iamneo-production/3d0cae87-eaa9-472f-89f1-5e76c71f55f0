import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ccn',
  templateUrl: './ccn.component.html',
  styleUrls: ['./ccn.component.css']
})
export class CcnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'angularapp';
  result:number | undefined;
  
@Input() ipBox:any ;

ccy:CCY[] = [ { id:"USD",  value: 1.126735},

{ id:"GBP", value:0.876893},

{ id:"INR", value:79.677056}
]

fromCurrency:string = ""
toCurrency:string = ""
currencySRC!:CCY
currencyTGT!:CCY
ccyString:string =""

doConvert(e:any) {
  this.currencySRC = this.ccy[e.target.value-1]
  this.currencyTGT = this.ccy[e.target.value-1]
  console.log(this.currencySRC)
  let a:any = this.currencySRC["value"]
  let b:any = this.currencyTGT["value"]
alert (a); 
this.result = parseInt(this.ipBox) * (b /a);

  }

   doChange(e:any) {
  alert('hello');
  this.ccyString = JSON.stringify(this.ccy);
     }



}
class CCY {

  id:string | undefined;
  value: number | undefined;
  }