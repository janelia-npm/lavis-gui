import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-cast',
  templateUrl: './head-cast.component.html',
  styleUrls: ['./head-cast.component.css']
})
export class HeadCastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  startProtocol(): void {
    console.log('Start head-cast protocol');
  }

  stopProtocol(): void {
    console.log('Stop head-cast protocol');
  }

}
