import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckTileComponent } from './truck-tile/truck-tile.component';
import { RequestFormComponent } from './request-form/request-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
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
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ]
})
export class PartsModule { }
