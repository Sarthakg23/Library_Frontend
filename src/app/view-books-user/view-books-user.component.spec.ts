import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBooksUserComponent } from './view-books-user.component';

describe('ViewBooksUserComponent', () => {
  let component: ViewBooksUserComponent;
  let fixture: ComponentFixture<ViewBooksUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBooksUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBooksUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
