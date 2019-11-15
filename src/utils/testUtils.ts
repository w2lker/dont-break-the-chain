export function arrayWithout(array:any[], item: any) {
  if (!Array.isArray(array) ) {
    return null;
  }
  const index = array.indexOf(item);
  if ( index === -1 ) {
    return array;
  }
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
}