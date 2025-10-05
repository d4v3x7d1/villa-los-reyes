import { Routes } from '@angular/router';
import { Counter } from './garbage-components/counter';
import { HomePage } from './pages/home/home';

export const routes: Routes = [
  {
    path:'home',
    component:HomePage
  }
];
