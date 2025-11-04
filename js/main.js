console.log("hello world");

let openTab = function(event) {
    console.log('clicked');

    // Get the clicked h3 element
    let clickedH3 = event.target;

    // Get the next sibling element (the skills-content div)
    let content = clickedH3.nextElementSibling;

    // Toggle between showing and hiding
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}