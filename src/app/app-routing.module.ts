import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './components/splash/splash.component';

const routes: Routes = [
  {path: 'splash', component: SplashComponent}
  // {path: 'splash', component: SplashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
