import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() item = new EventEmitter<{name: string, amount: number}>();
  @ViewChild('inputName', {static: true}) nameInput: ElementRef;
  @ViewChild('inputAmount', {static: true}) amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.item.emit({name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value});
  }

}
