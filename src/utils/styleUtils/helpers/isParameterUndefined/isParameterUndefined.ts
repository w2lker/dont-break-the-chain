import { cssAttribute } from '../../models';

export function isParamUndefined(param: cssAttribute): boolean {
  return (!param || param === 'unset' || param === 'null') && param !== 0;
}
