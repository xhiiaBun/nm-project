import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  isGameZoneExpanded = signal(false);

  constructor() { }

  setisGameZoneExpanded(newVal: boolean): void{
    this.isGameZoneExpanded.set(newVal)
  }

  getisGameZoneExpanded(): boolean{
    return this.isGameZoneExpanded();
  }

}
