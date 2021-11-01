'use strict';

const getType = arg => typeof arg;

const contract = (fn, ...types) => (...args) => {
  const typesOrder = args.map(getType);
  for (let i = 0; i < typesOrder.length; i++) {
    const rightType = types[i].name.toLowerCase();
    const checkType = typesOrder[i];
    if (checkType !== rightType)
      throw new TypeError(`Argument #${i + 2} type ${rightType} expected`);
  }
  const res = fn(...args);
  const rightType = types[types.length - 1].name.toLowerCase();
  const checkType = getType(res);
  if (checkType !== rightType)
    throw new TypeError(`Argument #${types.length + 1} type ${rightType} expected`);
  return res;
};

module.exports = { contract };
