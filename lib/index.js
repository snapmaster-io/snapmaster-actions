const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const snapmaster = require('express-snapmaster-middleware');

const app = express();

// enable CORS
app.use(cors());

// enable request body parsing middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({
  extended: true
}));

// use the snapmaster middleware for ALL routes
app.use(snapmaster);

/**
 * Initializes the snapmaster middleware with the actions provided.
 * 
 * @param {Object.<string, function>} actions The actions to route to as a hashmap
 * @returns {Object} The Express app object
 */
module.exports = function(actions) {
  if (!actions || !Object.keys(actions)) {
    throw new Error('snapmaster: must provide at least one action');
  }

  // register the routes for each action passed in
  for (const action of Object.keys(actions)) {
    app.use(`/${action}`, actions[action]);
  }

  return app;
}
