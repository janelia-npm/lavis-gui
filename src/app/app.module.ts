import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LavisInterfaceService } from './shared/lavis-interface.service';
import { LavisControlsComponent } from './lavis-controls/lavis-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    LavisControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LavisInterfaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
