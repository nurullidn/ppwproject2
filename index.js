document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('saranForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(this); // Get form data
        let formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });
        const message = JSON.stringify(formValues); // Convert form data to JSON string
        // Display message using alert
        alert(message);
        // Display message above the page
        displayMessage(message);
        // Reset form fields
        this.reset();
    });
});





// Function to toggle dark mode
function toggleDarkMode(mode) {
    const body = document.body;
    if (mode === 'dark') {
        body.classList.add('dark-mode');
    } else if (mode === 'light') {
        body.classList.remove('dark-mode');
    }
}

// Function to display message above the page
function displayMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.padding = '10px';
    messageDiv.style.backgroundColor = '#333';
    messageDiv.style.color = '#fff';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.borderRadius = '5px';
    document.body.appendChild(messageDiv);
    // Remove the message after 5 seconds
    setTimeout(() => {
        document.body.removeChild(messageDiv);
    }, 5000);
}
