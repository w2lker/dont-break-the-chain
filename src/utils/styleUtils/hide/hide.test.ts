import { hideText, hideVisually, unhideVisually } from './hide';

it('hideText output required fields', () => {
  expect(hideText()).toMatchObject({
    overflow: 'hidden',
    textIndent: '101%',
    whiteSpace: 'nowrap',
  });
});

it('hideVisually outputs required fields', () => {
  expect(hideVisually()).toMatchObject({
    border: 0,
    clip: 'rect(1px, 1px, 1px, 1px)',
    clipPath: 'inset(100%)',
    height: 1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1,
  });
});

it('unhideVisually outputs required fields', () => {
  expect(unhideVisually()).toMatchObject({
    clip: 'auto',
    clipPath: 'none',
    height: 'auto',
    overflow: 'visible',
    position: 'static',
    width: 'auto',
  });
});
