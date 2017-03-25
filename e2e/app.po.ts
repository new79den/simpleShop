import { browser, element, by } from 'protractor';

export class SimpleShopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ss-root h1')).getText();
  }
}
