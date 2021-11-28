import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInformationsComponent } from './delivery-informations.component';

describe('DeliveryInformationsComponent', () => {
  let component: DeliveryInformationsComponent;
  let fixture: ComponentFixture<DeliveryInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
