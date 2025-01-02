import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { XoCellComponent } from "./xo-cell/xo-cell.component";
import { Itemxo } from "../models/itemxo";


@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [RouterModule, XoCellComponent],
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css'
})
export class TictactoeComponent implements OnInit{
  mainNumber: number = 3;
  boardArray: Itemxo[] = [];
  lastCellTouched: number = -1;
  competitor: boolean = true;
  counterPlays: number = 0;
  messageGame: string = "";
  gameEnds: boolean = false;
  winner: boolean = false;
  player1: number[] = [];
  player2: number[] = [];

  constructor(){
    for(let i= 0; i < this.mainNumber*this.mainNumber; i++){
      let obj = {id: i, value: '', isDisabled: false};
        this.boardArray.push(obj);
    }
  }

  ngOnInit(): void {}

  receiveCellEvent(txt: string){
    this.lastCellTouched = Number(txt);
    this.counterPlays++;
    this.boardArray[this.lastCellTouched].value = this.competitor ? "x" : "o";
    this.registerMove(); 
    this.trackingGame();
    if(!this.gameEnds){
      this.competitor = !this.competitor;
    }
    
  }

  undoLastCell(): void{
    this.boardArray[this.lastCellTouched].isDisabled = false;
    this.counterPlays--;
    if(this.competitor){
      this.player1.pop();
    }else{
      this.player2.pop();
    }
    this.competitor = !this.competitor;
    this.boardArray[this.lastCellTouched].value = "";
  }
  resetGame(): void{
    this.lastCellTouched = -1;
    this.competitor = true;
    this.counterPlays = 0;
    this.clearCellArray();
    this.player1 = [];
    this.player2 = [];
    this.gameEnds = false; 
    this.winner = false;
  }

  clearCellArray(): void{
    this.boardArray.forEach(item => {
      item.value = '';
      item.isDisabled = false
    });
  }

  trackingGame(): void{
    let currentplayer = this.competitor ? this.player1 : this.player2;
    if(this.counterPlays > 4){
      if(this.reviewIsAWin(currentplayer)){
        this.messageGame = "is the Winner!";
        this.winner = true;
        this.lockGame();
      }
    }
    if(this.counterPlays === 9){
      this.messageGame = "Nobody wins";
        this.winner = false; 
        this.lockGame();
    }
  }

  registerMove(){
    if(this.competitor){
      this.player1.push(this.lastCellTouched);
    }else{
      this.player2.push(this.lastCellTouched);
    }
  }

  reviewIsAWin(currentplayer: Array<number>): boolean{
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for(let wc_array of winConditions){
      let review_arrays = wc_array.every((wcitem) => currentplayer.includes(wcitem));
      if(review_arrays){
        return true;
      }
    }
    return false;
  }

  lockGame(){
    this.gameEnds = true;
    this.boardArray.forEach(item => {
      item.isDisabled = true
    });
  }

}
