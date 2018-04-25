import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FrontComponent } from './front/front.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'front', component: FrontComponent},
  { path: '', redirectTo: 'front', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutesModule { }
