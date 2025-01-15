import { Component, OnInit } from '@angular/core';
import { LettersWordComponent } from "./letters-word/letters-word.component";
import { PaintFigureComponent } from "./paint-figure/paint-figure.component";
import { WordService } from '../services/get-word-service.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { wordGuardResolver } from '../../../guards/word-guard.resolver';
import { CommonModule } from '@angular/common';
import { ShareDataService } from '../services/share-data.service';

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
  displayGW: boolean = false;

  constructor(private _wordService: WordService, private _route: ActivatedRoute, private _shareDataService: ShareDataService){
  }

  ngOnInit(): void {
    console.log('!!!!! ngOnInit');
    this.reNewGame();
    if(!this._shareDataService.getisGameZoneExpanded()){
      this._shareDataService.setisGameZoneExpanded(true);
      setTimeout(() => {
        this.displayGW = true;
      }, 1500);
    }else{
      this.displayGW = true;
    }
  }

  reNewGame(): void{
    this._wordService.requestWord().pipe(take(1)).subscribe(data => {
      this.dataResponse = data.toString().toUpperCase();
      this.magic_word = this.dataResponse;
      this._wordService.sharedWord(this.dataResponse);
      this._wordService.updateAttempt(this.magic_word.length);
    });
  }

}
