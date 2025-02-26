import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'quotes',
  standalone: true,
  imports: [],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuoteComponent implements OnInit{

  data: any = input([]);

  constructor(){}

  ngOnInit(): void {
    console.log('Dataa: ', this.data());
  }


}
