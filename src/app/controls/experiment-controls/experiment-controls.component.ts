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
  // private protocolSearchData = [
  //   { protocol: 'head-cast' },
  // ];

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
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {  // note, we don't use event
        this.protocolSearchData = [];
        let currentRoute = this.route.root,
        url = '';
        do {
          let childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(route => {
            if(route.outlet === 'primary') {
              let routeSnapshot = route.snapshot;
              console.log('snapshot:', routeSnapshot)
              url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
              this.protocolSearchData.push({
                label: route.snapshot.data.breadcrumb,
                url:   url });
              currentRoute = route;
            }
          })
        } while(currentRoute);
      })
    // this.protocolDataService = this.completerService.local(this.protocolSearchData, 'protocol', 'protocol');
  }

  selectProtocol(event: any): void {
    this.protocol = event.target.value;
    console.log('protocol: ' + this.protocol);
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
