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

    // --- Video Carousel Functionality ---
    // Select all video elements in the video carousel
    const videos = document.querySelectorAll(".video-display video");

    // Get the left and right arrow elements for the video carousel
    const videoLeftArrow = document.querySelector(".video-carousel .left-arrow");
    const videoRightArrow = document.querySelector(".video-carousel .right-arrow");

    // Initialize the current video index
    let videoIndex = 0;

    // Function to update the video carousel display
    function updateVideoCarousel(index) {
        // Loop through all video elements
        videos.forEach((video, i) => {
            // Pause the video playback for all videos
            video.pause();

            // Reset the playback time to the beginning for all videos
            video.currentTime = 0;

            // Toggle the "active" class on the video
            // Only the video at the current index will have the "active" class
            video.classList.toggle("active", i === index);
        });
    }

    // Event listener for the left arrow in the video carousel
    videoLeftArrow.addEventListener("click", () => {
        // Decrease the index, looping back to the last video if necessary
        videoIndex = (videoIndex - 1 + videos.length) % videos.length;

        // Update the carousel to display the new video
        updateVideoCarousel(videoIndex);
    });

    // Event listener for the right arrow in the video carousel
    videoRightArrow.addEventListener("click", () => {
        // Increase the index, looping back to the first video if necessary
        videoIndex = (videoIndex + 1) % videos.length;

        // Update the carousel to display the new video
        updateVideoCarousel(videoIndex);
    });

    // Initialize the video carousel to display the first video
    updateVideoCarousel(videoIndex);
});
