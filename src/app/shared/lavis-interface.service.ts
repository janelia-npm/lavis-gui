require("imports?define=>false!eventemitter2")
var EventEmitter = require('eventemitter2').EventEmitter2 || require('eventemitter2');
const ROSLIB = require('roslib');

export class LavisInterfaceService {
  ros: any = ROSLIB.Ros({
    url : 'ws://localhost:9090'
  });
  chatterTopic: any = ROSLIB.Topic({
    ros : this.ros,
    name : '/chatter',
    messageType : 'std_msgs/String'
  });
  chatterMsg: any = ROSLIB.Message({
    data: 'test'
  })
  chatter() {
    console.log('publishing test chatter message!');
    this.chatterTopic.publish(this.chatterMsg);
  }
}
