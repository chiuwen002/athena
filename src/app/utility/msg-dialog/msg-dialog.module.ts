import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material';
import { MsgDialogComponent } from './msg-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  declarations: [
    MsgDialogComponent
  ],
  entryComponents: [
    MsgDialogComponent
  ]
})
export class MsgDialogModule { }
