import { cssAttribute } from '../../models';
import { isParamUndefined } from '../isParameterUndefined/isParameterUndefined';

export function getAttributeWithDefault(customAttribute: cssAttribute, defaultAttribute: cssAttribute): cssAttribute {
  return !isParamUndefined(customAttribute) ? customAttribute : defaultAttribute;
}
