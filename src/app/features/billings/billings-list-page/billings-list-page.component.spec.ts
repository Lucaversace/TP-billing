import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingsListPageComponent } from './billings-list-page.component';

describe('BillingsListPageComponent', () => {
  let component: BillingsListPageComponent;
  let fixture: ComponentFixture<BillingsListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BillingsListPageComponent]
    });
    fixture = TestBed.createComponent(BillingsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
