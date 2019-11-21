import { getBoundedEdges } from '../helpers';
import { BoundAttributeArray } from '../models';

export function margin(marginEdges: string | null) {
  const marginBounds: BoundAttributeArray = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'];
  return getBoundedEdges(marginBounds, marginEdges);
}
