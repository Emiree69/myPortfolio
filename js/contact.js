// Define an array of page URLs
const pageURLs = {
    page1: "../index.html",
    page2: "../pages/aboutpage.html",
    page4: "contact.html"
};

// Get all elements with the class "navigateButton" and convert them to an array
const buttons = Array.from(document.querySelectorAll(".navigateButton"));

// Add a click event listener to each button in the array
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Get the data-page attribute value to determine which page to navigate to
        const targetPage = this.getAttribute("data-page");

        // Use the targetPage to get the corresponding URL from the pageURLs object
        const newPageURL = pageURLs[targetPage];

        // Use window.location to navigate to the new page
        window.location.href = newPageURL;
    });
});
function sendEmail() {
    const emailInput = document.getElementById('emailInput');
    const sendButton = document.getElementById('sendButton');
    
    // Check if the email input is not empty
    if (emailInput.value.trim() !== '') {
        // Change the button text to "Email has been sent"
        sendButton.textContent = 'Email has been sent';

        const recipientEmail = '090029@glr.nl';
        const subject = 'Portfolio';
        const fname = document.getElementById('fname').value;
        const message = document.getElementById('emailInput').value;
        const body = 'Hello, my name is '+ fname + ' and I wanted to get in touch with you because ' + message;
        
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open the user's email client or service
        window.location.href = mailtoLink;
    } 
    else {
        alert('Please fill out the form before sending.');
    }
}
