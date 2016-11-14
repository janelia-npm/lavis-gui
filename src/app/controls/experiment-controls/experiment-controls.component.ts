import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-experiment-controls',
  templateUrl: './experiment-controls.component.html',
  styleUrls: ['./experiment-controls.component.css']
})
export class ExperimentControlsComponent implements OnInit {

  private protocol: string;
  private protocolDataService: CompleterData;
  private protocolSearchData: Array<Object>;

  private driver: string;
  private driverDataService: CompleterData;
  private driverSearchData = [
    { driver: 'ir21a-gal4' },
    { driver: 'w1118' },
    { driver: 'SS01266' },
    { driver: 'MB049B' },
  ];

  private effector: string;
  private effectorDataService: CompleterData;
  private effectorSearchData = [
    { effector: 'UAS-CsChrimson' },
  ];

  constructor(private completerService: CompleterService,
              private router:Router,
              private route:ActivatedRoute
             ) {
    this.driverDataService = completerService.local(this.driverSearchData, 'driver', 'driver');
    this.effectorDataService = completerService.local(this.effectorSearchData, 'effector', 'effector');
  }

  ngOnInit() {
    this.protocol = '';
    this.protocolSearchData = [];
    for (let route of this.router.config)
    {
      let protocolString = route.path;
      if (protocolString) {
        this.protocolSearchData.push({
          'protocol': protocolString,
        });
      };
    }
    this.protocolDataService = this.completerService.local(this.protocolSearchData, 'protocol', 'protocol');
  }

  selectProtocol(protocol: any): void {
    if (protocol) {
      this.protocol = protocol;
      let inProtocolArray = false;
      for (let index in this.protocolSearchData)
      {
        if (this.protocolSearchData[index]['protocol'] == this.protocol) {
          inProtocolArray = true;
          break;
        }
      }
      console.log('selectProtocol: ' + this.protocol);
      if (inProtocolArray) {
        this.router.navigate([this.protocol]);
        console.log('navigate: ' + this.protocol);
      }
    }
  }

  selectDriver(driver: any): void {
    if (driver) {
      this.driver = driver;
      console.log('driver: ' + this.driver);
    }
  }

  selectEffector(effector: any): void {
    if (effector) {
      this.effector = effector;
      console.log('effector: ' + this.effector);
    }
  }

}
