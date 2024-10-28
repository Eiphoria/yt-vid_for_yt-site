// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only execute the script if the tab is fully loaded and is not a chrome:// URL
  if (changeInfo.status === "complete" && !tab.url.startsWith("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"]
    }).catch((error) => {
      console.warn("Script injection failed:", error);
    });
  }
});
