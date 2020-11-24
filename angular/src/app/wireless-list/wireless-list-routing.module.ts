import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WirelessListComponent } from './wireless-list.component';


const routes: Routes = [
  { path: '', component: WirelessListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WirelessListRoutingModule { }
