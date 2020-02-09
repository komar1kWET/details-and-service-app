import { Injectable } from '@angular/core';
import {TRUCKS} from '../mock-data/trucks';
import {BehaviorSubject} from 'rxjs';
import {Truck} from '../domains/Truck';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {
  trucks: Truck[] = TRUCKS;

  constructor() { }

  postTrucks = new BehaviorSubject(this.trucks);
}
