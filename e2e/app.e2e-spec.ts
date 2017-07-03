import { TooltipyPage } from './app.po';

describe('tooltipy App', () => {
  let page: TooltipyPage;

  beforeEach(() => {
    page = new TooltipyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
