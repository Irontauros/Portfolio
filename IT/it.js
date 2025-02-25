// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // --- Back Button Functionality ---
    // Find the back button element by its ID
    const backButton = document.getElementById("back-button");

    // Check if the back button exists on the page
    if (backButton) {
        // Add a click event listener to the back button
        backButton.addEventListener("click", () => {
            // Redirect the user to the main menu page when the back button is clicked
            window.location.href = "../Main/main.html";
        });
    }

    // --- Certificate Carousel Functionality ---
    // Select all certificate images in the carousel
    const certificates = document.querySelectorAll(".certificate-display img");

    // Get the left and right arrow elements for the certificate carousel
    const certificateLeftArrow = document.querySelector(".certificate-carousel .left-arrow");
    const certificateRightArrow = document.querySelector(".certificate-carousel .right-arrow");

    // Initialize the current certificate index
    let certificateIndex = 0;

    // Function to update the certificate carousel display
    function updateCertificateCarousel(index) {
        // Loop through all certificate images
        certificates.forEach((certificate, i) => {
            // Toggle the "active" class on the certificate
            // Only the certificate at the current index will have the "active" class
            certificate.classList.toggle("active", i === index);
        });
    }

    // Event listener for the left arrow in the certificate carousel
    certificateLeftArrow.addEventListener("click", () => {
        // Decrease the index, looping back to the last certificate if necessary
        certificateIndex = (certificateIndex - 1 + certificates.length) % certificates.length;
        // Update the carousel to display the new certificate
        updateCertificateCarousel(certificateIndex);
    });

    // Event listener for the right arrow in the certificate carousel
    certificateRightArrow.addEventListener("click", () => {
        // Increase the index, looping back to the first certificate if necessary
        certificateIndex = (certificateIndex + 1) % certificates.length;
        // Update the carousel to display the new certificate
        updateCertificateCarousel(certificateIndex);
    });

    // Initialize the certificate carousel to display the first certificate
    updateCertificateCarousel(certificateIndex);
})