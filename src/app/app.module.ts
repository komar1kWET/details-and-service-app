import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PartsModule} from './modules/parts/parts.module';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import {RepairModule} from './modules/repair/repair.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartsModule,
    RepairModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
