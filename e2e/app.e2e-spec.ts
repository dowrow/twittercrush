import { TwinderPage } from './app.po';

describe('twinder App', () => {
  let page: TwinderPage;

  beforeEach(() => {
    page = new TwinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
