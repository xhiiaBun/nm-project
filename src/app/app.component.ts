import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'nm-project';

  constructor(private _router: Router){}

  ngOnInit(): void {
    this._router.events.subscribe((ev) => {
      if(ev instanceof NavigationEnd){
        //console.log('Navigation ending');
      }
    });
  }
  
}
