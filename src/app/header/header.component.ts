import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() link = new EventEmitter<string>();

  linkString: string;

  constructor() {
    this.linkString = 'recipes';
   }

  ngOnInit() {
  }

  linkClicked() {
    this.link.emit(this.linkString);
  }

  recipesClicked() {
    this.linkString = 'recipes';
    this.linkClicked();
  }

  shoppingListClicked() {
    this.linkString = "shoppingList"
    this.linkClicked();
  }

}
