import { BoundAttributeArray } from '../../models';
import { getBoundedEdges } from './getBoundedEdges';

beforeAll(() => {
  // tslint:disable-next-line:no-empty
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  // @ts-ignore
  // tslint:disable-next-line:no-console
  console.error.mockRestore();
});

const keys: BoundAttributeArray = ['attr1', 'attr2', 'attr3', 'attr4'];

const config = ['value1', 'value2', 'null', 'value4'];

const response = {
  attr1: config[0],
  attr2: config[1],
  attr4: config[3],
};

it('works with correct attributes', () => {
  expect(getBoundedEdges(keys, config.join(' '))).toEqual(response);
});
it('works without attributes', () => {
    // @ts-ignore
  expect(getBoundedEdges()).toEqual({});
});
it('works with incorrect attributes', () => {
  const newKeys = keys.slice(0, 3);
  const newConfig = config.concat(config).join(' ');
  const newResponse = { ...response };
    // @ts-ignore
  delete newResponse.attr4;
  expect(getBoundedEdges(keys, newConfig)).toEqual({});
    // tslint:disable-next-line:no-console
  expect(console.error).toHaveBeenCalledTimes(1);
    // @ts-ignore
  expect(getBoundedEdges(newKeys, config.join(' '))).toEqual(newResponse);
});
