import { Component, OnInit } from '@angular/core';

import { LavisInterfaceService } from '../shared/lavis-interface.service';

@Component({
  selector: 'app-lavis-controls',
  templateUrl: './lavis-controls.component.html',
  // styles: [require('bootstrap.min.css')],
  styleUrls: ['./lavis-controls.component.css']
})
export class LavisControlsComponent implements OnInit {

  public connectionAlert = {
    'type': 'danger',
    'msg': 'closed'
  };
  connected: boolean = false;
  connectionStatusSubscription: any;

  constructor(
    private lavisInterfaceService: LavisInterfaceService,
  ) {
    this.connectionAlert.msg = lavisInterfaceService.connectionStatus;
    this.connectionStatusSubscription = lavisInterfaceService.connectionStatusChange.subscribe((value) => {
      this.connected = lavisInterfaceService.getConnected();
      this.connectionAlert.msg = value;
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
