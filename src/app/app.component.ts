import { Component } from '@angular/core';
import * as sum from './sum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-and-javascript';
  value = 0;
  elems = '';

  add() {
    const arr = this.elems.split(',');
    this.value = sum.add(arr);
  }
}
