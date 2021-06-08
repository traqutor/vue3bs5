import { v4 as uuIdv4, NIL as NIL_UUID } from 'uuid';

export function guidsAreEqual(left, right) {
  if (typeof left === "string" && typeof right === "string") {
    const txtLeft = left && left.slice().toUpperCase();
    const txtRight = right && right.slice().toUpperCase();
    return txtLeft === txtRight;
  }
}

export function guidsFilterUnique(array) {
  return array.filter((obj, index, arr) => {
    return arr.map(mapObj => mapObj.id).indexOf(obj.id) === index;
  });
}

export function guidsGetOne() {
  return uuIdv4();
}

export function guidsGetNull() {
  return NIL_UUID;
}
