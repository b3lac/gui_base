import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OneColComponent } from './layouts/one-col/one-col.component';
import { TwoColComponent } from './Layouts/two-col/two-col.component';
import { ThreeColComponent } from './Layouts/three-col/three-col.component';


@NgModule({
  declarations: [
    AppComponent,
    OneColComponent,
    TwoColComponent,
    ThreeColComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
