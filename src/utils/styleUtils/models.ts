export type cssAttribute = 'unset' | 'null' | number | string | undefined | null;

type TArrayWithLength<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };
export type BoundAttributeArray = TArrayWithLength<string, 1| 2 | 3 | 4>;
