import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe'; //importovano
import { ContactsService } from '../../services/contacts.service'; // service

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  searchTerm = ''; // dodato kao search term za custom pipe
  contacts;
  constructor(private _contactsService: ContactsService) { 
    this._contactsService.getContacts().subscribe(contacts =>{
      this.contacts = contacts;
    });
  }

    removeContact(contact){
      let index =this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
      //console.log(contact);
    }
  ngOnInit() {
  } 

}
