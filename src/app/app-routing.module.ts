import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';

import { ContactUpdateComponent } from './contact-update/contact-update.component';



const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'contacts/create', component: ContactCreateComponent},

  { path: 'contacts/:contactId/update', component: ContactUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
