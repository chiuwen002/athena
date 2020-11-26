import { Component, ViewChild } from '@angular/core';
/* utility */
import { SpinnerComponent } from './utility/spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('spinner') spinner: SpinnerComponent;

  constructor() { }

  show() {
    this.spinner.show();
  }

  hide() {
    this.spinner.hide();
  }
}
