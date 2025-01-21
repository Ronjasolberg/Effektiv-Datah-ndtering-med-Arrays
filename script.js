const fruit = [];
const fruitDisplay = document.getElementById('fruitDisplay');
const message = document.getElementById('message');
const inputValue = document.getElementById('inputValue');

// Function to update the displayed fruit array
function updateDisplay() {
    fruitDisplay.textContent = `[ ${fruit.join(', ')} ]`;
    message.textContent = '';
}

// Add value to the start of the fruit array
document.getElementById('addToStart').addEventListener('click', () => {
    const value = inputValue.value.trim();
    if (value) {
        fruit.unshift(value);
        updateDisplay();
        inputValue.value = ''; // Clear input field
    } else {
        message.textContent = 'Please enter a valid value.';
    }
});

// Add value to the end of the fruit array
document.getElementById('addToEnd').addEventListener('click', () => {
    const value = inputValue.value.trim();
    if (value) {
        fruit.push(value);
        updateDisplay();
        inputValue.value = ''; // Clear input field
    } else {
        message.textContent = 'Please enter a valid value.';
    }
});

// Remove value from the start of the fruit array
document.getElementById('removeFromStart').addEventListener('click', () => {
    if (fruit.length > 0) {
        fruit.shift();
        updateDisplay();
    } else {
        message.textContent = 'Array is already empty.';
    }
});

// Remove value from the end of the fruit array
document.getElementById('removeFromEnd').addEventListener('click', () => {
    if (fruit.length > 0) {
        fruit.pop();
        updateDisplay();
    } else {
        message.textContent = 'Array is already empty.';
    }
});

// Clear the fruit array
document.getElementById('clearArray').addEventListener('click', () => {
    fruit.length = 0;
    updateDisplay();
});

// Initialize the display
updateDisplay();