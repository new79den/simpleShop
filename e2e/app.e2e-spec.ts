import { SimpleShopPage } from './app.po';

describe('simple-shop App', function() {
  let page: SimpleShopPage;

  beforeEach(() => {
    page = new SimpleShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ss works!');
  });
});
