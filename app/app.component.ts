import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Portland Tap Room</h1>
      <ul>
        <li *ngFor="let currentKeg of kegs"><strong>Name:</strong> {{currentKeg.name}},<strong>type of beer:</strong> {{currentKeg.type}}, $ {{currentKeg.price}}, <strong>alcohol content:</strong> {{currentKeg.alcoholContent}} </li>
        </ul>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg("Mike Saw Sasquatch", "Blonde Ale", 5, 5),
    new Keg("API", "American IPA", 7, 6)
  ];

}


export class Keg {
  public pints: number = 124;
  constructor(public name: string, public type: string, public price: number, public alcoholContent: number) {}
}
