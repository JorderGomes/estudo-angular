import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBidingComponent } from './two-way-biding.component';

describe('TwoWayBidingComponent', () => {
  let component: TwoWayBidingComponent;
  let fixture: ComponentFixture<TwoWayBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoWayBidingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoWayBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
