import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './Core/header-section/header-section.component';
import { MiddleSectionComponent } from './Core/middle-section/middle-section.component';
import { FooterSectionComponent } from './Core/footer-section/footer-section.component';
import { OneColComponent } from './Templates/one-col/one-col.component';
import { TwoColComponent } from './Templates/two-col/two-col.component';
import { ThreeColComponent } from './Templates/three-col/three-col.component';
import { HeaderBlockComponent } from './Core/header-block/header-block.component';
import { NavBlockComponent } from './Core/nav-block/nav-block.component';
import { ContentBlockComponent } from './Core/content-block/content-block.component';
import { FooterBlockComponent } from './Core/footer-block/footer-block.component';
import { RoutesModule } from './Core/routes/routes.module';
import { FrontComponent } from './Pages/front/front.component';
import { AboutComponent } from './Pages/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    MiddleSectionComponent,
    FooterSectionComponent,
    OneColComponent,
    TwoColComponent,
    ThreeColComponent,
    HeaderBlockComponent,
    NavBlockComponent,
    ContentBlockComponent,
    FooterBlockComponent,
    FrontComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
