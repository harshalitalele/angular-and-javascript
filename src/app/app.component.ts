import { Component } from '@angular/core';
import * as add from './arr-addition';

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
    this.value = add(arr);
  }
}
