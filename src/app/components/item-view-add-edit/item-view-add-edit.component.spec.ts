import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemViewAddEditComponent } from './item-view-add-edit.component';

describe('ItemViewAddEditComponent', () => {
  let component: ItemViewAddEditComponent;
  let fixture: ComponentFixture<ItemViewAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemViewAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemViewAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
