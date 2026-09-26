# Sample PRs for RevisorIA demo

This is a tiny sample app used only to generate 3 real Pull Requests for Bob
to analyze (Security / Tests / Documentation subagents), matching the 3 cases
already defined in `analysis-cache.example.json`:

| PR | Branch name        | Expected risk | What it demonstrates                     |
|----|---------------------|---------------|-------------------------------------------|
| #1 | `chore/update-deps` | Low           | Trivial change, fully covered by tests    |
| #2 | `feat/payment-logging` | Medium     | New feature, no tests added               |
| #3 | `feat/rate-limit`   | High          | Hardcoded credential + no tests           |

## How to use this

1. Create a new (throwaway) GitHub repo, e.g. `revisoria-sample-app`, or a
   folder inside your existing repo if you prefer (e.g. `sample-repo/`).
2. Copy `baseline/` as the initial commit on `main`.
3. For each PR folder (`pr-1-low-risk/`, `pr-2-medium-risk/`,
   `pr-3-high-risk/`), create a branch with the name from the table above,
   apply the file changes described in that folder's `CHANGES.md`, commit,
   and open the PR against `main`.
4. Open Bob's IDE, point Agent Mode at that PR/branch, run your 3 subagents
   (Security, Tests, Documentation) in parallel, and copy Bob's JSON output
   into `analysis-cache.json` under the matching key
   (`owner/repo#prNumber`).
