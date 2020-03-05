import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ContactManagmentComponent } from './contact-managment/contact-managment.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts/manage', component: ContactManagmentComponent},
  { path: 'contacts/create', component: ContactCreateComponent},
  { path: 'contacts/:contactkId', component: ContactDetailComponent},
  { path: 'contacts/:contactId/update', component: ContactUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
