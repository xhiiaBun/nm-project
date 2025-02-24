import { Component, OnInit, signal, computed } from '@angular/core';
import { LettersWordComponent } from "./letters-word/letters-word.component";
import { PaintFigureComponent } from "./paint-figure/paint-figure.component";
import { WordService } from '../../../services/get-word-service.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { wordGuardResolver } from '../../../guards/word-guard.resolver';
import { CommonModule } from '@angular/common';
import { ShareDataService } from '../../../services/share-data.service';
import { RavenLoadingComponent } from '../../../animations/raven-loading/raven-loading.component';
import { Word } from '../models/itemxo';

@Component({
  selector: 'app-guessword',
  standalone: true,
  imports: [LettersWordComponent, PaintFigureComponent, CommonModule, RavenLoadingComponent],
  templateUrl: './guessword.component.html',
  styleUrl: './guessword.component.css'
})
export class GuesswordComponent implements OnInit{
  magic_word: any;
  dataResponse: any;
  dataR: string[] = [];
  displayGW: boolean = false;
  wordStatusSignal = computed(() => this._shareDataService.getWordStatus());

  constructor(private _wordService: WordService, private _route: ActivatedRoute, private _shareDataService: ShareDataService){
  }

  ngOnInit(): void {

    this._shareDataService.setSelectedGame('guessword');
    this.callWords();

      setTimeout(() => {
        this.displayGW = true;
      }, 2500);
  }

  callWords(): void{
    this._wordService.requestListWords().pipe(take(1)).subscribe(data =>{
      let listData: any = data;
      this.dataResponse = [...listData].filter(li => li.phrase);
      this.reNewGame();
    })
  }

  reNewGame(): void{
    this._shareDataService.setWordStatus(false);
    let maxNum  = this.dataResponse?.length;
    let randomNum = this.returnRandom(maxNum-1);
    this.magic_word = this.dataResponse[randomNum];

      this._wordService.sharedWord(this.dataResponse[randomNum]);
      this._wordService.updateAttempt(this.magic_word.length);
      this._shareDataService.setWordStatus(true);

    
  }

  returnRandom(max: number): number{
    let min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min + 1) + min);
  }

}
