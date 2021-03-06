module.exports = {
  // This key is used by PerformanceObserver and must match with the output file name  (i.e. "assets/js/<name>")
  "react.js": {
    label: "React only",
    // The value of webpackEntryName is used by Webpack and must map with the entry file name (i.e. "src/js/<name>.jsx")
    webpackEntryName: "react",
  },
  "reactDom.js": {
    label: "React + ReactDom",
    webpackEntryName: "reactDom",
  },
  "preact.js": {
    label: "Preact only",
    webpackEntryName: "preact",
  },
  "preactCompat.js": {
    label: "Preact + Preact/Compat",
    webpackEntryName: "preactCompat",
  },
  "moment.js": {
    label: "moment",
    webpackEntryName: "moment",
  },
  "dateFns.js": {
    label: "date-fns/format",
    webpackEntryName: "dateFns",
  },
  "reactDates.js": {
    label: "react-dates",
    webpackEntryName: "reactDates",
  },
  "lodash.js": {
    label: "lodash",
    webpackEntryName: "lodash",
  },
  "lodashPick.js": {
    label: "lodash/pick",
    webpackEntryName: "lodashPick",
  },
  "airbnbJsShims.js": {
    label: "airbnb-js-shims",
    webpackEntryName: "airbnbJsShims",
  },
  "airbnbBrowserShims.js": {
    label: "airbnb-browser-shims",
    webpackEntryName: "airbnbBrowserShims",
  },
};
