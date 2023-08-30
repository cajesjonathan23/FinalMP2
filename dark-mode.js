// dark-mode.js

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    // Save dark mode preference to local storage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Check local storage for dark mode preference
const savedDarkMode = localStorage.getItem("darkMode");
if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode");
}
