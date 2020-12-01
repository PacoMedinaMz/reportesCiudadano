import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('reportesCiudadanos app is running!');
=======
    expect(page.getTitleText()).toEqual('Welcome to mdb-angular-free!');
>>>>>>> d2f8366... Primer avance del proyecto
=======
    expect(page.getTitleText()).toEqual('Welcome to mdb-angular-free!');
>>>>>>> 9caf66853a3d89199d8bd62abcbd95d4015e3388
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
