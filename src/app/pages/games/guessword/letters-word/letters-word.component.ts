import { Component, OnInit } from '@angular/core';
import { Itemxo } from "../../models/itemxo";
import { WordService } from "../../services/get-word-service.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'letters-word',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letters-word.component.html',
  styleUrl: './letters-word.component.css'
})
export class LettersWordComponent implements OnInit{
  magic_word: string = "";
  arrayWord: string[] = [];
  keyArrayLetters: string = "QWERTYUIOPASDFGHJKLZXCVBNM";
  letters: string[] = [];//['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  boardLetters: Itemxo[] = [];
  boardWord: Itemxo[] = [];
  sharedVal: any;
  messageGame: string = "";
  numberTries: number = 0;

  constructor(private _wordService: WordService){}

  ngOnInit(): void {
    this.letters = [...this.keyArrayLetters];
   this.requestWord();
  }

  requestWord(): void{
    this._wordService.sharedVal$.subscribe((data) => {
      this.initGameWord(data);
    });
  }

  initGameWord(data: any): void{
    this.magic_word = data;
    this.numberTries = this.magic_word.length;
    this.arrayWord = [...this.magic_word];
    this.messageGame = "";
    this.boardWord = this.arrayWord.map((letter, index) => { 
      return {id: index, value: letter, isDisabled: false }
    });
    console.log('W>', this.magic_word);
    let randomNum = this.getRandomNumber(this.magic_word.length - 1);
    this.boardWord[randomNum].isDisabled = true;

    this.boardLetters = this.letters.map((letter, index) => {
      return {id: index, value: letter, isDisabled: false};
    });

  }



  clickLetter(letterSelected: Itemxo): void{
    this.boardLetters[letterSelected.id].isDisabled = true;
    this.updateLetter(letterSelected);
  }

  updateLetter(letter: Itemxo): void{
      let isletterInWord = this.arrayWord.includes(letter.value);
      if(!isletterInWord){
        this.numberTries--;
        this._wordService.updateAttempt(this.numberTries);
        if(this.numberTries <= 0){
          this.lockGame(false);
        }
      }else{
        this.activatingLetter(letter.value);
        this.reviewGame();
      }
  }

  activatingLetter(letter: string){
    this.boardWord.forEach((word) => {
      if(word.value === letter){
         word.isDisabled = true;
      }
    })
  }

  getRandomNumber(max: number) {
    return Math.floor(Math.random() * (max));
  }

  reviewGame(): void{
    let statusGame = this.boardWord.every(this.reviewStatusLetters);
    console.log('Status game:: ', statusGame);
    if(statusGame){
      this.lockGame(true);
    }
  }

  reviewStatusLetters(elem: any): boolean{
    return elem.isDisabled;
  } 

  lockGame(wordFound: boolean){
    this.messageGame = wordFound ? "YOU FOUND THE WORD" : "YOU DIDN'T FOUND THE WORD";
    this.boardLetters.forEach(letter => {
      letter.isDisabled = true;
    });

    if(!wordFound){
      this.boardWord.forEach(letter => {
        letter.isDisabled = true;
      });
    }
  }

}
