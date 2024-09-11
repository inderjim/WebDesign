// Optional JavaScript file
console.log("Website for Aqua Heat Solution Loaded Successfully");

// Get references to the sections
const servicesSection = document.getElementById('servicesMain');
const whyChooseUsSection = document.getElementById('why-choose-us');

// Define the background images
const backgroundImages = {
    default: 'background.png',  // Background for initial view (Home section)
    services: 'bg2.jpg', // Background for Services section
    whyChooseUs: 'bg3.jpg' // Background for Why Choose Us section
};

// Function to change the background image
function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
}

// Function to detect section in the viewport
function checkScroll() {
    const servicesPosition = servicesSection.getBoundingClientRect();
    const whyChooseUsPosition = whyChooseUsSection.getBoundingClientRect();

    // When the user scrolls to the Services section
    if (servicesPosition.top >= 0 && servicesPosition.bottom <= window.innerHeight) {
        changeBackground(backgroundImages.services);
    }
    // When the user scrolls to the Why Choose Us section
    else if (whyChooseUsPosition.top >= 0 && whyChooseUsPosition.bottom <= window.innerHeight) {
        changeBackground(backgroundImages.whyChooseUs);
    }
    // Default background when not in specific sections
    else {
        changeBackground(backgroundImages.default);
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', checkScroll);

// Set initial background
changeBackground(backgroundImages.default);

