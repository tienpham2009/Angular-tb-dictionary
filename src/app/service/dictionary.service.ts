import { Injectable } from '@angular/core';
import { IWord } from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  words: IWord[] = [
    {
      id: 1 ,
      word: "cat",
      mean: "meo"
    },
    {
      id: 2 ,
      word: "dog",
      mean: "cho"
    },
    {
      id: 3 ,
      word: "bird",
      mean: "chim"
    },
    {
      id: 4 ,
      word: "snake",
      mean: "ran"
    }

  ];

  constructor() {}


  getAll() {
    return this.words
  }

  findById(id: any){
    return this.words.find(item => item.id == id);
  }

  
}
