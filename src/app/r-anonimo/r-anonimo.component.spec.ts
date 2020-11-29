import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAnonimoComponent } from './r-anonimo.component';

describe('RAnonimoComponent', () => {
  let component: RAnonimoComponent;
  let fixture: ComponentFixture<RAnonimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RAnonimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RAnonimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
