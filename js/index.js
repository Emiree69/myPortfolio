// Define an array of page URLs
const pageURLs = {
    page1: "pages/aboutpage.html",
    page3: "pages/contact.html"
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

