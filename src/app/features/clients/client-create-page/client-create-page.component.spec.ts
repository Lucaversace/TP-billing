import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreatePageComponent } from './client-create-page.component';

describe('ClientCreatePageComponent', () => {
  let component: ClientCreatePageComponent;
  let fixture: ComponentFixture<ClientCreatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClientCreatePageComponent]
    });
    fixture = TestBed.createComponent(ClientCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
