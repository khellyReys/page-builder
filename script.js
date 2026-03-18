function initWidget() {
  try {
    if (globalThis.vibssWebChat && globalThis.vibssWebChat.setup) {
      globalThis.vibssWebChat.setup({
        id: "743b3c49-9ec6-4539-beec-b9e1cbe0c730",
      });
    } else {
      console.error(
        "[Vibss Widget] Widget script loaded but setup function not available",
      );
    }
  } catch (error) {
    console.error("[Vibss Widget] Failed to initialize widget:", error);
  }
}
function handleScriptError() {
  console.error(
    "[Vibss Widget] Failed to load widget script from https://vibss.io/plugin.js",
  );
  var errorDiv = document.createElement("div");
  errorDiv.style.cssText =
    "position:fixed;bottom:20px;right:20px;background:#fee;color:#c33;padding:12px 16px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15);font-size:14px;max-width:300px;z-index:999999;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;";
  errorDiv.textContent = "Chat widget failed to load. Please refresh the page.";
  document.body.appendChild(errorDiv);
  setTimeout(function () {
    errorDiv.remove();
  }, 10000);
}
var script = document.createElement("script");
script.src = "https://vibss.io/plugin.js?v=2026-03-15";
script.onload = initWidget;
script.onerror = handleScriptError;
document.body.appendChild(script);
