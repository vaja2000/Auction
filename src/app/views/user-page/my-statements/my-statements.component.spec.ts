import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStatementsComponent } from './my-statements.component';

describe('MyStatementsComponent', () => {
  let component: MyStatementsComponent;
  let fixture: ComponentFixture<MyStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
