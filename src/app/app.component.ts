import { Component, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterOutlet, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'nm-project';
  hideNV: boolean = false;
  @ViewChild('navbarNavDropdown') navbarNavDropdown!: ElementRef;
  @ViewChild('burgerNavBar') burgerNavBar!: ElementRef;

  constructor(private _router: Router, private _renderer: Renderer2){
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if(this.navbarNavDropdown?.nativeElement.classList.contains('show')){
      this.closingNavbar();
    }
  }

  closingNavbar(): void{
    if(this.navbarNavDropdown){
      this._renderer.removeClass(this.navbarNavDropdown.nativeElement, 'show');
      this.burgerNavBar.nativeElement.ariaExpanded = false;
    }
  }
  
}
