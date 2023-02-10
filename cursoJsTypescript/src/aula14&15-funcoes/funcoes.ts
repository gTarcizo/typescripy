type MapStringsCallback = (treco: string) => string;

export function mapStrings(array: string[], callbackFn: MapStringsCallback): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

const abcMapped = mapStrings(abc, (array) => array.toUpperCase());

console.log(abc);
console.log(abcMapped);
