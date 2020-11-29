import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RUrgenteComponent } from './r-urgente.component';

describe('RUrgenteComponent', () => {
  let component: RUrgenteComponent;
  let fixture: ComponentFixture<RUrgenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RUrgenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RUrgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
