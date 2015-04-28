require('./foo');

var snapshot = require('..')();

require('./bar');

// Restore require.cache
snapshot();

require('./foo');
require('./bar');
