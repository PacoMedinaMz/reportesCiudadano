import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizaComponent } from './realiza.component';

describe('RealizaComponent', () => {
  let component: RealizaComponent;
  let fixture: ComponentFixture<RealizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
