import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './/app-routes.module';
import { AboutComponent } from './about/about.component';
import { FrontComponent } from './front/front.component';
import { PicsumCarouselComponent } from './picsum-carousel/picsum-carousel.component';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';
import { BodyFluidComponent } from './body-fluid/body-fluid.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FrontComponent,
    PicsumCarouselComponent,
    MenuDropdownComponent,
    BodyFluidComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
