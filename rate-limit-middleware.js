const config = require('./config');

function rateLimitMiddleware(req, res, next) {
  // Uses config.rateLimitApiKey to call the (fictional) external rate-limit
  // service. This is intentionally simplified for the demo.
  req.rateLimitApiKey = config.rateLimitApiKey;
  next();
}

module.exports = { rateLimitMiddleware };
