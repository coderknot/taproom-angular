import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Portland Tap Room</h1>
      <keg-list [childKegList]="masterKegList"></keg-list>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("Mike Saw Sasquatch", "Blonde Ale", 5, 5),
    new Keg("API", "American IPA", 7, 6)
  ];

}
