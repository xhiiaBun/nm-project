import { Component, OnInit, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShareDataService } from './services/share-data.service';

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
  childSelected: boolean = false;
  showOutlet: boolean = false;
  signalOutlet = signal(false);


  constructor(private _shareDataService : ShareDataService){}

  ngOnInit(): void {
    console.log('****** ngOnInit - Parent');
  }

  ngAfterViewChecked(){
    this.signalOutlet.set(this._shareDataService.getisGameZoneExpanded());
    if(!this.gselected && this.signalOutlet() === true){
      this.gselected = true;
    }
  }

  selectingAGame(answ: string = ""): void{
    this.displayingAGame = answ;
    this.setGame();
  }

  setGame(){
    this.gselected = true;
    setTimeout(()=> {
        this.showOutlet = true;
    }, 3000);
  }

  ngOnDestroy(): void{
    this._shareDataService.setisGameZoneExpanded(false);
  }

}
