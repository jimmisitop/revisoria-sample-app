# PR #2 — Medium risk: add payment logging, no tests

Branch: `feat/payment-logging`

## Changes

1. **Add new file `payments.js`** (copy it from this folder into the repo root).

2. **Modify `index.js`** to use it:

```diff
 const express = require('express');
 const config = require('./config');
+const { logPayment } = require('./payments');

 const app = express();
+app.use(express.json());

 app.get('/health', (req, res) => {
   res.json({ status: 'ok' });
 });

+app.post('/payments', (req, res) => {
+  logPayment(req.body);
+  res.status(201).json({ received: true });
+});
+
 app.listen(config.port, () => {
   console.log(`Sample app listening on port ${config.port}`);
 });
```

3. **Do NOT add a test file for this.** That's the point — this PR should
   trigger the Test subagent's "missing coverage" finding.

## Why this is "medium risk"

- New endpoint (`POST /payments`) with no input validation and no tests.
- Not a security issue by itself, but it's untested, user-facing behavior
  touching something payment-related — enough to flag, not enough to be
  "high" risk.

## Suggested PR description (paste into GitHub)

> Adds a basic payment logging endpoint. Still need to add tests and input
> validation in a follow-up — opening this now to unblock the frontend work.
