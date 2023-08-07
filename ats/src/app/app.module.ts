
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ui1Component } from './ui1/ui1.component';
import { Ui2Component } from './ui2/ui2.component';

@NgModule({
  declarations: [
    AppComponent,
    Ui1Component,
    Ui2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
