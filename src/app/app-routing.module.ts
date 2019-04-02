import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './components/splash/splash.component';
import { GetToKnowComponent } from './components/get-to-know/get-to-know.component';

const routes: Routes = [
  {path: 'splash', component: SplashComponent},
  {path: 'gettoknow', component: GetToKnowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
