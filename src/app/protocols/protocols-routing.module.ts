import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeadCastComponent } from './head-cast/head-cast.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'head-cast',  component: HeadCastComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProtocolRoutingModule { }
