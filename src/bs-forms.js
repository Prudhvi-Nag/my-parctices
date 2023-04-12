        



let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("form");
let successIcon = document.getElementsByClassName("success-icon");
let failureIcon = document.getElementsByClassName("fail-icon");
let error = document.getElementsByClassName("error");

  
  



function xd() {

 
    

   
  if (username.value.trim() === "") {
    error[0].innerHTML = "message";
    username.style.border = "2px solid red";


    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";

  }
    else{
        error[0].innerHTML ="";
        username.style.border = "2px solid green"
        successIcon[0].style.opacity = "1";
        
       failureIcon[0].style.opacity = "0";

    }
  



   if(password.value.trim() ==="") {
    error[1].innerHTML = "enter your password";
    password.style.border = "2px solid red";
    failureIcon[1].style.opacity = "1";
    successIcon[1].style.opacity = "0";
    
   }
    else{
        error[1].innerHTML ="";
        password.style.border = "2px solid green"
        successIcon[1].style.opacity = "1";
        failureIcon[1].style.opacity = "0";
      
    }
    
  

 
}
// function reset() {
//    var element = document.getElementById(" form ");
//          element.reset()
// }
