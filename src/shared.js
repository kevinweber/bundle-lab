export function showEnvironment() {
  document.getElementById(
    "env"
  ).textContent = `IN ${process.env.NODE_ENV.toUpperCase()}`;
}
