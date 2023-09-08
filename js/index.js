// Define an array of page URLs
let pageURLs = {
    page1: "pages/aboutpage.html",
    page2: "pages/contact.html",
    page3: "bonus/bonus.php"
};

let buttons = Array.from(document.querySelectorAll(".navigateButton"));

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let targetPage = this.getAttribute("data-page");

        let newPageURL = pageURLs[targetPage];

        window.location.href = newPageURL;
    });
});

//Using a for loop
for (let i = 0; i < 10; i++) {
    console.log("Hello, welcome to my site");
  }
