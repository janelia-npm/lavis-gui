import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProtocolRoutingModule } from './protocols-routing.module';

import { HeadCastComponent } from './head-cast/head-cast.component';

// import { HeroService } from './hero.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProtocolRoutingModule
  ],
  declarations: [
    HeadCastComponent
  ],
  providers: [
    // HeroService
  ]
})
export class ProtocolsModule {}
