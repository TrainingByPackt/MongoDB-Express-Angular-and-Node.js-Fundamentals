import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
<<<<<<< HEAD
    return browser.get('/blog');
=======
    return browser.get('/');
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
