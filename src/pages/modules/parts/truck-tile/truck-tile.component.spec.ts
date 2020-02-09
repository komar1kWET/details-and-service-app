import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckTileComponent } from './truck-tile.component';

describe('TruckTileComponent', () => {
  let component: TruckTileComponent;
  let fixture: ComponentFixture<TruckTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
