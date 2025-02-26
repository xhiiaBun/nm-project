import { Component, input, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'author',
  standalone: true,
  imports: [],
  templateUrl: './iauthor.component.html',
  styleUrl: './iauthor.component.css'
})
export class IauthorComponent implements OnInit, OnChanges{

  @Input() data = {};

  authorInfo: any;

  constructor(){}

  ngOnInit(): void {
    console.log('Data: ', this.data);
    this.authorInfo = this.data;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes:: ', changes);
    this.authorInfo = changes['data'].currentValue;
  }

}
