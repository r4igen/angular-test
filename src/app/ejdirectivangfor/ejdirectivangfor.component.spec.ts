import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivangforComponent } from './ejdirectivangfor.component';

describe('EjdirectivangforComponent', () => {
  let component: EjdirectivangforComponent;
  let fixture: ComponentFixture<EjdirectivangforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjdirectivangforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjdirectivangforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
