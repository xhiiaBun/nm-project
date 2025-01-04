import { Component, OnInit } from '@angular/core';
import { LettersWordComponent } from "./letters-word/letters-word.component";
import { PaintFigureComponent } from "./paint-figure/paint-figure.component";
import { WordService } from '../services/get-word-service.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { wordGuardResolver } from '../../../guards/word-guard.resolver';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guessword',
  standalone: true,
  imports: [LettersWordComponent, PaintFigureComponent, CommonModule],
  templateUrl: './guessword.component.html',
  styleUrl: './guessword.component.css'
})
export class GuesswordComponent implements OnInit{
  magic_word: any;
  dataResponse: any;
  dataR: string[] = [];

  constructor(private _wordService: WordService, private _route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.reNewGame();
  }

  reNewGame(): void{
    this._wordService.requestWord().subscribe(data => {
      this.dataResponse = data.toString().toUpperCase();
      this.magic_word = this.dataResponse;
      this._wordService.sharedWord(this.dataResponse);
      this._wordService.updateAttempt(this.magic_word.length);
    });
  }

}
