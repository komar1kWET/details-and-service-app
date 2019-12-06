import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PartsModule} from './modules/parts/parts.module';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import {RepairModule} from './modules/repair/repair.module';
import {DeliveryModule} from './modules/delivery/delivery.module';
import {ContactsModule} from './modules/contacts/contacts.module';
import {AboutModule} from './modules/about/about.module';
import {CookieService} from 'ngx-cookie-service';
import {APP_BASE_HREF} from '@angular/common';

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
    RepairModule,
    DeliveryModule,
    ContactsModule,
    AboutModule,
  ],
  providers: [
    CookieService,
    {provide: APP_BASE_HREF, useValue: '/details-and-service-app/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
