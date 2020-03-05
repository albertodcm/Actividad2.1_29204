import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../Services/contact.service';

declare let $: any;

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.sass']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ActivatedRoute: ActivatedRoute,
              private contactSerive: ContactService,
              private router: Router) { }

  ngOnInit() {
    $('.materialboxed').materialbox();

    const contactId = this.ActivatedRoute.snapshot.paramMap.get('contactId');
    this.getContact(contactId);
  }

  getContact(contactId: string) {
    this.contactSerive.getContact(contactId).then((contact: Contact) => {
      this.contact = contact;
    }).catch((error) => {
      this.router.navigate(['']);
    });
  }

}
