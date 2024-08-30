const button = document.getElementById("message_button");

button.addEventListener("click", showMessage);
function showMessage() {
    alert("Thanks for the message. I'll be in touch!");
}

document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.getElementById("nav_bar");
    const links = navBar.getElementsByTagName("a");

    // Set default colors: Home -> Blue, Others -> Gray
    links[0].style.color = "#085ED6"; // Home button
    for (let i = 1; i < links.length; i++) {
        links[i].style.color = "gray"; // Other buttons
    }

    // Add event listeners for hover and click events
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", function() {
            links[i].style.color = "#085ED6";
        });

        links[i].addEventListener("mouseout", function() {
            // If the link has not been clicked, revert to gray
            if (!links[i].classList.contains("clicked")) {
                links[i].style.color = "gray";
            }
        });

        links[i].addEventListener("click", function() {
            // Remove the 'clicked' class from all links
            for (let j = 0; j < links.length; j++) {
                links[j].classList.remove("clicked");
                links[j].style.color = "gray"; // Reset all links to gray
            }
            // Add the 'clicked' class to the clicked link and set it to blue
            links[i].classList.add("clicked");
            links[i].style.color = "#085ED6";
        });
    }
});
