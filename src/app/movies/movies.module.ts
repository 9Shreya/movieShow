import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './movies.component';
import {MovieCardsComponent} from './movie-cards/movie-cards.component';
import { SearcPageComponent } from './searc-page/searc-page.component';
import { CommonmoviesearchComponent } from './commonmoviesearch/commonmoviesearch.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardsComponent,
    SearcPageComponent,
    CommonmoviesearchComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ToastrModule.forRoot(),
    FormsModule
  ]
})
export class MoviesModule {}
