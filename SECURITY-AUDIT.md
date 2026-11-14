# Security review — 2026-11-14

This is a partial remediation, not a certification that the repository is free of vulnerabilities. Changes remain in a draft pull request pending review.

## .

npm findings before: {"info": 0, "low": 0, "moderate": 0, "high": 8, "critical": 1, "total": 9}. After remediation: {"info": 0, "low": 0, "moderate": 0, "high": 0, "critical": 0, "total": 0}.
Counts refer to dependency findings in this project, including development dependencies. Projects without a committed lockfile were first resolved to create an auditable baseline. Production builds were checked on Node.js 24 with CI=true, npm ci --ignore-scripts --legacy-peer-deps and NODE_OPTIONS=--openssl-legacy-provider for legacy Webpack compatibility; these builds are not browser end-to-end tests.

Production build/test result: `{   "project": "simon-says",   "install_exit": 0,   "build_exit": 0 }`.
