import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron"><h1>Righteous Taps</h1></div>
  <div class="container">
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (pintSender)="pintSold($event)"></keg-list>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
      <hr>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("Mike Saw Sasquatch", "Blonde Ale", 5, 5, "http://brewpublic.com/wp-content/uploads/2014/04/10-barrel-brewing-co.jpg"),
    new Keg("API", "American IPA", 7, 6, "http://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_396865.jpg")
  ];
  selectedKeg = null;

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  editKeg(selectedKegFromList) {
    this.selectedKeg = selectedKegFromList;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  pintSold(pintSold: Keg) {
    if(pintSold.pints > 0) {
      if(pintSold.pints === 10) {
        alert("You need to tap a new keg yo!");
      }
      pintSold.pints -= 1;
    }
  }


}
