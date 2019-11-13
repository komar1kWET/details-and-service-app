import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartsComponent} from './modules/parts/parts/parts.component';
import {RepairComponent} from './modules/repair/repair/repair.component';


const routes: Routes = [
  {path: '', redirectTo: '/parts', pathMatch: 'full'},
  {path: 'parts', component: PartsComponent},
  {path: 'repair', component: RepairComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
