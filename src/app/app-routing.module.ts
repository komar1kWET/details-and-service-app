import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartsComponent} from './modules/parts/parts/parts.component';
import {RepairComponent} from './modules/repair/repair/repair.component';
import {DeliveryComponent} from './modules/delivery/delivery/delivery.component';
import {ContactsComponent} from './modules/contacts/contacts/contacts.component';
import {AboutComponent} from './modules/about/about/about.component';


const routes: Routes = [
  {path: '', redirectTo: '/parts', pathMatch: 'full'},
  {path: 'parts', component: PartsComponent},
  {path: 'repair', component: RepairComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
