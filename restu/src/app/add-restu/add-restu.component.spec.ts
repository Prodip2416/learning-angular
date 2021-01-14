import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestuComponent } from './add-restu.component';

describe('AddRestuComponent', () => {
  let component: AddRestuComponent;
  let fixture: ComponentFixture<AddRestuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
