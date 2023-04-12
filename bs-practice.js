var letters= /^[A-Za-z]+$/;  
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
    var num = /^\d{10}$/;
    var ad= /^[A-Za-z0-9_\.\-]+$/;

function mySubmit(){
    let firstName=document.getElementById("first-name").value;
    let lastName=document.getElementById("last-name").value;
    let mail=document.getElementById("mail").value;
    let phoneNumber=document.getElementById("phone").value;


    
    if(firstName==""||lastName==""||mail==""||phoneNumber==""){
        alert("enter each details");
    }
    else if(!letters.test(firstName)){
        alert('First Name is incorrect must contain alphabets only');  
    }
    else if(!letters.test(lastName)){
        alert(' Last Name is incorrect must contain alphabets only'); 
    }
    else if(!email.test(mail)){
        alert('Invalid email format please enter valid email id');  
    }
    else if(!num.test(phoneNumber)){
        alert('Invalid phone number format please enter valid phone number');  

    }
    else{
        alert('enrollment done successful');  
    }

}

function myEnrollClear(){
    getElementById("first-name").value="";
    getElementById("last-name").value="";
    getElementById("mail").value="";
    getElementById("phone").value="";


}
function process() {
    
    var data = new FormData(document.getElementById("my-form"));
  

    var x = new XMLHttpRequest();
    x.open("POST", "0-dummy.html");
    x.onload = function () {
      console.log(this.response);
      // MANUAL RESET
      getElementById("first-name").value="";
      getElementById("last-name").value="";
      getElementById("mail").value="";
      getElementById("phone").value="";
  
    };
    x.send(data);
  
    //  STOP DEFAULT FORM SUBMIT/PAGE RELOAD
    return false;
  }



function myRegister(){
    let firstName=document.getElementById("fname").value;
    let lastName=document.getElementById("lname").value;
    let mail=document.getElementById("email").value;
    let phoneNumber=document.getElementById("phno").value;
    let address=document.getElementById("address").value;

    if(firstName==""||lastName==""||mail==""||phoneNumber==""||address==""){
        document.getElementsByClassName( "errorMessage" )[0].style.visibility = "visible";
        
        document.getElementsByClassName( "errorMessage" )[0].innerHTML = "Please Fill out this field";
        
    }
    else if(!letters.test(fName)){
        alert('First Name is incorrect must contain alphabets only');  
    }
    else if(!letters.test(lName)){
        alert(' Last Name is incorrect must contain alphabets only'); 
    }
    else if(!email.test(mail)){
        alert('Invalid email format please enter valid email id');  
    }
    else if(!num.test(phoneNumber)){
        alert('Invalid phone number format please enter valid phone number');  

    }
    else if(!ad.test(address)){
        alert('Invalid address format please enter valid one');  

    }
    else{
        alert('Registrtion done successful');  
    }


}


function myClose(){
    alert("enrollment closed and cancelled");
}


function myRegClose(){
    alert("Registration closed and cancelled");
}