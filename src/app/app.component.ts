import { Component } from '@angular/core';

import { LavisInterfaceService } from './shared/lavis-interface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
    private lavisInterfaceService: LavisInterfaceService,
  ) {
  }

  chatter(): void {
    this.lavisInterfaceService.chatter();
  }
}
