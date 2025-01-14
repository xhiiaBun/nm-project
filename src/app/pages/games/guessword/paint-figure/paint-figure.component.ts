import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/get-word-service.service';

@Component({
  selector: 'paint-figure',
  standalone: true,
  imports: [],
  templateUrl: './paint-figure.component.html',
  styleUrl: './paint-figure.component.css'
})
export class PaintFigureComponent implements OnInit{
  sharedVal: any;
  magic_word: string = "";
  mg_len: number = 0;
  numberAttempts: number = 0;

  constructor(private _wordService: WordService){}

  ngOnInit(): void {
      this._wordService.sharedVal$.subscribe((data) => {
        this.magic_word = data;
        this.mg_len = this.magic_word.length;
        this.numberAttempts = this.magic_word.length;
      });

      // this._wordService.sharedAttempt$.subscribe({
      //   next: () => {},
      //   complete: () => {

      //   }
      // });

      this._wordService.sharedAttempt$.subscribe((isAttemptGood) => {
          this.numberAttempts = isAttemptGood;
      });
  }

}
