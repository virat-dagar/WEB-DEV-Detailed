// debounce.js
// Debounce function: ensures a function is called after a delay, 
// useful for search inputs, scroll events, etc.

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage:
const logMessage = debounce((msg) => {
    console.log("Debounced message:", msg);
}, 1000);

// Simulate rapid calls
logMessage("Hello");
logMessage("Hello again");
logMessage("Final call"); // Only this will log after 1 second
