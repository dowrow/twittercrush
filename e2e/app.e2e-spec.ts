import { TwinderPage } from './app.po';

describe('wibber-lite App', () => {
  let page: TwinderPage;

  beforeEach(() => {
    page = new TwinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
