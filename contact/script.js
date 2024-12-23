// Form Submission with SweetAlert
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // SweetAlert Success message
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been sent successfully.',
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6',
            background: '#fff',
            timer: 3000 // Automatically closes after 3 seconds
        });
        // Optionally, you can send the form data to a server or API here
    } else {
        // SweetAlert Error message
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all fields.',
            confirmButtonText: 'Try Again',
            confirmButtonColor: '#d33',
            background: '#fff',
            timer: 3000 // Automatically closes after 3 seconds
        });
    }
});
