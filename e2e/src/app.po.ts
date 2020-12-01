import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
<<<<<<< HEAD
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
=======
=======
>>>>>>> 9caf66853a3d89199d8bd62abcbd95d4015e3388
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
<<<<<<< HEAD
>>>>>>> d2f8366... Primer avance del proyecto
=======
>>>>>>> 9caf66853a3d89199d8bd62abcbd95d4015e3388
  }
}
