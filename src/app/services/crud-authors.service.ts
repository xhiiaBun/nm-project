import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import { appConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class CrudAuthorsService {
  awsUrl: string = appConstants.AWS_API_AUTHORS;

  constructor(private _http: HttpClient) { }

  requestAuthors(){
    let mainUrl = this.awsUrl + '/authors';
    return this._http.get(mainUrl);
  }

}