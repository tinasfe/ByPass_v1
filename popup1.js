function logMe(who,action,mode,data){
  // $("HTMLselector").on('click', function(e) {
  const today = new Date();
  var n = today.toString();
  var newItem =
      {
        // 'clicked': $(this).attr('class'),
        'who': who,
        'action': action,
        'mode': mode,
        'data': data,
        'time': n
      };

  oldItems.push(newItem);

  localStorage.setItem('itemsArray', JSON.stringify(oldItems));
  // alert();
  // e.stopPropagation();
  // });
}

function generatePassword1() {
  $( ".effect" ).animate({
    backgroundColor: "#5cb85c",
    color: "#fff",
  }, 50 );

  setTimeout(function() {

    $( ".effect" ).animate({
      backgroundColor: "#fff",
      color: "black",
    }, 50 );
  }, 1000);

  $( ".lock" ).animate({
    color: "#5cb85c",
  }, 50 );

  setTimeout(function() {

    $( ".lock" ).animate({
      color: "black",
    }, 50 );
  }, 1000);

  var a;
  if ($("#passLength").val() == "" ){
    a = 20;
  } else {
    if ($("#passLength").val() == 0){
      a=20;
      document.getElementById('passLength').value=20;
    }else{
      a = $("#passLength").val();
    }
  }
  var length = a,
    charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+|}{}ABCDEFGHIJKLM^&*()_+|NOPQRSTUVWXYZ0123456789!@#$%^&*()_+|}{}",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function showPassCreatePassword() {
  const createPassword = document.getElementById('createPassword');
  if (createPassword.type === 'password') {
    createPassword.type = 'text';
    logMe("user","Toggle-Password","Create account","ON - Password Confirm Input : "+ createPassword.value);

  } else {
    createPassword.type = 'password';
    logMe("user","Toggle-Password","Create account","OFF - Password Confirm Input : "+ createPassword.value);

  }
}


document.addEventListener('DOMContentLoaded', function() {
  $("#createPass").click(function(){

    showPassCreatePassword();
    });

  $("#createPassword").one("click", function(){
    alert("For the best security, keep the ByPass password!");

  });
  });

function showPassLoginPassword() {
  const createPassword = document.getElementById('loginPassword');
  if (createPassword.type === 'password') {
    createPassword.type = 'text';
    logMe("user","Toggle-Password","Login account","ON - Password Confirm Input : "+ createPassword.value);

  } else {
    createPassword.type = 'password';
    logMe("user","Toggle-Password","Create account","OFF - Password Confirm Input : "+ createPassword.value);

  }
}


document.addEventListener('DOMContentLoaded', function() {
  $("#loginPass").click(function(){
    showPassLoginPassword();
    });
  });
  window.onload = function() {
  const createPassword = document.getElementById('createPassword');
  createPassword.value = generatePassword1();

};
document.addEventListener('DOMContentLoaded', function() {
  $(".changePassCreate").click(function(){
    const createPassword = document.getElementById('createPassword');
      createPassword.value = generatePassword1();
    });
  });







$(document).ready(function() {

  // window.onload = function() {
  //   const createPassword = document.getElementById('createPassword');
  //   createPassword.value = generatePassword();
  // };


  // var strength = $("#password-strength-meter").val();

  $("#passLength").keyup(function() {
    logMe("user","Password length Box","Create account","Clicked");

     const createPassword = document.getElementById('createPassword');
     createPassword.value = generatePassword1();

   });

  $(".mainCA_nav_X").click(function() {
    logMe("user","Close window","option page","");
    win = window.close();
  });

  chrome.storage.sync.get(['websiteP'], function(items) {


    document.getElementById("CreateTitlee").innerText =  "Enter your information here to create an account on " + items.websiteP;
    if (items.websiteP == "amazon" || items.websiteP == "www.amazon.com" || items.websiteP == "amazon.safaie.ca") {
      // alert("amazon page is called...");
      $(".fnameSection").removeClass("off");
      $(".lnameSection").removeClass("off");
      $(".datebirthSection").removeClass("off");
      $('.mainCA').css('height', '65%');
      $('.mainCA').css('margin-top', '4%');
      $('.mainCA_top').css('height', '10%');
      $('.mainCA_bottom_main_top_btn').css('height', '13%');
      $('.mainCA_bottom_main_top_main').css('height', '86%');
    } else {

    }

  });



});

