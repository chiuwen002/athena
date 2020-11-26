import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'wireless-list', pathMatch: 'full' },
  {
    path: 'wireless-list',
    children: [
      { path: '', loadChildren: './wireless-list/wireless-list.module#WirelessListModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
