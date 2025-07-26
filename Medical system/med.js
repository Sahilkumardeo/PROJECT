function showAlert() {
    alert("Thank you for choosing our healthcare services!");
}

// Handling the appointment form submission
document.getElementById("appointment-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from refreshing the page
    alert("Appointment booked successfully! We will contact you soon.");
});
