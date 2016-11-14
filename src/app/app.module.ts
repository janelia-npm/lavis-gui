import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2CompleterModule } from "ng2-completer";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProtocolsModule }         from './protocols/protocols.module';

import { LavisInterfaceService } from './shared/lavis-interface/lavis-interface.service';
import { LavisControlsComponent } from './controls/lavis-controls/lavis-controls.component';
import { ExperimentControlsComponent } from './controls/experiment-controls/experiment-controls.component';
import { SelectProtocolComponent } from './controls/select-protocol/select-protocol.component';

@NgModule({
  declarations: [
    AppComponent,
    LavisControlsComponent,
    ExperimentControlsComponent,
    SelectProtocolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    Ng2CompleterModule,
    AppRoutingModule,
    ProtocolsModule
  ],
  providers: [
    LavisInterfaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
