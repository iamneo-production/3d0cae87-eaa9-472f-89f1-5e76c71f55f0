import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnComponent } from './ccn.component';

describe('CcnComponent', () => {
  let component: CcnComponent;
  let fixture: ComponentFixture<CcnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
