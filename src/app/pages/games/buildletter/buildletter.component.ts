import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-buildletter',
  standalone: true,
  imports: [],
  templateUrl: './buildletter.component.html',
  styleUrl: './buildletter.component.css'
})
export class BuildletterComponent implements OnInit{
  displayBL: boolean = false;

  constructor(private _shareDataService: ShareDataService){}

  ngOnInit(): void {
    console.log('!!!!! ngOnInit');
    if(!this._shareDataService.getisGameZoneExpanded()){
      this._shareDataService.setisGameZoneExpanded(true);
      setTimeout(() => {
        this.displayBL = true;
      }, 1500);
    }else{
      this.displayBL = true;
    }
  }

}
