import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  isGameZoneExpanded = signal(false);
  isWordBack = signal(false);
  gameSelected = signal('');

  constructor() { }

  setisGameZoneExpanded(newVal: boolean): void{
    this.isGameZoneExpanded.set(newVal)
  }

  getisGameZoneExpanded(): boolean{
    return this.isGameZoneExpanded();
  }

  setSelectedGame(newVal: string): void{
    this.gameSelected.set(newVal)
  }

  getSelectedGame(): string{
    return this.gameSelected();
  }

  setWordStatus(newVal: boolean): void{
    this.isWordBack.set(newVal)
  }

  getWordStatus(): boolean{
    return this.isWordBack();
  }


}
