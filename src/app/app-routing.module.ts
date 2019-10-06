import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GamesComponent } from './components/categories/games/games.component';
import { GameComponent } from './components/game/game.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      {
        path: '',
        component: GamesComponent
      },
      {
        path: ':slug',
        component: GamesComponent
      }
    ]
  },
  {
    path: 'games/:id',
    component: GameComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
