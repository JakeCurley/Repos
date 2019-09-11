function validateInfo() {
  /*  clearErrors(); */
    var name = document.forms["info"]["name"].value;
    var email = document.forms["info"]["email"].value;
    var phone = document.forms["info"]["phone"].value;

    if (name == "") {
        alert("Name must be filled out before submitting.");
        document.forms["info"]["name"].parentElement.className = "form-group has-error form-inline col-7 justify-content-end";
        document.forms["info"]["name"].focus();
        return false;
    }
    else if (email == "") {
        alert("Email must be filled in with a valid email address.");
        document.forms["info"]["email"].parentElement.className = "form-group has-error form-inline col-7 justify-content-end";
        document.forms["info"]["email"].focus();
        return false;
    }
   else if (phone == "" || isNaN(phone)) {
       alert("Phone must be filled in with a valid phone number.");
       document.forms["info"]["phone"].parentElement.className = "form-group has-error form-inline col-7 justify-content-end";
       document.forms["info"]["phone"].focus();
       return false;
   }
   else if ((document.getElementById("no").checked == false) && (document.getElementById("yes").checked == false)) {
     alert("Please check one: Have you been to the restaurant before?")
     return false;
   }
   else if ((document.getElementById("M").checked == false) && (document.getElementById("T").checked == false) && (document.getElementById("W").checked == false) && (document.getElementById("Th").checked == false) && (document.getElementById("F").checked == false)) {
     alert("Please select one or more days that you would prefer to be contacted.")
     return false;
   }
   else {
     alert("Your information is valid.  Thank you for your request.")
   }
return false;
}
function clearErrors() {
  for (var i = 0; i < document.forms["name"].elements.length; i++) {
      if (document.forms["name"].elements[i].parentElement.className.indexOf("has-") != -1) {
            document.forms["name"].elements[i].parentElement.className = "form-group";
        }
    }
}
