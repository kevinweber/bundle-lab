# Bundle Lab

This repo explores bundle sizes related to using React, Preact and Preact-Combat.

Run `npm run app` to run a server.
Run `npm run build:watch` to live-update development files.
Run `npm run prod:watch` to live-update production files.

## The approach

- Set up Webpack with Babel
- Run Express server and compress files with gzip
- Request bundles using `fetch` from a neutral analyzer bundle
- Get bundle size using `PerformanceObserver` and print results on the page
- Enable Webpack `runtimeChunk` optimization to minimize Webpack footprint
