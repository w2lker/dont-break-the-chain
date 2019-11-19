export type cssAttribute = 'unset' | number | string;

type TArrayWithLength<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };
export type BoundAttributeArray = TArrayWithLength<string, 4>;
