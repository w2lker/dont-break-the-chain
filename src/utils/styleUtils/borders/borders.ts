import { boxEdges, cleanMap, isParamUndefined, reduceBoundedEdges } from '../helpers/helpers';
import { cssAttribute } from '../models';

export function borderColor(colorEdges: string | null) {
  if (isParamUndefined(colorEdges)) {
    return null;
  }

  const borderColorBounds = ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'];
  const edges = boxEdges(colorEdges);
  return  cleanMap(
    reduceBoundedEdges(borderColorBounds, edges),
  );
}

const brProps = {
  top: {
    left: 'borderTopLeftRadius',
    right: 'borderTopRightRadius',
  },
  bottom: {
    left: 'borderBottomLeftRadius',
    right: 'borderBottomRightRadius',
  },
};

function setBorderRadius(attr: string[], value: cssAttribute) {
  const result = attr.reduce((temp, keyValue) => {
    // @ts-ignore
    temp[keyValue] = value;
    return temp;
  }, {});
  return cleanMap(result);
}

export function borderTopRadius(value: cssAttribute) {
  return setBorderRadius([brProps.top.left, brProps.top.right], value);
}

export function borderLeftRadius(value: cssAttribute) {
  return setBorderRadius([brProps.top.left, brProps.bottom.left], value);
}

export function borderRightRadius(value: cssAttribute) {
  return setBorderRadius([brProps.top.right, brProps.bottom.right], value);
}

export function borderBottomRadius(value: cssAttribute) {
  return setBorderRadius([brProps.bottom.left, brProps.bottom.right], value);
}
