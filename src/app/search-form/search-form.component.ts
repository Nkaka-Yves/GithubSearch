import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchgate: string;
  @Output() searched = new EventEmitter<any>();

  getsearched() {
    this.searched.emit(this.searchgate);
    this.searchgate = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
