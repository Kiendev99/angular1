import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfoodComponent } from './editfood.component';

describe('EditfoodComponent', () => {
  let component: EditfoodComponent;
  let fixture: ComponentFixture<EditfoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditfoodComponent]
    });
    fixture = TestBed.createComponent(EditfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
