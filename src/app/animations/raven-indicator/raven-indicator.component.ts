import { Component, Input, OnInit, OnChanges, SimpleChanges, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'raven-indicator',
  standalone: true,
  imports: [],
  templateUrl: './raven-indicator.component.html',
  styleUrl: './raven-indicator.component.css'
})
export class RavenIndicatorComponent implements OnInit, OnChanges, AfterViewInit{
  @Input() coordMouse = {};
  @Input() nameElements = [''];
  cMouse = {x: 0, y: 0};
  ysignalMouse = signal(0);
  posRaven = 0;
  @ViewChild('raven') elementRavn!: ElementRef<HTMLDivElement>;
  @ViewChild('wrraven') contRavn!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    console.log('Coordinate init: ', this.coordMouse);
    console.log('String: ', this.nameElements);
  }

  ngOnChanges(changes: SimpleChanges): void {
    let mcoord = changes['coordMouse'].currentValue;
    this.cMouse = {x: mcoord.x, y: mcoord.y};
    this.ysignalMouse.set(this.calculatePositionRvn(mcoord.y));
  }

  ngAfterViewInit(): void {
    console.log('Ele:: ', this.elementRavn.nativeElement.getBoundingClientRect());
    console.log('Ele:: ', this.contRavn.nativeElement.getBoundingClientRect());
    this.posRaven = this.contRavn?.nativeElement.getBoundingClientRect().top;
  }

  calculatePositionRvn(mouseEy: number): number{
    let topC = this.contRavn?.nativeElement.getBoundingClientRect().top;
    let ycal = mouseEy < topC ? topC : (mouseEy-topC);
    return ycal;
  }

  calculateLinealPositionInXExis(yCoord: number): number{
    let xCoord: number = 0;
    return xCoord;
  }

  calculateLinealPositionInYExis(xCoord: number): number{
    let yCoord: number = 0;
    return yCoord;
  }
  
}
