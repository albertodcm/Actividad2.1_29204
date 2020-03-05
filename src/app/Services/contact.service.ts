import { Injectable } from '@angular/core';
import { Contact } from 'src/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    contacts: Contact[] = [
      {
        id: '1',
        nombre: 'Juan',
        telefono: '619-888-1234',
        correo: 'juan123@gmail.com'
      },
      {
        id: '2',
        nombre: 'Pedro',
        telefono: '664-123-9988',
        correo: 'pedro100@gmail.com'
      },
      {
        id: '3',
        nombre: 'Alfredo',
        telefono: '664-456-7123',
        correo: 'alfredo@gmail.com'
        },
        ];

      constructor() {


      }

      getContacts(): Promise<Contact[]> {
        return new Promise((resolve, reject) => {
          resolve(this.contacts);
        });
      }

      getContact(contactId: string): Promise <Contact> {

        return new Promise((resolve, reject) => {
          const foundContact = this.contacts.find((contact) => {
            return contact.id === contactId;
          });
          if (foundContact) {
            resolve(foundContact);
          } else {
            reject(null);
          }
        });
      }

      deletecontact(contactId: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
          const remainingContacts = this.contacts.filter((contact) => {
            return contact.id !== contactId;
          });

          if (JSON.stringify(remainingContacts) !== JSON.stringify(this.contacts)) {
            this.contacts = remainingContacts;
            resolve(true);
          } else {
            reject(false);
          }

        });
      }

      updateContact(contactId: string, updateContact: Contact): Promise<boolean> {
        return new Promise ((resolve, reject) => {
          const updatedContacts = this.contacts.map((contact) => {
            if (contact.id === contactId) {
              const newContact = {
                ...contact,
                ...updateContact
              };

              return newContact;
            }
            return contact;
          });
          if (JSON.stringify(updatedContacts) !== JSON.stringify(this.contacts)) {
            this.contacts = updatedContacts;
            resolve(true);
          } else {
            reject(false);
          }
        });
      }

      addContact(contact: Contact): Promise<boolean> {
        return new Promise((resolve, reject) => {
          this.contacts.push(contact);

          resolve(true);
        });
      }

  }
