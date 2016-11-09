import { Component, OnInit } from '@angular/core';

import { LavisInterfaceService } from '../shared/lavis-interface.service';

@Component({
  selector: 'app-lavis-controls',
  templateUrl: './lavis-controls.component.html',
  styleUrls: ['./lavis-controls.component.css']
})
export class LavisControlsComponent implements OnInit {

  connected: boolean = false;
  connectionStatus: any;
  connectionStatusSubscription: any;

  constructor(
    private lavisInterfaceService: LavisInterfaceService,
  ) {
    this.connectionStatus = lavisInterfaceService.connectionStatus;
    this.connectionStatusSubscription = lavisInterfaceService.connectionStatusChange.subscribe((value) => {
      this.connected = lavisInterfaceService.getConnected();
      this.connectionStatus = value;
    })
  }

  ngOnInit() {
  }

  // ngOnDestroy() {
  //   this._connectionStatusSubscription?.unsubscribe();
  // }

  toggleConnect(): void {
    if (!this.connected) {
      this.lavisInterfaceService.connect();
    } else {
      this.lavisInterfaceService.close();
    }
  }

  chatter(): void {
    if (this.connected) {
      this.lavisInterfaceService.chatter();
    } else {
      console.log('Not connected!');
    }
  }
}
