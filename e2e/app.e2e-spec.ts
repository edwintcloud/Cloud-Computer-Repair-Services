import { Cloudcomputerrepair2Page } from './app.po';

describe('cloudcomputerrepair2 App', () => {
  let page: Cloudcomputerrepair2Page;

  beforeEach(() => {
    page = new Cloudcomputerrepair2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
