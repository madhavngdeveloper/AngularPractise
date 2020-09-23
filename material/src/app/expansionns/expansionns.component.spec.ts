import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionnsComponent } from './expansionns.component';

describe('ExpansionnsComponent', () => {
  let component: ExpansionnsComponent;
  let fixture: ComponentFixture<ExpansionnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
