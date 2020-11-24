import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  constructor(public spinner: NgxSpinnerService) { }

  show() {
    this.spinner.show();
  }

  hide() {
    this.spinner.hide();
  }

}
