import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/head-cast',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/head-cast',
        pathMatch: 'full'
      }
      // { path: '', component: HomeComponent },
      // { path: '**', component: PageNotFoundComponent }
      // { path: 'crisis-center', component: CrisisListComponent },
      // { path: 'heroes', component: HeroListComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
