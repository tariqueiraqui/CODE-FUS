document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".msg");

    if (form) { 
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            
            // Create a confirmation message
            let confirmationMessage = document.createElement("div");
            confirmationMessage.innerHTML = `
                <h3>Thank You!</h3>
                <p>Your form has been submitted successfully.</p>
            `;
            confirmationMessage.style.textAlign = "center";
            confirmationMessage.style.padding = "20px";
            confirmationMessage.style.backgroundColor = "#d4edda";
            confirmationMessage.style.color = "#155724";
            confirmationMessage.style.border = "1px solid #c3e6cb";
            confirmationMessage.style.borderRadius = "5px";
            confirmationMessage.style.marginTop = "10px";

            // Replace form with the confirmation message
            form.parentNode.replaceChild(confirmationMessage, form);
        });
    } else {
        console.error("Form with class 'msg' not found!");
    }
});
