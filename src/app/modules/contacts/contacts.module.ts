import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import {AgmCoreModule} from '@agm/core';
import {YaCoreModule, YamapngModule} from 'yamapng';
import { YamapsComponent } from './contacts/yamaps/yamaps.component';
import {AngularYandexMapsModule} from 'angular8-yandex-maps';



@NgModule({
  declarations: [ContactsComponent, YamapsComponent],
  imports: [
    CommonModule,
    AgmCoreModule,
    AngularYandexMapsModule.forRoot('f8b43a9a-84d1-4ac9-a34f-598024520dd6'),
  ]
})
export class ContactsModule { }
