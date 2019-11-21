import { getBoundedEdges } from '../helpers';
import { BoundAttributeArray } from '../models';

export function padding(paddingEdges: string | null) {
  const paddingBounds: BoundAttributeArray = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
  return getBoundedEdges(paddingBounds, paddingEdges);
}
