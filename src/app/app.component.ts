import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeLink: string;

  constructor() {
    this.activeLink = 'recipes'
   }

  ngOnInit() {
  }

  afterLinkClicked(link: string) {
    this.activeLink = link;
    console.log("From the app component: " + this.activeLink);
  }
}
