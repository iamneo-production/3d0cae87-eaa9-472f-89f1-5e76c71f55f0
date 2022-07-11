import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueModalComponent } from './venue-modal.component';

describe('VenueModalComponent', () => {
  let component: VenueModalComponent;
  let fixture: ComponentFixture<VenueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
