function handleFormSubmission(event) {
    event.preventDefault();
 
    var form = document.getElementById('contactForm');
    var nameInput = document.getElementById('name1');
    var emailInput = document.getElementById('email1');
    var phoneInput = document.getElementById('phone1');
    var messageInput = document.getElementById('message1');


    if (nameInput.validity.valid && emailInput.validity.valid && phoneInput.validity.valid && messageInput.validity.valid) {
        alert('Message successfully sent!');
        form.reset();
    } else {
        alert('Please fill out all required fields correctly.');
    }
}
    function handleFormSubmission(event) {
        event.preventDefault();
        alert('Message successfully sent!');
        document.getElementById('contactForm').reset();
    }