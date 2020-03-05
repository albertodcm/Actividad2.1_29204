import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { Router } from '@angular/router';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-contact-managment',
  templateUrl: './contact-managment.component.html',
  styleUrls: ['./contact-managment.component.sass']
})
export class ContactManagmentComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().then((contacts) => {
      this.contacts = contacts;
    });
  }

  deleteContact(contactId: string) {
    this.contactService.deletecontact(contactId).then((result) => {
      this.getContacts();
    }).catch((error) => {
      console.log(error);
    });
  }

  editContact(contactId: string) {
    this.router.navigate(['contacts', contactId, 'update']);
  }

}
