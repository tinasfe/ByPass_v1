// Match password + add margin to masterRePassword




$(document).ready(function() {
  var strength = $("#password-strength-meter").val();

  $("#password").keyup(function() {
    if (strength != 4) {
      document.getElementById('inputMain').style.marginTop = '24%';
      document.getElementById('scrollDown').style.display = 'block';

    } else {

      document.getElementById('scrollDown').style.display = 'none';

    }
  });
  $("#masterRePassword").keyup(function() {
    document.getElementById('scrollDown').style.display = 'none';

  });
  $("#masterRePassword").keyup(function() {

    if ($("#password").val() != $("#masterRePassword").val()) {
      $("#msg").html("Not matched").css("color", "red");

    } else
    if ($("#password").val() == "") {
      $("#msg").html("").css("color", "red");

    } else {
      $("#msg").html("Matched").css("color", "green");

    }
  });
});
// Match password + add margin to masterRePassword

// cookie
// var date = new Date();
// date.setTime(date.getTime() + (30 * 1000));
// $.cookie('username', username, { expires: date });

// function setCookie(cname,cvalue,exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (30 * 1000));
//   var expires = "expires=" + d.toGMTString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
//
// function getCookie(cname) {
//   var name = cname + "=";
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var ca = decodedCookie.split(';');
//   for(var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }
//
// function checkCookie() {
//   var user=getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//      user = prompt("Please enter your name:","");
//      if (user != "" && user != null) {
//        setCookie("username", user, 30);
//      }
//   }
// }
// cookie


// Show password
function showPass() {
  const password = document.getElementById('password');
  const rePassword = document.getElementById('masterRePassword');
  if (password.type === 'password') {
    password.type = 'text';
    rePassword.type = 'text';
  } else {
    password.type = 'password';
    rePassword.type = 'password';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  // document.querySelector('.toggle-password').addEventListener('click', showPass);
  $(".toggle-password").click(function(){
    showPass();
  });

});

// Show password
