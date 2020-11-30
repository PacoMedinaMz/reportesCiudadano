import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTresComponent } from './pg-tres.component';

describe('PgTresComponent', () => {
  let component: PgTresComponent;
  let fixture: ComponentFixture<PgTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
