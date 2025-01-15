import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { XoCellComponent } from "./xo-cell/xo-cell.component";
import { Itemxo } from "../models/itemxo";
import { CommonModule } from '@angular/common';
import { ShareDataService } from '../services/share-data.service';


@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [RouterModule, XoCellComponent, CommonModule],
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css'
})
export class TictactoeComponent implements OnInit{
  mainNumber: number = 3;
  boardArray: Itemxo[] = [];
  lastCellTouched: number = -1;
  competitor: boolean = true;
  counterPlays: number = 0;
  namePlayer: string = "Player X";
  messageGame: string = "";
  showMessage: boolean = false;
  gameEnds: boolean = false;
  winner: boolean = false;
  blockOneUndo:  boolean = false;
  player1: number[] = [];
  player2: number[] = [];
  displayTT: boolean = false;

  constructor(private _shareDataService: ShareDataService){
    for(let i= 0; i < this.mainNumber*this.mainNumber; i++){
      let obj = {id: i, value: '', isDisabled: false};
        this.boardArray.push(obj);
    }
  }

  ngOnInit(): void {
    console.log('!!!!! ngOnInit');
    if(!this._shareDataService.getisGameZoneExpanded()){
      this._shareDataService.setisGameZoneExpanded(true);
      setTimeout(() => {
        this.displayTT = true;
      }, 1500);
    }else{
      this.displayTT = true;
    }
    
  }

  receiveCellEvent(txt: string){
    this.lastCellTouched = Number(txt);
    this.counterPlays++;
    this.boardArray[this.lastCellTouched].value = this.competitor ? "X" : "O";
    this.registerMove(); 
    this.trackingGame();
    if(!this.gameEnds){
      this.competitor = !this.competitor;
    }
    this.blockOneUndo = false;
    this.namePlayer = this.competitor ? 'Player X': 'Player O';
  }

  undoLastCell(): void{
    this.competitor = !this.competitor;
    this.boardArray[this.lastCellTouched].isDisabled = false;
    this.counterPlays--;
    if(this.competitor){
      this.player1.pop();
    }else{
      this.player2.pop();
    }
    this.boardArray[this.lastCellTouched].value = "";
    this.namePlayer = this.competitor ? 'Player X': 'Player O';
    this.blockOneUndo = true;
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
    this.showMessage = false;
    this.namePlayer = this.competitor ? 'Player X': 'Player O';
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
        this.messageGame = " is the Winner!";
        this.winner = true;
        this.lockGame();
      }else{
        if(this.counterPlays === 9){
          this.messageGame = "Nobody wins";
            this.winner = false; 
            this.lockGame();
        }
      }
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
    setTimeout(()=> {
      this.showMessage = true;
    }, 100);
  }

  blockUndoBtn(): boolean{
    if(this.gameEnds || this.counterPlays === 0 || this.blockOneUndo){
      return true;
    }else{
      return false;
    }
  }

}
