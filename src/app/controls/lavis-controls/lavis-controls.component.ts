import { Component, OnInit } from '@angular/core';

import { LavisInterfaceService } from '../../shared/lavis-interface/lavis-interface.service';

@Component({
  selector: 'app-lavis-controls',
  templateUrl: './lavis-controls.component.html',
  styleUrls: ['./lavis-controls.component.css']
})
export class LavisControlsComponent implements OnInit {

  public connectionAlert = {
    type: 'danger',
    msg: 'closed'
  };
  connected: boolean = false;
  connectionStatusSubscription: any;

  thresholdMin: number = 1;
  thresholdMax: number = 255;
  threshold: number = 100;

  status: string = 'testing';

  runTime: number = 0;

  constructor(
    private lavisInterfaceService: LavisInterfaceService,
  ) {
    this.connectionAlert.msg = lavisInterfaceService.connectionStatus;
    this.connectionStatusSubscription = lavisInterfaceService.connectionStatusChange.subscribe((value) => {
      this.connected = lavisInterfaceService.connected;
      if (this.connected) {
        this.connectionAlert.type = 'success';
      } else {
        this.connectionAlert.type = 'danger';
      }
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
      this.lavisInterfaceService.setThreshold(this.threshold);
    } else {
      this.lavisInterfaceService.close();
    }
  }

  setThreshold(event: any): void {
    if (event.target.value > this.thresholdMax) {
      this.threshold = this.thresholdMax;
    } else if (event.target.value < this.thresholdMin) {
      this.threshold = this.thresholdMin;
    } else {
      this.threshold = event.target.value;
    }
    this.lavisInterfaceService.setThreshold(this.threshold);
  }

  clearBuffers(): void {
    console.log('clear buffers');
  }

  centerStage(): void {
    console.log('center stage');
  }

  chatter(): void {
    if (this.connected) {
      this.lavisInterfaceService.chatter();
    } else {
      console.log('Not connected!');
    }
  }

}
