import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestuComponent } from './list-restu.component';

describe('ListRestuComponent', () => {
  let component: ListRestuComponent;
  let fixture: ComponentFixture<ListRestuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRestuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
