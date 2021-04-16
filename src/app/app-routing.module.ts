import {CommonComponent} from './common/common.component';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',component: CommonComponent,children: [
      {
        path: 'login',component: LoginComponent
      }
    ]
  },
  {path: 'movies',loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
