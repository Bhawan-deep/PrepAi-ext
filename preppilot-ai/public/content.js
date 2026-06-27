chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    console.log("Message received:", message);

    if (message.type === "GET_PAGE_TEXT") {

        const description = document.querySelector(
            '[data-track-load="description_content"]'
        );

        const pageText = description
            ? description.innerText
            : "Problem statement not found.";

        sendResponse({
            text: pageText
        });
    }

    return true;
});

console.log("PrepPilot Content Script Loaded!");
console.log("PrepPilot Content Script Loaded!");

console.log("Title:", document.title);

console.log("URL:", window.location.href);

console.log("First 500 characters:");

console.log(document.body.innerText.slice(0, 500));