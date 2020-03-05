import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagmentComponent } from './contact-managment.component';

describe('ContactManagmentComponent', () => {
  let component: ContactManagmentComponent;
  let fixture: ComponentFixture<ContactManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
