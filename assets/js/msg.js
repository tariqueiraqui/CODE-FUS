document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".msg");

    if (form) { 
        form.addEventListener("submit", async function (event) {
            event.preventDefault(); 

           
            let formData = new FormData(form);
            let data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            console.log("Form Data:", data); 

            try {
               
                let response = await fetch("https://codefusion-mails.vercel.app/send-email", { 
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                let result = await response.json(); 
                console.log("Server Response:", result);

              
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

                
                form.parentNode.replaceChild(confirmationMessage, form);
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        });
    } else {
        console.error("Form with class 'msg' not found!");
    }
});
