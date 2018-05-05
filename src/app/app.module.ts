import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './Core/header-section/header-section.component';
import { MiddleSectionComponent } from './Core/middle-section/middle-section.component';
import { FooterSectionComponent } from './Core/footer-section/footer-section.component';
import { OneColComponent } from './layouts/one-col/one-col.component';
import { TwoColComponent } from './layouts/two-col/two-col.component';
import { ThreeColComponent } from './layouts/three-col/three-col.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    MiddleSectionComponent,
    FooterSectionComponent,
    OneColComponent,
    TwoColComponent,
    ThreeColComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
