import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/get-word-service.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'paint-figure',
  standalone: true,
  imports: [],
  templateUrl: './paint-figure.component.html',
  styleUrl: './paint-figure.component.css',
  animations: [
    trigger('colorTransition', [
      transition(':decrement', [animate('1s ease-in-out', 
        style({ color: '#E91E63', fontSize: '2rem'})), 
        animate('1s ease-in-out', style({fontSize: '1.3rem'}))])
      ]
    )
  ]
})
export class PaintFigureComponent implements OnInit{
  sharedVal: any;
  magic_word: string = "";
  mg_len: number = 0;
  numberAttempts: number = 0;
  imageView: boolean = true;

  constructor(private _wordService: WordService){}

  ngOnInit(): void {
      this._wordService.sharedVal$.subscribe((data) => {
        this.magic_word = data;
        this.mg_len = this.magic_word.length;
        this.numberAttempts = this.magic_word.length;
      });

      this._wordService.sharedAttempt$.subscribe((isAttemptGood) => {
          this.numberAttempts = isAttemptGood;
      });
  }

}