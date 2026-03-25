document.getElementById("myForm").addEventListener("submit", function(event) {

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("mobileError").innerText = "";


    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

 
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Invalid email";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Min 6 characters";
        isValid = false;
    }

    let mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
        document.getElementById("mobileError").innerText = "Enter 10-digit number";
        isValid = false;
    }

   
    if (!isValid) {
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});