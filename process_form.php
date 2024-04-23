<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    // Retrieve other form fields similarly

    // You can perform validation or other processing here if needed

    // Redirect to the printable HTML page
    header("Location: https://wcet.waketech.edu/bspromish/WEB115/FinalProject/printable_page.html");
    exit();
} else {
    // If the form is not submitted, redirect the user back to the form page
    header("Location: FinalProject.html");
    exit();
}
?>
