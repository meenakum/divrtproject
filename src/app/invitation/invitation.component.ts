import { Component, OnInit } from '@angular/core';
import { Invitation } from './invitation_model';
import {Location} from './location.model';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  locations: Location[] = [
    {id: 1, name:"Bangalore"},
    {id: 2, name:"Calcutta"},
    {id: 3, name:"Delhi"},
    {id: 4, name:"BTMS"}
  ];

  invitation = new Invitation();
  constructor() { }
  ngOnInit() { }

  handleFileSelect(evt) {
    var files = evt.target.files;
    let file = files[0];
    this.invitation.fileName = files[0].name;

    if (files && file) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
}

_handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.invitation.logoFile = btoa(binaryString);
}

  invite(val: any) {
    // console.log(val)
    console.log(this.invitation)
  }

  //location()
}
