import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocateMeComponent } from './geo-locate-me.component';

describe('GeoLocateMeComponent', () => {
  let component: GeoLocateMeComponent;
  let fixture: ComponentFixture<GeoLocateMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoLocateMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocateMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
