import { Component, ViewChild } from '@angular/core';
import { SpinnerComponent } from './utility/spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  @ViewChild('spinner') spinner: SpinnerComponent;

  show() {
    this.spinner.show();
  }

  hide() {
    this.spinner.hide();
  }
}
