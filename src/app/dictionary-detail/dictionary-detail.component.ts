import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DictionaryService } from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css'],
})
export class DictionaryDetailComponent implements OnInit {
  word: any ;
  constructor(
    private dictionaryService: DictionaryService,
    private activatedRoutes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoutes.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      
      
     this.word = this.dictionaryService.findById(id);      
    });
  }
}
