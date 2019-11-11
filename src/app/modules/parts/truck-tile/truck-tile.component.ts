import { Component, OnInit } from '@angular/core';
import {TrucksService} from '../../../services/trucks.service';
import {Observable} from 'rxjs';
import {Truck} from '../../../domains/Truck';

@Component({
  selector: 'app-truck-tile',
  templateUrl: './truck-tile.component.html',
  styleUrls: ['./truck-tile.component.sass']
})
export class TruckTileComponent implements OnInit {
  trucks: Truck[];

  constructor(
    private trucksService: TrucksService,
  ) { }

  ngOnInit() {
    this.getTrucks();
  }

  getTrucks(): void {
    this.trucksService.postTrucks.subscribe(trucks => this.trucks = trucks);
  }

}
