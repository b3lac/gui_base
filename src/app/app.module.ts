import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './Core/header-section/header-section.component';
import { MiddleSectionComponent } from './Core/middle-section/middle-section.component';
import { FooterSectionComponent } from './Core/footer-section/footer-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    MiddleSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
