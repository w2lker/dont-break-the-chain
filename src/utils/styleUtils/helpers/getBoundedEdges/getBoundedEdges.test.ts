import { BoundAttributeArray } from '../../models';
import * as Warning from '../warning/warning';
import { getBoundedEdges } from './getBoundedEdges';

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
  const spy = jest.spyOn(Warning, 'bonWarning').mockImplementation(() => null);
  const newKeys = keys.slice(0, 3) as BoundAttributeArray;
  const newConfig = config.concat(keys).join(' ');
  const newResponse = { ...response };
  delete newResponse.attr4;

  const emptyResponse = getBoundedEdges(keys, newConfig);
  expect(Object.entries(emptyResponse).length).toBe(0);
  expect(getBoundedEdges(newKeys, config.join(' '))).toEqual(newResponse);
  spy.mockRestore();
});
