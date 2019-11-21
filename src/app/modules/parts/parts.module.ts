import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckTileComponent } from './truck-tile/truck-tile.component';
import { RequestFormComponent } from './request-form/request-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PartsComponent } from './parts/parts.component';
import { WarrantyComponent } from './warranty/warranty.component';



@NgModule({
  declarations: [TruckTileComponent, RequestFormComponent, PartsComponent, WarrantyComponent],
  exports: [
    PartsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class PartsModule { }
