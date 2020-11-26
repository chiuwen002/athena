import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatRadioModule, MatTooltipModule, MatSidenavModule, MatButtonToggleModule, MatTabsModule } from '@angular/material';
import { SpinnerModule } from './utility/spinner/spinner.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    SpinnerModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    MatTooltipModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatTabsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
