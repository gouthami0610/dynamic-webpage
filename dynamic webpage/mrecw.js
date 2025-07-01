// Show alert when any nav link is clicked
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function () {
        alert(`You clicked on "${this.textContent}"`);
    });
});
