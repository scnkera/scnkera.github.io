const button = document.getElementById("message_button");

button.addEventListener("click", showMessage);
function showMessage() {
    alert("Thanks for the message. I'll be in touch!");
}
document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.getElementById("nav_bar");
    const links = navBar.getElementsByTagName("a");
    let activeLink = links[0]; // Set the Home button as the initially active link

    // Set default colors: Home -> Blue, Others -> Gray
    activeLink.style.color = "#085ED6"; // Home button
    for (let i = 1; i < links.length; i++) {
        links[i].style.color = "gray"; // Other buttons
    }

    // Function to reset all links to gray except the active one
    function resetColors() {
        for (let j = 0; j < links.length; j++) {
            if (links[j] !== activeLink) {
                links[j].style.color = "gray";
            }
        }
    }

    // Add event listeners for hover and click events
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", function() {
            if (links[i] !== activeLink) {
                links[i].style.color = "#085ED6";
            }
        });

        links[i].addEventListener("mouseout", function() {
            if (links[i] !== activeLink) {
                links[i].style.color = "gray";
            }
        });

        links[i].addEventListener("click", function() {
            // Update activeLink to the clicked one and reset other colors
            activeLink = links[i];
            resetColors();
            activeLink.style.color = "#085ED6";
        });
    }
});