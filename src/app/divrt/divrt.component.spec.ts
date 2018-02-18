import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivrtComponent } from './divrt.component';

describe('DivrtComponent', () => {
  let component: DivrtComponent;
  let fixture: ComponentFixture<DivrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
