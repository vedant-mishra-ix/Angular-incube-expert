import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedHomeComponent } from './ved-home.component';

describe('VedHomeComponent', () => {
  let component: VedHomeComponent;
  let fixture: ComponentFixture<VedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VedHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
