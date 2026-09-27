const { rateLimitMiddleware } = require('./rate-limit-middleware');
const express = require('express');
app.use(rateLimitMiddleware);
const config = require('./config');

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(config.port, () => {
  console.log(`Sample app listening on port ${config.port}`);
});

module.exports = app;
