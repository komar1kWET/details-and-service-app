import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamapsComponent } from './yamaps.component';

describe('YamapsComponent', () => {
  let component: YamapsComponent;
  let fixture: ComponentFixture<YamapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
