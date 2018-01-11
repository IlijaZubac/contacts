import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message: string = '';
  constructor(private _contactsService: ContactsService) {
    this.message = this._contactsService.getMessages();
   }

  ngOnInit() {
  }

}
