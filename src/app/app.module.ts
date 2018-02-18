import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { DivrtComponent } from './divrt/divrt.component';
import { InvitationComponent } from './invitation/invitation.component';


@NgModule({
  declarations: [
    AppComponent,
    DivrtComponent,
    InvitationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
