import { Injectable, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

const ROSLIB = require('roslib');

@Injectable()
export class LavisInterfaceService {

  connectionStatus: any;

  constructor() {
    this.connectionStatus = "closed";
  }

  ros: any = new ROSLIB.Ros();
  url: string = 'ws://localhost:9090';

  connectionStatusChange: Subject<string> = new Subject<string>();

  chatterTopic: any = new ROSLIB.Topic({
    ros : this.ros,
    name : '/chatter',
    messageType : 'std_msgs/String'
  });
  chatterMsg: any = new ROSLIB.Message({
    data: 'test'
  })

  ngOnInit() {
  }

  connect() {
    let _self = this;
    this.ros.on('connection', function() {
      console.log('Connected to websocket server.');
      _self.connectionStatus = 'connected';
      _self.connectionStatusChange.next(_self.connectionStatus);
    });
    this.ros.on('error', function(error) {
      console.log('Error connecting to websocket server: ', error);
      _self.connectionStatus = 'error';
      _self.connectionStatusChange.next(_self.connectionStatus);
    });
    this.ros.on('close', function() {
      console.log('Connection to websocket server closed.');
      _self.connectionStatus = 'closed';
      _self.connectionStatusChange.next(_self.connectionStatus);
    });

    console.log('Connecting to websocket server.');
    this.connectionStatus = 'connecting';
    this.connectionStatusChange.next(this.connectionStatus);
    this.ros.connect(this.url);
  }

  getConnectionStatus(): string {
    return this.connectionStatus;
  }

  chatter() {
    console.log('publishing test chatter message!');
    // publishChatterMsg('??????????');
    this.chatterMsg.data = 'abcdefg';
    this.chatterTopic.publish(this.chatterMsg);
  }
}
