let emailform = document.getElementById("emailform");
emailform.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let email = document.getElementById("email");
    console.log(email)
  
    if (email.value == "" || email.value == null) {
        document.getElementById("error-msg").style.color = "#FB3E3E";
        document.getElementById("error-msg").innerHTML = "Oops! Please add your email"
    } else if (!ValidateEmail('email.value')) {
        document.getElementById("error-msg").style.color = "#FB3E3E";
        document.getElementById("error-msg").innerHTML = "Oops! Please check your email"
    } else {
        document.getElementById("error-msg").style.color = "green";
        document.getElementById("error-msg").innerHTML = "Email sent with success!"     
    }
});

function ValidateEmail(mail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailform.email.value))
  {
    return (true)
  }
    return (false)
}