module.exports = snapshot;

function snapshot() {
  var obj = {};

  for(var key in require.cache) {
    obj[key] = true;
  }

  return function() {
    for(var key in require.cache) {
      if (!obj[key]) {
        delete require.cache[key];
      }
    }
  };
}
