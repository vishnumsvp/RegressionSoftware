import { ABBRegressionPage } from './app.po';

describe('abbregression App', () => {
  let page: ABBRegressionPage;

  beforeEach(() => {
    page = new ABBRegressionPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
