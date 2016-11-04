import { LavisGuiPage } from './app.po';

describe('lavis-gui App', function() {
  let page: LavisGuiPage;

  beforeEach(() => {
    page = new LavisGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
