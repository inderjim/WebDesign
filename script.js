// Optional JavaScript file
console.log("Website for Aqua Heat Solution Loaded Successfully");

// Get references to the sections
const servicesSection = document.getElementById('servicesMain');
const whyChooseUsSection = document.getElementById('why-choose-us');

// Define the background images
const backgroundImages = {
    default: 'background.png',  // Background for initial view (Home section)
    services: 'bg2.jpg', // Background for Services section
    whyChooseUs: 'whyus.jpg' // Background for Why Choose Us section
};

// Function to change the background image
function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
}

// Function to detect which section is in the viewport
function checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Ensure compatibility on mobile
    
    const servicesPosition = servicesSection.getBoundingClientRect();
    const whyChooseUsPosition = whyChooseUsSection.getBoundingClientRect();
    
    // Adjust thresholds for mobile to account for smaller screens
    const threshold = window.innerHeight / 3; // This helps trigger the background change earlier

    // Check if the user is within the Services section
    if (scrollPosition >= servicesSection.offsetTop - threshold && scrollPosition < servicesSection.offsetTop + servicesSection.offsetHeight) {
        changeBackground(backgroundImages.services);
    }
    // Check if the user is within the Why Choose Us section
    else if (scrollPosition >= whyChooseUsSection.offsetTop - threshold && scrollPosition < whyChooseUsSection.offsetTop + whyChooseUsSection.offsetHeight) {
        changeBackground(backgroundImages.whyChooseUs);
    }
    // Otherwise, set the default background
    else {
        changeBackground(backgroundImages.default);
    }
}

// Attach the scroll event listener for both desktop and mobile
window.addEventListener('scroll', checkScroll);

// Set the initial background when the page loads
window.addEventListener('load', () => {
    changeBackground(backgroundImages.default);
});


// Get elements
const popup = document.getElementById("inquiryPopup");
const inquiryBtn = document.getElementById("inquiryBtn");
const closeBtn = document.querySelector(".close-btn");

// Open the popup when the button is clicked
inquiryBtn.onclick = function () {
    popup.style.display = "block";
}

// Close the popup when the close button is clicked
closeBtn.onclick = function () {
    popup.style.display = "none";
}

// Close the popup when clicking outside of the popup content
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

