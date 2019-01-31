import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to packtTest!');
  });

  it('should display content in h2', () => {
    page.navigateTo();
    expect(page.getParagraphText2()).toEqual('Here are some links to help you start:');
  });

  it('should display content in a', () => {
    page.navigateTo();
    expect(page.getParagraphText3()).toEqual('Tour of Heroes');
  });
});