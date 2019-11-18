export function arrayWithout(array: any[], item: any): any[] {
  if (!Array.isArray(array)) {
    return [];
  }
  const index = array.indexOf(item);
  if (index === -1) {
    return array;
  }
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
}

export function fromEntries(iterable: string[][]): {} {
  return [...iterable].reduce((object, [key, value]) => {
    // @ts-ignore
    object[key] = value;
    return object;
  }, {});
}
