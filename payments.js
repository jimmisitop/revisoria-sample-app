function logPayment(payment) {
  // NOTE: this only logs to the console for now — no persistence yet.
  console.log(`[payment] ${payment.id} - $${payment.amount} - ${payment.status}`);
}

module.exports = { logPayment };
