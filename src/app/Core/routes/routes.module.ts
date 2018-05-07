import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from '../../Pages/about/about.component';
import { FrontComponent } from '../../Pages/front/front.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'front', component: FrontComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutesModule { }
