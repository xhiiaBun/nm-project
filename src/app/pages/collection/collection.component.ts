import { Component, OnInit, signal } from '@angular/core';
import { CrudAuthorsService } from '../../services/crud-authors.service';
import { map, take } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RavenLoadingComponent } from '../../animations/raven-loading/raven-loading.component';
import { QuoteComponent } from '../collection/items/quotes/quotes.component';
import { IauthorComponent } from '../collection/items/iauthor/iauthor.component';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule, RavenLoadingComponent, QuoteComponent, IauthorComponent],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent  implements OnInit{
  keyArrayLetters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  letters: string[] = [];
  contentAuthors: any;
  filterAuthors: any;
  responseAuthors: any;
  initialLetter: string = "";
  quotesCollection: string[] = [];
  dataLoaded: boolean = false;
  singleAuthor: any = null;
  signalAuthor = signal(Object);

  constructor(private _authorService: CrudAuthorsService){}

  ngOnInit(): void {
    this.letters = [...this.keyArrayLetters];
    this.letters.unshift('all');
    this.initialLetter = 'all';
    this._authorService.requestAuthors().pipe(take(1)).subscribe(data =>{
      this.responseAuthors = data;
      this.contentAuthors = this.filterByAuthorQuotes(data);
      this.filterAuthors = [...this.contentAuthors];
      this.quotesCollection = this.collectQuotes(this.contentAuthors);
      this.dataLoaded = true;
    })
  }

  viewAuthorsByInitial(initialLetter: string): void{
    this.singleAuthor = null;
    this.initialLetter = initialLetter;
    this.contentAuthors = this.filterByAuthorQuotes(this.responseAuthors, initialLetter);
    this.filterAuthors = [...this.contentAuthors];
    this.quotesCollection = this.collectQuotes(this.contentAuthors);
  }

  filterByAuthorQuotes(content: any, iletter: string = 'all'): any[]{
    let byAuthors = [...content].filter(c => {
      if(iletter == 'all'){
        return c;
      }else if(this.validateValuesMatching(c.name.at(0), iletter)){
          return c;
        }
    });
    return byAuthors;
  }

  collectQuotes(data: any): string[]{
    let qt: string[] = [];
        [...data].forEach(d =>{ 
          qt = [...qt, ...d.quotes];
        } );
    return qt;
  }

  selectAuthor(name: string): void{
    let temp = [...this.filterAuthors].filter(fl => fl.name == name);
    this.singleAuthor = temp[0];
    this.signalAuthor.set(temp[0]);
    console.log('Single author:: ', this.singleAuthor, this.signalAuthor());
    this.quotesCollection = this.collectQuotes(temp);
  }

  validateValuesMatching(v1: string, v2: string): boolean{
    let isMatching: boolean = false;
        isMatching = v1 == v2 ? true : false;
    return isMatching;
  }

}