// $(document).ready(function() {
//   var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
//
//
//   $('div').on('click', function(e) {
//     var inputVal1 = document.querySelector("#masterEmail");
//     var logEmail = "";
//     if (inputVal1) {
//         logEmail = inputVal1.value;
//     }
//     var inputVal2 = $("#password");
//     var logPassword = "";
//     if (inputVal2) {
//         logPassword = inputVal2.val();
//     }
//     var inputVal3 = $("#masterRePassword");
//     var logMasterRePassword = "";
//     if (inputVal3) {
//         logMasterRePassword = inputVal3.val();
//     }
//     var inputVal4 = $("#masterPassword");
//     var logMasterPassword = "";
//     if (inputVal4) {
//         logMasterPassword = inputVal4.val();
//     }
//     var inputVal5 = document.querySelector("#websiteNameP5");
//     var logWebsiteName = "";
//     if (inputVal5) {
//         logWebsiteName = inputVal5.value;
//     }
//     // logUsername = document.querySelector("#masterRePassword").value;
//     var logUsername = "-";
//     // var logPasswordP9 = document.querySelector("#editPasswordPageInput").value;
//     var inputVal6 = $(".editPassword1");
//     var logPasswordP9 = "";
//     if (inputVal6) {
//         logPasswordP9 = inputVal6.val();
//     }
//
//     var inputVal7 = $(".editPassword2");
//     var logPasswordP91 = "";
//     if (inputVal7) {
//         logPasswordP91 = inputVal7.val();
//         if (logPasswordP91 != "") {
//           // logContentPage3 = "password acc2= " + logPasswordP91 ;
//
//         }
//     }
//     var inputVal8 = $(".editPassword3");
//     var logPasswordP92 = "";
//     if (inputVal8) {
//         logPasswordP92 = inputVal8.val();
//         if (logPasswordP92 != "") {
//            // logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92;
//
//         }
//     }
//     var inputVal9 = $(".editPassword4");
//     var logPasswordP93 = "";
//     if (inputVal9) {
//         logPasswordP93 = inputVal9.val();
//         if (logPasswordP93 != "") {
//            // logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 ;
//
//         }
//     }
//     var inputVal10 = $(".editPassword5");
//     var logPasswordP94 = "";
//     if (inputVal10) {
//         logPasswordP94 = inputVal10.val();
//         if (logPasswordP94 != "") {
//            // logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 + "password acc5= " + logPasswordP94;
//
//         }
//     }
//     var inputVal11 = $(".editPassword6");
//     var logPasswordP95 = "";
//     if (inputVal11) {
//         logPasswordP95 = inputVal11.val();
//         if (logPasswordP95 != "") {
//            // logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 + "password acc5= " + logPasswordP94 + "password acc6= " + logPasswordP95;
//
//         }
//     }
//
//     var inputVal12 = $("#loginEmail");
//     var logLoginEmail = "";
//     if (inputVal12) {
//         logLoginEmail = inputVal12.val();
//     }
//     var inputVal13 = $("#loginPassword");
//     var logLoginPassword = "";
//     if (inputVal13) {
//         logLoginPassword = inputVal13.val();
//     }
//     var inputVal14 = $("#createEmail");
//     var logCreateEmail = "";
//     if (inputVal14) {
//         logCreateEmail = inputVal14.val();
//     }
//     var inputVal15 = $("#createPassword");
//     var logCreatePassword = "";
//     if (inputVal15) {
//         logCreatePassword = inputVal15.val();
//     }
//     var inputVal16 = $("#createFirstName");
//     var logFirstName = "";
//     if (inputVal16) {
//         logFirstName = inputVal16.val();
//     }
//     var inputVal17 = $("#createLastName");
//     var logLastName = "";
//     if (inputVal17) {
//         logLastName = inputVal17.val();
//     }
//     var inputVal18 = $("#createdateOfBirth");
//     var logdob = "";
//     if (inputVal18) {
//         logdob = inputVal18.val();
//     }
//
//
//     logContentPage1 = "Page1: " + "Email= " + logEmail + " - " + "Password= " + logPassword + " - " + "rePassword= " + logMasterRePassword +
//                       "Page2: " + "masterPassword= " + logMasterPassword +
//                       "Page6: " + "websiteName= " + logWebsiteName;
//
//     logContentPage2 = "Page9: " + "username= " + logUsername + "password acc1= " + logPasswordP9;
//
//     // logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 + "password acc5= " + logPasswordP94 + "password acc6= " + logPasswordP95;
//     logContentPage3 = "--";
//
//
//     logContentPage4 ="loginPage: " + "Email= " + logLoginEmail + "Password= " + logLoginPassword +
//                       "createPage: " + "Email= " + logCreateEmail + "Password= " + logCreatePassword + "FirstName= " + logFirstName + "LastName= " + logLastName + "DateOfBirth= " + logdob;
//
//       var newItem =
//       {
//        'class': $(this).attr('class'),
//        'content': logContentPage1,
//        'content1': logContentPage2,
//        'content2': logContentPage3,
//        'content3': logContentPage4,
//        'timestamp': Date.now()
//       };
//
//        oldItems.push(newItem);
//
//        localStorage.setItem('itemsArray', JSON.stringify(oldItems));
//        // alert();
//        e.stopPropagation();
//   });
// });
//

$(document).ready(function() {
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    logMe("system","validate email","validate email","value: "+re.test(email));
    return re.test(email);
  }

  function emailValidate() {
    // var $result = $("#result");
    var email = $("#masterEmail").val();
    $result.text("");

    if (validateEmail(email)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
    } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
  }






  $(".mainCA_nav_X").click(function() {
    logMe("user","Close window","option page","");
    win = window.close();
  });

  chrome.storage.sync.get(['websiteP'], function(items) {
    document.getElementById("LoginTitlee").innerText = "Add your " + items.websiteP + " account to ByPass by completing the form below";
  });



});
