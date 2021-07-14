import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesUserComponent } from './issues-user.component';

describe('IssuesUserComponent', () => {
  let component: IssuesUserComponent;
  let fixture: ComponentFixture<IssuesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
