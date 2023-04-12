let letters = /^[A-Za-z]+$/;
let email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// let num = /^\d{10}$/;

function validateForm() {
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let mail = document.getElementById("mail").value;

  if (firstName == "" && lastName == "" && mail == "") {
    document.getElementById("msg1").innerHTML = "*enter your first name.";
    document.getElementById("msg2").innerHTML = "*enter your last name.";
    // document.getElementById("msg3").innerHTML="*mention your DOB."
    document.getElementById("msg4").innerHTML = "*enter your email id ";
  }
  if (firstName == "" && lastName == "") {
    document.getElementById("msg1").innerHTML = "*enter your first name.";
    document.getElementById("msg2").innerHTML = "*enter your last name.";
  }
  if (mail == "" && firstName == "") {
    document.getElementById("msg1").innerHTML = "*enter your first name.";
    document.getElementById("msg4").innerHTML = "*enter your email id ";
  }
  if (mail == "" && lastName == "") {
    document.getElementById("msg2").innerHTML = "*enter your last name.";
    document.getElementById("msg4").innerHTML = "*enter your email id";
  }
  if (firstName == "") {
    document.getElementById("msg1").innerHTML = "*enter your first name.";
  }
  if (lastName == "") {
    document.getElementById("msg2").innerHTML = "*enter your last name.";
  }
  if (mail == "") {
    document.getElementById("msg4").innerHTML = "*enter your email id ";
  }

  // ##################################################################################################################################

  if (!letters.test(firstName)) {
    document.getElementById("msg1").innerHTML =
      "*enter your first name with out spl chars and numbers.";
  } else if (!letters.test(lastName)) {
    document.getElementById("msg2").innerHTML =
      "*enter your last name with out spl chars and numbers..";
  } else if (!email.test(mail)) {
    document.getElementById("msg4").innerHTML =
      "*enter your email id,email id includes @gmail.com.";
  } else {
    alert("successful register");
  }
}

// function myRegister(){
//     let firstName=document.getElementById("fname").value;
//     let lastName=document.getElementById("lname").value;
//     let mail=document.getElementById("mail").value;
// //    let gender=document.getElementsByName("radiobtn").value;
// //    let date=document.getElementById("date").date;

//     if(firstName==""||lastName==""||mail==""){
//         document.getElementsByClassName( "errorMessage" )[0].style.visibility = "visible";

//         document.getElementsByClassName( "errorMessage" )[0].innerHTML = "Please Fill out this field";

//     }
//     else if(!letters.test(firstName)){
//         alert('First Name is incorrect must contain alphabets only');
//     }
//     else if(!letters.test(lastName)){
//         alert(' Last Name is incorrect must contain alphabets only');
//     }
//     else if(!email.test(mail)){
//         alert('Invalid email format please enter valid email id');
//     }
//     // else if(date =""){
//     //     alert('Invalid phone number format please enter valid phone number');

//     // }

//     else{
//         alert('Registrtion done successful');
//     }

// }
