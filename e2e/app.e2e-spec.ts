import { MyActionPage } from './app.po';

describe('my-action App', () => {
  let page: MyActionPage;

  beforeEach(() => {
    page = new MyActionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
