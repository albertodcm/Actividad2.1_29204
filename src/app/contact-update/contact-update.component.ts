import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Services/contact.service';
import { Contact } from 'src/models/contact.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.sass']
})
export class ContactUpdateComponent implements OnInit {

  contact: Contact;
  contacts: Contact [];
  contactForm: FormGroup;
  editar = false;
  r = false;
  res;

  constructor(private activatedRoute: ActivatedRoute,
              private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    const contactId = this.activatedRoute.snapshot.paramMap.get('contactId');
    this.getContact(contactId);
    this.initForm();
  }

  initForm() {
    this.contactForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      telefono: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.required]),
    });
  }

  patchForm() {
    this.contactForm.patchValue({
      ...this.contact
    });
  }

  getEditable() {
    this.editar = true;
  }

  getContact(contactId: string) {
    this.contactService.getContact(contactId).then((contact: Contact) => {
      this.contact = contact;
      this.patchForm();
    }).catch((error) => {
      this.router.navigate(['contacts', 'manage']);
    });
  }

  onSubmit(funcion) {

    if (this.contactForm.valid) {
      const updatedContact: Contact = {
        id: this.contact.id,
        ...this.contactForm.value
      };
      console.log(updatedContact);
      this.contactService.updateContact(this.contact.id, updatedContact).then((res) => {
        console.log(res);
        this.router.navigate(['']);
      });
    } else {
      alert('Tu forma no esta completa.');
    }
  }

  getContacts() {
    this.contactService.getContacts().then((contacts) => {
      this.contacts = contacts;
    });
  }

  deleteContact(contactId: string) {
    this.r = confirm('seguro que lo quieres eliminar?');
    if (this.r === true) {
      this.contactService.deletecontact(contactId).then((result) => {
        this.getContacts();
      }).catch((error) => {
        confirm('error');
      });
      this.router.navigate(['']);
    } else {
    }
  }

}
