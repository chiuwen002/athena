import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerComponent } from './utility/spinner/spinner.component';


const routes: Routes = [
  { path: '', redirectTo: 'wireless-list', pathMatch: 'full' },
  {
    path: 'wireless-list',
    children: [
      { path: '', loadChildren: () => import('./wireless-list/wireless-list.module').then(m => m.WirelessListModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
