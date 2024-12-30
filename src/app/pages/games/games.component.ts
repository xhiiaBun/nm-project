import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit{
  displayingAGame: string = "";

  constructor(){}

  ngOnInit(): void {}

  selectingAGame(answ: string = ""): void{
    this.displayingAGame = answ;
  }

}
