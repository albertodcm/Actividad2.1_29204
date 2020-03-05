import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../Services/contact.service';
import { Contact } from 'src/models/contact.model';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.sass']
})
export class ContactCreateComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private contactSerice: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = new FormGroup( {
      id: new FormControl(null, [Validators.required]),
      nombre: new FormControl(null, [Validators.required]),
      telefono: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        ...this.contactForm.value
      };
      this.contactSerice.addContact(newContact).then((result) => {
        this.router.navigate(['']);
      });
    } else {
      alert('Debes de llenar todos los campos y sin errores!');
    }
  }

}
