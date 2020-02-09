import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepairComponent } from './repair/repair.component';
import {RepairRoutingModule} from './repair-routing.module';



@NgModule({
  declarations: [
    RepairComponent,
  ],
  imports: [
    CommonModule,
    RepairRoutingModule,
  ]
})
export class RepairModule { }
