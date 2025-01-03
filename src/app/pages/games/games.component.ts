import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit{
  displayingAGame: string = "";
  gselected: boolean = false;
  showOutlet: boolean = false;

  constructor(){}

  ngOnInit(): void {}

  selectingAGame(answ: string = ""): void{
    this.displayingAGame = answ;
    this.gselected = true;
    setTimeout(()=> {
        this.showOutlet = true;
    }, 3000);
  }

  selectDummy(){
    this.gselected = true;
    setTimeout(()=> {
        this.showOutlet = true;
    }, 2000);
  }

}
