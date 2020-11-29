import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgUnoComponent } from './pg-uno.component';

describe('PgUnoComponent', () => {
  let component: PgUnoComponent;
  let fixture: ComponentFixture<PgUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
