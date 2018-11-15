export function isDef(val) {
  return val !== undefined && val !== null;
}
export function isKorean(text) {
  const reg = /([(\uAC00-\uD7A3)|(\u3131-\u3163)])+/gi;
  return reg.test(text);
}
