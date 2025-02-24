import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { WordService } from '../services/get-word-service.service';

@Injectable({
  providedIn: 'root'
})

export class wordGuardResolver implements Resolve<any>{

  constructor(private _wordService: WordService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._wordService.requestWord();
  }
};