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
      <div class="container">
        <!-- Trigger the modal with a button -->
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Add Keg</button>

        <!-- Modal -->
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">New Keg</h4>
              </div>
              <div class="modal-body">
                <new-keg (newKegSender)="addKeg($event)"></new-keg>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" style="margin-top:5px;" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>

      </div>
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
