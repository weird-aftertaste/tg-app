// Access the Telegram WebApp object
const WebApp = window.Telegram.WebApp;

// Initialize the app when the script loads
WebApp.ready();

// Get user data and theme settings
const user = WebApp.initDataUnsafe.user;
const themeParams = WebApp.themeParams;

// Elements to update
const greetingElement = document.getElementById('greeting');
const themeInfoElement = document.getElementById('theme-info');

// Greet the user by their first name (or username if first name isn't available)
if (user) {
    const userName = user.first_name || user.username || 'User';
    greetingElement.textContent = `Hello, ${userName}!`;
} else {
    greetingElement.textContent = 'Hello, Guest!';
}

// Display theme settings
if (themeParams) {
    const bgColor = themeParams.bg_color || '#ffffff';
    const textColor = themeParams.text_color || '#000000';
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    themeInfoElement.textContent = `Current Theme - Background: ${bgColor}, Text: ${textColor}`;
} else {
    themeInfoElement.textContent = 'Unable to load theme settings.';
}

// Expand the WebApp to full size
WebApp.expand();