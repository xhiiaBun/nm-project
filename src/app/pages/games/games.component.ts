import { Component, OnInit, signal, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShareDataService } from './services/share-data.service';
import { BehaviorSubject, combineLatest, fromEvent, Observable, switchMap } from 'rxjs';
import { map, startWith } from "rxjs/operators";
import { getAnimations } from '../../animations/animenu/animenu';
import { MediaMatcher } from '@angular/cdk/layout';
import { RavenIndicatorComponent } from '../../animations/raven-indicator/raven-indicator.component';

function fromMatchMedia(query: string) {
    const mediaQueryList = window.matchMedia(query);
    return fromEvent<MediaQueryListEvent>(mediaQueryList, 'change').pipe(
      map((event: MediaQueryListEvent) => event.matches),
      startWith(mediaQueryList.matches)
    );
}

const isMobile$ = fromMatchMedia("(max-width: 576px)");

const animationStateSufx$ = isMobile$.pipe(
  map(isMobile => (isMobile ? "mobile" : "desktop"))
);

@Component({
  selector: 'app-games',
  standalone: true,
  animations: getAnimations(),
  imports: [RouterModule, CommonModule, RavenIndicatorComponent],
  templateUrl: './games2.component.html',
  styleUrl: './games2.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesComponent implements OnInit{
  displayingAGame: string = "";
  gselected: boolean = false;
  childSelected: boolean = false;
  menu_opts: boolean = false;
  signalOutlet = signal(false);
  copyMenuStatusSig = signal("");
  menuDisplaySubj = new BehaviorSubject<string>("alone");

  menuDisplay$ = this.menuDisplaySubj.asObservable();

  displayV: boolean = false;

  xMouse: number = 0;
  yMouse: number = 0;
  cMouse = { x: this.xMouse, y: this.yMouse};
  nameTagsMenu = [''];

  menuDisplayAnimState$ = combineLatest([
    this.menuDisplay$,
    animationStateSufx$
  ]).pipe(
    map(
      ([menuDisplay, animationStateSufx]) => {
        return `${animationStateSufx}-${menuDisplay}`
      })
  );

  constructor(private _shareDataService : ShareDataService, private _activatedroute: ActivatedRoute,
    private _router: Router
  ){}


  ngOnInit(): void {
    console.log('****** ngOnInit - Parent');
    console.log('Signal game selected: ', this._shareDataService.getSelectedGame());
    let urlStr = this._router.routerState.snapshot.url;
    let splitUrl = urlStr.split('/');
    console.log('Spliiit: ', splitUrl);

    this.nameTagsMenu = ['gamettt', 'gamegw', 'gamebl'];

    if(splitUrl[2]){
      this.updateSelectionGame("two");
      this.displayingAGame = splitUrl[2];
      this.gselected = true;
      this.menu_opts = true;
    }
  }


  ngAfterViewChecked(){
    // console.log('Signal game selected: ', this._shareDataService.getSelectedGame());
    // this.displayingAGame = this._shareDataService.getSelectedGame();
  }

  selectingAGame(answ: string = ""): void{
    this.displayingAGame = answ;
    this.setGame();
  }

  setGame(){
    this.gselected = true;
    console.log('selecting game: menu str');
    this.updateSelectionGame("two");

    setTimeout(()=> {
        this.menu_opts = true;
    }, 500);
  }

  updateSelectionGame(nVal : string){
    let str = nVal ? nVal : "alone";
    console.log('Update: ', nVal);
    this.menuDisplaySubj.next(str);
  }

  onMouseTracking(e: MouseEvent){
    this.xMouse = e.clientX;
    this.yMouse = e.clientY;

    this.cMouse = {x: this.xMouse, y: this.yMouse};
  }

  returnCoordinatesMouse(){
    return this.cMouse;
  }

  ngOnDestroy(): void{
    this._shareDataService.setisGameZoneExpanded(false);
    this._shareDataService.setSelectedGame('');
    console.log('Signal game selected: ', this._shareDataService.getSelectedGame());
  }

}
