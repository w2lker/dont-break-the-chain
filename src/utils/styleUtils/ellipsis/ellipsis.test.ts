import { ellipsis } from './ellipsis';

const defaultResponse = {
  display: 'inline-block',
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
};

it('works without params', () => {
  expect(ellipsis()).toMatchObject(defaultResponse);
});

it('works with custom width', () => {
  const customWidth = 'some-with';
  const customWidthResponse = {
    ...defaultResponse,
    maxWidth: customWidth,
  };
  expect(ellipsis('some-with')).toMatchObject(customWidthResponse);
});

it('works with custom display type', () => {
  const customDisplay = 'flex';
  const customDisplayResponse = {
    ...defaultResponse,
    display: customDisplay,
  };
  expect(ellipsis(null, customDisplay)).toMatchObject(customDisplayResponse);
});
