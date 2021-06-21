function validateForm() {
    var fname = document.forms["regform"]["fname"].value;
    var lname = document.forms["regform"]["lname"].value;
    var email = document.forms["regform"]["email"].value;
    var pass = document.forms["regform"]["pass"].value;
    var cpass = document.forms["regform"]["cpass"].value;
    var pnumber = document.forms["regform"]["pnumber"].value;


    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




   if(pass == null || pass == ""){
        regform.pass.placeholder="Password cannot be empty";
        regform.pass.style="border: 2px solid rgb(255, 0, 0);";
        return false;
    }
    else if(pass != ""){
        if(pass.length >= 8){
            if(cpass == ""){
                regform.cpass.placeholder="Please confirm your password";
                regform.cpass.style="border: 2px solid rgb(255, 0, 0);";
                return false;
            }
            else{
                if(pass != cpass){
                    alert('passwords are not same');
                    return false;
                }
            }
        }
        else{
            alert('minimum 8 charactrs required for password');
            return false;
        }
        
    }
    else if (fname == "") {
      regform.fname.placeholder="First name must be provided";
      regform.fname.style="border: 2px solid rgb(255, 0, 0);";
      return false;
    }
    else if(lname == ""){
        regform.lname.placeholder="Last name must be provided";
        regform.lname.style="border: 2px solid rgb(255, 0, 0);";
        return false
    }
    else if(email != ""){
        if(email.match(mailformat)){
            return true;
        }
        else{
            regform.email.value="";
            regform.email.placeholder="Incorrect email format";
            regform.email.style="border: 2px solid rgb(255, 0, 0);";
            return false;
        }
    }
    else if(email == ""){
        regform.email.placeholder="Email must be provided";
        regform.email.style="border: 2px solid rgb(255, 0, 0);";
        return false;
    }
    
    if(pnumber.length > 10 || pnumber.length < 10){
        alert("Phone number Error(Maximum characters 10)");
        regform.pnumber.style="border: 2px solid rgb(255, 0, 0);";
        return false;
    }
    if(regform.accept.checked == false){
        alert('please accept our terms and conditions');
        return false;
    }

    
} 