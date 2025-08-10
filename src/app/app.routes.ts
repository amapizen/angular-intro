import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';
import { AboutPageComponent } from './pages/about/about-page';
import { App } from './app';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  /**
  {
    path: '**',
    redirectTo: '/',
  }
  */
];
