document.addEventListener("DOMContentLoaded", () => {
    // Get references to the DOM elements we need to interact with
    const welcomeScreen = document.getElementById("welcome-screen"); // The welcome screen element
    const menuScreen = document.getElementById("menu-screen"); // The menu screen element
    const header = document.getElementById("main-header"); // The header element of the portfolio
    const mainContent = document.getElementById("portfolio-sections"); // The main content of the portfolio
    const menuButtons = document.querySelectorAll(".menu-options button"); // All the buttons in the menu screen

    // Transition from the welcome screen to the menu screen
    setTimeout(() => {
        // After 5 seconds (5000ms), hide the welcome screen
        welcomeScreen.style.display = "none";  // Hide the welcome screen after animation
        // Add the 'active' class to the menu screen to display it
        menuScreen.classList.add("active");  // Show the menu screen after 5 seconds
    }, 2000);  // 5 seconds delay before transition

    // Handle navigation between different sections based on button click
    menuButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Get the target section from the data-target attribute of the button
            const target = button.dataset.target;

            // If the target is "portfolio", we transition to the portfolio section
            if (target === "portfolio") {
                // Hide the menu screen and show the portfolio content
                menuScreen.classList.remove("active"); // Hide the menu screen
                header.classList.add("active"); // Show the header
                mainContent.classList.add("active"); // Show the portfolio content
            } 
            // If the target is "fitness", navigate to the fitness section page
            else if (target === "fitness") {
                // Redirect to the fitness section (assuming it's in a separate folder)
                window.location.href = "fitness/fitness.html";  // Navigate to the fitness page
            }
        });
    });
});
