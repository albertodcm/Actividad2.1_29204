import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { ContactService } from '../Services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

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

  editContact(contactId: string) {
    console.log(contactId);
    this.router.navigate(['contacts', contactId, 'update']);
  }


}
