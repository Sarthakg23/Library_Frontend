import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBooksAdminComponent } from './view-books-admin.component';

describe('ViewBooksAdminComponent', () => {
  let component: ViewBooksAdminComponent;
  let fixture: ComponentFixture<ViewBooksAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBooksAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBooksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
