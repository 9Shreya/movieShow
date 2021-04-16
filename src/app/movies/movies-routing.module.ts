import {SearcPageComponent} from './searc-page/searc-page.component';
import {MovieCardsComponent} from './movie-cards/movie-cards.component';
import {NgModule,Component} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {MoviesComponent} from './movies.component';

const routes: Routes = [
  {
    path: 'Card',component: MovieCardsComponent
  },
  {
    path: 'search',component: SearcPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
