import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgDosComponent } from './pg-dos.component';

describe('PgDosComponent', () => {
  let component: PgDosComponent;
  let fixture: ComponentFixture<PgDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
