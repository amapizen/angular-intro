import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  }
];
