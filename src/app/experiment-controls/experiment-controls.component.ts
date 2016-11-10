import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-experiment-controls',
  templateUrl: './experiment-controls.component.html',
  styleUrls: ['./experiment-controls.component.css']
})
export class ExperimentControlsComponent implements OnInit {

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

  constructor(private completerService: CompleterService) {
    this.driverDataService = completerService.local(this.driverSearchData, 'driver', 'driver');
    this.effectorDataService = completerService.local(this.effectorSearchData, 'effector', 'effector');
  }

  ngOnInit() {
  }

  selectDriver(event: any): void {
    this.driver = event.target.value;
    console.log('driver: ' + this.driver);
  }

  selectEffector(event: any): void {
    this.effector = event.target.value;
    console.log('effector: ' + this.effector);
  }

}
