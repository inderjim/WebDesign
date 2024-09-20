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

document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("Danke für Ihre Anfrage! Sie werden zur Startseite weitergeleitet.");
            window.location.href = "index.html"; // Redirect to home page after successful submission
        } else {
            alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
        }
    }).catch(error => {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    });
});


let currentService = '';
let currentImageIndex = 0;

// Image arrays for each service
const serviceImages = {
    heating: [
        { src: 'heating1.jpg', caption: 'Heizungsinstallation Bild 1' },
        { src: 'heating2.jpg', caption: 'Heizungsinstallation Bild 2' },
        { src: 'heating3.jpg', caption: 'Heizungsinstallation Bild 3' }
    ],
    plumbing: [
        { src: 'Sanitaer1.jpg', caption: 'Sanitärreparaturen Bild 1' },
        { src: 'Sanitaer2.jpg', caption: 'Sanitärreparaturen Bild 2' },
        { src: 'Sanitaer3.jpg', caption: 'Sanitärreparaturen Bild 3' },
        { src: 'Sanitaer4.jpg', caption: 'Sanitärreparaturen Bild 4' }
    ],
    repair: [
        { src: 'repair1.jpg', caption: 'Reparatur & Wartung Bild 1' },
        { src: 'repair2.jpg', caption: 'Reparatur & Wartung Bild 2' },
        { src: 'repair3.jpg', caption: 'Reparatur & Wartung Bild 3' },
        { src: 'repair4.jpg', caption: 'Reparatur & Wartung Bild 4' }
    ],
    Notdienst: [
        { src: 'Notdienst1.jpg', caption: 'Notdienst Bild 1' },
        { src: 'Notdienst2.jpg', caption: 'Notdienst Bild 2' },
        { src: 'Notdienst.jpg',  caption: 'Notdienst Bild 3' }
    ]
};

// Open lightbox
function openLightbox(service, index) {
    currentService = service;
    currentImageIndex = index;
    showImage(index);
    document.getElementById('lightbox').style.display = 'block';
}

// Close lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Show image in lightbox
function showImage(index) {
    const image = serviceImages[currentService][index];
    document.getElementById('lightboxImg').src = image.src;
    document.getElementById('lightboxCaption').textContent = image.caption;
}

// Change slides
function changeSlide(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = serviceImages[currentService].length - 1;
    } else if (currentImageIndex >= serviceImages[currentService].length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

function openPopup() {
    document.getElementById("inquiryPopup").classList.add("active");
}

function closePopup() {
    document.getElementById("inquiryPopup").classList.remove("active");
}

