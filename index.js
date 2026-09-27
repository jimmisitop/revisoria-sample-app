const express = require('express');
const config = require('./config');
cons { logPayment } = require ('./payments');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/payments', (req, res) => {
  logPayment(req.body);
  res.status(201).json({ received: true });
});

app.listen(config.port, () => {
  console.log(`Sample app listening on port ${config.port}`);
});

module.exports = app;
