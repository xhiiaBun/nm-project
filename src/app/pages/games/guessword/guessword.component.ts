import { Component, OnInit, signal, computed } from '@angular/core';
import { LettersWordComponent } from "./letters-word/letters-word.component";
import { PaintFigureComponent } from "./paint-figure/paint-figure.component";
import { WordService } from '../services/get-word-service.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { wordGuardResolver } from '../../../guards/word-guard.resolver';
import { CommonModule } from '@angular/common';
import { ShareDataService } from '../services/share-data.service';
import { RavenLoadingComponent } from '../../../animations/raven-loading/raven-loading.component';

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
    this.reNewGame();
    this._shareDataService.setSelectedGame('guessword');
    console.log('Signal game selected: ', this._shareDataService.getSelectedGame());

      setTimeout(() => {
        this.displayGW = true;
      }, 2500);
  }

  reNewGame(): void{
    this._shareDataService.setWordStatus(false);
    this._wordService.requestWord().pipe(take(1)).subscribe(data => {
      this.dataResponse = data.toString().toUpperCase();
      this.magic_word = this.dataResponse;
      console.log('data: ', this.magic_word);
      this._wordService.sharedWord(this.dataResponse);
      this._wordService.updateAttempt(this.magic_word.length);
      this._shareDataService.setWordStatus(true);
    });
  }

}
