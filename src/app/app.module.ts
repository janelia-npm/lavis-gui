import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

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
    HttpModule,
    AlertModule
  ],
  providers: [
    LavisInterfaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
