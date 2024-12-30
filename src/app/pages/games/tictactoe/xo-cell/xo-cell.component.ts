import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Itemxo } from "../../models/itemxo.class";

@Component({
  selector: 'xo-cell',
  standalone: true,
  imports: [],
  templateUrl: './xo-cell.component.html',
  styleUrl: './xo-cell.component.css'
})
export class XoCellComponent {
  @Input() cellIndex: number = -1;
  @Input() coverCompetitor: string = "";
  @Input() statusCellDisabled: boolean = false;

  @Input() cellInfo: any;

  @Output() sharingLastSelectionEvent = new EventEmitter<string>();


  constructor(){}

  onClickCell(ind: number): void{
    if(!this.cellInfo.isDisabled){
      this.cellInfo.isDisabled = true;
    }
    this.shareCellEvent();
  }

  shareCellEvent() {
    this.sharingLastSelectionEvent.emit(this.cellInfo.id.toString());
  }

}
