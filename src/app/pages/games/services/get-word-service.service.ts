import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  url: string = "https://random-word-api.herokuapp.com/word";
  private sharedValueSub = new BehaviorSubject<any>(null);
  sharedVal$ = this.sharedValueSub.asObservable();
  private sharedAttempt = new BehaviorSubject<any>(null);
  sharedAttempt$ = this.sharedAttempt.asObservable();

  constructor(private _http: HttpClient) { }

  requestWord() {
    let lenWord = this.getRandomNum(5, 10);
    let completeURL = this.url + '?length=' + lenWord;
    return this._http.get(completeURL);
  }

  sharedWord(val: any){
    this.sharedValueSub.next(val);
  }

  updateAttempt(attemptNumber: number){
    this.sharedAttempt.next(attemptNumber);
  }

  getRandomNum(min: number = 0, max: number): number{
    let num = Math.floor(Math.random() * (max-min)) + min;
    return num;
  }

}