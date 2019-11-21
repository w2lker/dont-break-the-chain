import { clearFix } from './clearfix';

it('clearFix object match', () => {
  expect(clearFix()).toMatchObject({
    content: '""',
    clear: 'both',
    display: 'block',
  });
});
