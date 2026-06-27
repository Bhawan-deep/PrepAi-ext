chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    console.log("Message received:", message);

});
console.log("PrepPilot Content Script Loaded!");

console.log("Title:", document.title);

console.log("URL:", window.location.href);

console.log(document.body.innerText.slice(0, 500));

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received:", message);
});