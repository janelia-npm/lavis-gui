import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2CompleterModule } from "ng2-completer";

import { AppComponent } from './app.component';
import { LavisInterfaceService } from './shared/lavis-interface.service';
import { LavisControlsComponent } from './lavis-controls/lavis-controls.component';
import { ExperimentControlsComponent } from './experiment-controls/experiment-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    LavisControlsComponent,
    ExperimentControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    Ng2CompleterModule
  ],
  providers: [
    LavisInterfaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
