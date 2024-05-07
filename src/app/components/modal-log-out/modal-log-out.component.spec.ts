import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLogOutComponent } from './modal-log-out.component';

describe('ModalLogOutComponent', () => {
  let component: ModalLogOutComponent;
  let fixture: ComponentFixture<ModalLogOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLogOutComponent]
    });
    fixture = TestBed.createComponent(ModalLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
