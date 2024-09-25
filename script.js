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


// Function to toggle the menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active"); // Toggle the "active" class to show/hide menu
}

// Function to close the menu if clicked outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");

    // Check if the clicked target is not the menu or the hamburger icon
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove("active"); // Close the menu
    }
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
    notdienst: [
        { src: 'notdienst1.jpg', caption: 'Notdienst Bild 1' },
        { src: 'notdienst2.jpg', caption: 'Notdienst Bild 2' },
        { src: 'notdienst3.jpg', caption: 'Notdienst Bild 3' }
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

