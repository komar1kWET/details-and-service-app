import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartsComponent} from './modules/parts/parts/parts.component';


const routes: Routes = [
  {path: '', redirectTo: '/parts', pathMatch: 'full'},
  {path: 'parts', component: PartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
