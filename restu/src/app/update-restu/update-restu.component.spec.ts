import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestuComponent } from './update-restu.component';

describe('UpdateRestuComponent', () => {
  let component: UpdateRestuComponent;
  let fixture: ComponentFixture<UpdateRestuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRestuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
