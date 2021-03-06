import fileMapping from "./bundle-sizes.config";
import { showEnvironment } from "./shared";

const list = document.getElementById("bundles");

function visualizeFileData({ name, encodedBodySize, decodedBodySize }) {
  // NOTE: This naive approach won't work if the requested URL has a query param or hash
  const splitUrl = name.split("/");
  const filename = splitUrl[splitUrl.length - 1];

  // Only support JS files
  if (!filename.endsWith(".js")) return;

  const text = `<span style="display:inline-block;width:200px">${
    fileMapping[filename].label
  }: </span>encoded: <b>${(encodedBodySize / 1000).toFixed(
    1
  )} kb</b> –– decoded: ${(decodedBodySize / 1000).toFixed(1)} kb`;

  const li = document.createElement("li");
  li.innerHTML = text;
  list.appendChild(li);
}

function observe() {
  // Listen to any network requests
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    for (let i = 0; i < entries.length; i++) {
      visualizeFileData(entries[i]);
    }
  });

  observer.observe({ entryTypes: ["resource"] });
}

function fetchFiles() {
  Object.keys(fileMapping).forEach((filename) => {
    fetch(`assets/js/bundle-sizes/${filename}`);
  });
}

observe();
showEnvironment();
fetchFiles();
