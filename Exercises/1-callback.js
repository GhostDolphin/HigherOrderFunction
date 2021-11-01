'use strict';

//for in

/*const iterate = (obj, callback) => {
  for (const key in obj) {
    callback(key, obj[key]);
  }
};*/

const iterate = (obj, callback) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    callback(key, value, obj);
  }
};

module.exports = { iterate };
