import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-comic',
  templateUrl: './card-comic.component.html',
  styleUrls: ['./card-comic.component.scss'],
})
export class CardComicComponent implements OnInit {

  @Input() comic: any;
  @Input() index: any;

  // emit event button (click)
  @Output() eventButtonClick = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {}

  upLike() {
    this.comic.like++;
    this.eventButtonClick.emit();
  }

  upDisLike() {
    this.comic.dislike++;
    this.eventButtonClick.emit();
  }
}
