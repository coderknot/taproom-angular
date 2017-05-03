import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { KegListComponent } from './keg-list.component';
import { NewKegComponent } from './new-keg.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,
                  KegListComponent,
                  NewKegComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
