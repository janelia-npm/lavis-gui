import { Injectable, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

const ROSLIB = require('roslib');

import { Ros, Message, Param, Service, ServiceRequest, ServiceResponse, Topic } from 'roslib';

@Injectable()
export class LavisInterfaceService {

  connected: boolean = false;
  connectionStatus: any;

  constructor() {
    this.connectionStatus = "closed";
  }

  ros: Ros = new ROSLIB.Ros();
  url: string = 'ws://localhost:9090';

  connectionStatusChange: Subject<string> = new Subject<string>();

  chatterTopic: Topic = new ROSLIB.Topic({
    ros : this.ros,
    name : '/chatter',
    messageType : 'std_msgs/String'
  });
  chatterMsg: Message = new ROSLIB.Message({
    data: ''
  })

  ngOnInit() {
  }

  connect() {
    this.ros.on('connection', () => {
      console.log('Connected to websocket server.');
      this.connected = true;
      this.connectionStatus = 'connected';
      this.connectionStatusChange.next(this.connectionStatus);
    });
    this.ros.on('error', (error) => {
      console.log('Error connecting to websocket server: ', error);
      this.connected = false;
      this.connectionStatus = 'error';
      this.connectionStatusChange.next(this.connectionStatus);
    });
    this.ros.on('close', () => {
      console.log('Connection to websocket server closed.');
      this.connected = false;
      this.connectionStatus = 'closed';
      this.connectionStatusChange.next(this.connectionStatus);
    });
    console.log('Connecting to websocket server.');
    this.connectionStatus = 'connecting';
    this.connectionStatusChange.next(this.connectionStatus);
    this.ros.connect(this.url);
  }

  close() {
    this.ros.close();
  }

  chatter() {
    console.log('publishing test chatter message!');
    this.chatterMsg = {'data':'abcdefg'};
    this.chatterTopic.publish(this.chatterMsg);
  }

  setThreshold(threshold: number) {
    console.log('setting threshold: ' + String(threshold));
  }
}
