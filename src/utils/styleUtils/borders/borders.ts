import { boxEdges, cleanMap, generateBoundedEdges, isParamUndefined } from '../helpers/helpers';
import { BoundAttributeArray, cssAttribute } from '../models';

export function borderColor(colorEdges: string | null) {
  const borderColorBounds: BoundAttributeArray = ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'];
  return generateBoundedEdges(borderColorBounds, colorEdges);
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

export function borderStyle(styleEdges: string | null) {
  const borderStyleBounds: BoundAttributeArray = ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'];
  return generateBoundedEdges(borderStyleBounds, styleEdges);
}

export function borderWidth(widthEdges: string | null) {
  const widthBounds: BoundAttributeArray = ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'];
  return generateBoundedEdges(widthBounds, widthEdges);
}
