import { Component, OnInit } from '@angular/core';

import { LavisInterfaceService } from '../shared/lavis-interface.service';

@Component({
  selector: 'app-lavis-controls',
  templateUrl: './lavis-controls.component.html',
  styleUrls: ['./lavis-controls.component.css']
})
export class LavisControlsComponent implements OnInit {

  connectionStatus: any;
  connectionStatusSubscription: any;

  constructor(
    private lavisInterfaceService: LavisInterfaceService,
  ) {
    this.connectionStatus = lavisInterfaceService.connectionStatus;
    this.connectionStatusSubscription = lavisInterfaceService.connectionStatusChange.subscribe((value) => {
      this.connectionStatus = value;
    })
  }

  ngOnInit() {
  }

  // ngOnDestroy() {
  //   this._connectionStatusSubscription?.unsubscribe();
  // }

  connect(): void {
    this.lavisInterfaceService.connect();
  }

  chatter(): void {
    this.lavisInterfaceService.chatter();
  }
}
