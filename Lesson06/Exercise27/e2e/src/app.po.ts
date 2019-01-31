import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getParagraphText2() {
    return element(by.css('app-root h2')).getText();
  }

  getParagraphText3() {
    return element(by.css('app-root li h2 a')).getText();
  }
}
