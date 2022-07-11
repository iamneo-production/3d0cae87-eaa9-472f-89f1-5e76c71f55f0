import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuemodalComponent } from './venuemodal.component';

describe('VenuemodalComponent', () => {
  let component: VenuemodalComponent;
  let fixture: ComponentFixture<VenuemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuemodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenuemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
