import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WirelessListRoutingModule } from './wireless-list-routing.module';
import { WirelessListComponent } from './wireless-list.component';


@NgModule({
  declarations: [WirelessListComponent],
  imports: [
    CommonModule,
    WirelessListRoutingModule
  ]
})
export class WirelessListModule { }
