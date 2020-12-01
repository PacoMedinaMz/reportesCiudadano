import { TestBed, async } from '@angular/core/testing';
<<<<<<< HEAD
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
>>>>>>> d2f8366... Primer avance del proyecto
=======
>>>>>>> 9caf66853a3d89199d8bd62abcbd95d4015e3388
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
<<<<<<< HEAD
      imports: [
        RouterTestingModule
      ],
=======
>>>>>>> d2f8366... Primer avance del proyecto
=======
>>>>>>> 9caf66853a3d89199d8bd62abcbd95d4015e3388
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
<<<<<<< HEAD
<<<<<<< HEAD
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'reportesCiudadanos'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('reportesCiudadanos');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('reportesCiudadanos app is running!');
=======
=======
>>>>>>> 9caf66853a3d89199d8bd62abcbd95d4015e3388
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mdb-angular-free'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mdb-angular-free');
<<<<<<< HEAD
>>>>>>> d2f8366... Primer avance del proyecto
=======
>>>>>>> 9caf66853a3d89199d8bd62abcbd95d4015e3388
  });
});
