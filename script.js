document.getElementById("generate").addEventListener("click", generate);
document.getElementById("copy").addEventListener("click", copyToClipboard);

// generate password
function generate(){
  //set options
  var alertPassword = confirm ("click OK to make a password!");
  values = "blank"
  
  if (alertPassword === true) {
    var pwLength = prompt ("How long do you want your password to be, between 8 - 128 characters allowed", 12);
    
    if (pwLength < 8 || pwLength > 128){
      alert("you chose a length outside of 8-128 - please start again")
    }
    else {
      while (values === "blank"){
        var lowerChars = confirm ("do you want your password to include lower case characters?");
        var upperChars = confirm ("do you want your password to include UPPER CASE characters?");
        var numbersChars = confirm ("do you want your password to include number5?");
        var specChars = confirm ("do you want your password to include special characters? (!@#%@#$)");
        
        //error dialogue if nothing is chosen
        if (lowerChars === false && upperChars === false && numbersChars === false && specChars === false) 
          {confirm ("you need to choose at least one character type to include. start again?")
        } else {
          
            //set values
            values = ""
            if (lowerChars === true) values = "qwertyuiopasdfghjklzxcvbnm";
            if (upperChars === true) values = values.concat("QWERTYUIOPASDFGHJKLZXCVBNM");
            if (numbersChars === true) values = values.concat("1234567890");
            if (specChars === true) values = values.concat("!@#$%^&*()_+");

        }
      
        //generate the actual password using the values and length
        password = "";

        for(var i = 1; i <= pwLength; i++){
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
          }

        //display the password into the text box
        document.getElementById("password").value = password;
        
      }
    }
  }
}

// copy text to clipboard
function copyToClipboard() {
  var copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");

  alert("Copied to clipboard: " + copyText.value);
}
