import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { SelectProtocolComponent } from './controls/select-protocol/select-protocol.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '',  component: SelectProtocolComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
