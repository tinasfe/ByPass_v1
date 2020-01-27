

var nomber;

function delPOST(name,email,pass) {
  var request = new XMLHttpRequest()
  request.open('POST', 'http://amazon.safaie.ca/api/users1/1', true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log(this.response)
    }
  }
  // alert(createWebsite + " / " + createEmail + " / " + createPassword);
  // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
  request.send("UserID=10&FirstName=" + email + "&LastName=nuAlle&Email=" + email + "&Password=" + email + "&Mobile=0123&BirthDay=01")
  // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
}

function showPassMasterPassword() {
  const createPassword = document.getElementById('masterPassword');
  if (createPassword.type === 'password') {
    createPassword.type = 'text';
  } else {
    createPassword.type = 'password';
  }
}



function loginToPage(name, user, pass) {

  console.log(name + " / " + user + " / " + pass);
  var request = new XMLHttpRequest()
  request.open('POST', 'http://amazon.safaie.ca/api/login', true)
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  request.onload = function() {
    // console.log('login');
    if (request.status >= 200 && request.status < 400) {
      console.log(this.response)
      token = this.response;
      token = token.replace("\"", "");
      token = token.replace("\"", "");
      window.open("http://amazon.safaie.ca/Users/Apilogin?username=" + user + "&token=" + token, '_blank');

    }
  }
  request.send("UserID=0123&FirstName=" + name + "&LastName=nuAlle&Email=" + user + "&Password=" + pass + "&Mobile=0123&BirthDay=01")
}

function container(number,name,user,pass,saveOrReturn) {
    var a1,a2,a4,a5,a6,a7;

    if (number == 1 && saveOrReturn == 1) {
      // a1 = [name,user,pass]
      a1 = { "name": name, "user": user, "pass": pass};
      localStorage.setItem('acc1', JSON.stringify(a1));
      // console.log(a1);
    }
    if (number == 1 && saveOrReturn == 0) {
      acc1 = localStorage.getItem('acc1');
      var data = JSON.parse(acc1)
      // console.log(data.name,data.user,data.pass);
      loginToPage(data.name,data.user,data.pass);
    }
    if (number == 2 && saveOrReturn == 1) {
      a2 = { "name": name, "user": user, "pass": pass};
      localStorage.setItem('acc2', JSON.stringify(a2));
    }
    if (number == 2 && saveOrReturn == 0) {
      acc2 = localStorage.getItem('acc2');
      var data = JSON.parse(acc2)
      // console.log(data.name,data.user,data.pass);
      loginToPage(data.name,data.user,data.pass);
    }
    if (number == 3 && saveOrReturn == 1) {
      a3 = { "name": name, "user": user, "pass": pass};
      localStorage.setItem('acc3', JSON.stringify(a3));
    }
    if (number == 3 && saveOrReturn == 0) {
      acc3 = localStorage.getItem('acc3');
      var data = JSON.parse(acc3)
      // console.log(data.name,data.user,data.pass);
      loginToPage(data.name,data.user,data.pass);
    }
    if (number == 4 && saveOrReturn == 1) {
      a4 = { "name": name, "user": user, "pass": pass};
      localStorage.setItem('acc4', JSON.stringify(a4));
    }
    if (number == 4 && saveOrReturn == 0) {
      acc4 = localStorage.getItem('acc4');
      var data = JSON.parse(acc4)
      // console.log(data.name,data.user,data.pass);
      loginToPage(data.name,data.user,data.pass);
    }
    if (number == 5 && saveOrReturn == 1) {
      a5 = { "name": name, "user": user, "pass": pass};
      localStorage.setItem('acc5', JSON.stringify(a5));
    }
    if (number == 5 && saveOrReturn == 0) {
      acc5 = localStorage.getItem('acc5');
      var data = JSON.parse(acc5)
      // console.log(data.name,data.user,data.pass);
      loginToPage(data.name,data.user,data.pass);
    }
    if (number == 6 && saveOrReturn == 1) {
      a6 = { "name": name, "user": user, "pass": pass};
      localStorage.setItem('acc6', JSON.stringify(a6));
    }
    if (number == 6 && saveOrReturn == 0) {
      acc6 = localStorage.getItem('acc6');
      var data = JSON.parse(acc6)
      // console.log(data.name,data.user,data.pass);
      loginToPage(data.name,data.user,data.pass);
    }
    if (number == 7 && saveOrReturn == 1) {
      a7 = { "name": name, "user": user, "pass": pass};
      localStorage.setItem('acc7', JSON.stringify(a7));
    }
    if (number == 7 && saveOrReturn == 0) {
      acc7 = localStorage.getItem('acc7');
      var data = JSON.parse(acc7)
      // console.log(data.name,data.user,data.pass);
      loginToPage(data.name,data.user,data.pass);
    }


  // loginToPage(name, user, pass);

}
// Search
//
$(document).ready(function() {
  var strength = {
  		0: "Worst ☹",
  		1: "Bad ☹",
  		2: "Weak ☹",
  		3: "Good ☺",
  		4: "Strong ☻"
  }

  var password = document.getElementById('password');
  var meter = document.getElementById('password-strength-meter');
  var text = document.getElementById('password-strength-text');

  // password.addEventListener('input', function()
  // {
  //
  // });

  $("#password").keyup(function() {
  	var val = password.value;
  	var result = zxcvbn(val);

  	// Update the password strength meter
  	meter.value = result.score;

  	// Update the text indicator
  	if(val !== "") {
  			text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
  	}
  	else {
  			text.innerHTML = "";
  	}
  });

  $(".input1_page7").keyup(function() {
    var input, filter, ul, li, a, i, txtValue;
    var rowSel = [];
    input = document.querySelector(".input1_page7");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".middle_page7");
    li = ul.querySelectorAll(".mp7_row");
    // console.log(li);
    for (i = 0; i < 20; i++) {
      // console.log(li[i]);
      a = li[i].getElementsByTagName("div")[2];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }

  });
});
$(document).ready(function() {
  var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

  shortcut.add("Ctrl+Shift+L",function() {
    download();

  });
  // document.getElementById("enterWorks").focus();
//   $( "#enterWorks" ).focus(function() {
// });

$(document).ready(function(){
    $('#enterWorks').keypress(function(e){
      if(e.keyCode==13)
      $('#linkadd').click();
      alert( "Handler for .focus() called." );

    });
});

  // shortcut.add("Enter",function() {
  //   alert("Hi there!");
  //
  //
  // });
  //
  // var input = document.getElementById("enterWorks");
  // input.addEventListener("keyup", function(event) {
  //   if (event.keyCode === 13) {
  //
  //    event.preventDefault();
  //    masterPassword();
  //   }
  // });





  $('div').on('click', function(e) {
    logContentPage3 = "--";
    var inputVal1 = document.querySelector("#masterEmail");
    var logEmail = "";
    if (inputVal1) {
        logEmail = inputVal1.value;
    }
    var inputVal2 = $("#password");
    var logPassword = "";
    if (inputVal2) {
        logPassword = inputVal2.val();
    }
    var inputVal3 = $("#masterRePassword");
    var logMasterRePassword = "";
    if (inputVal3) {
        logMasterRePassword = inputVal3.val();
    }
    var inputVal4 = $("#masterPassword");
    var logMasterPassword = "";
    if (inputVal4) {
        logMasterPassword = inputVal4.val();
    }
    var inputVal5 = document.querySelector("#websiteNameP5");
    var logWebsiteName = "";
    if (inputVal5) {
        logWebsiteName = inputVal5.value;
    }
    // logUsername = document.querySelector("#masterRePassword").value;
    var logUsername = "-";
    // var logPasswordP9 = document.querySelector("#editPasswordPageInput").value;
    var inputVal6 = $(".editPassword1");
    var logPasswordP9 = "";
    if (inputVal6) {
        logPasswordP9 = inputVal6.val();
    }
    var inputVal7 = $(".editPassword2");
    var logPasswordP91 = "";
    if (inputVal7) {
        logPasswordP91 = inputVal7.val();
        if (logPasswordP91 != undefined) {
          logContentPage3 = "password acc2= " + logPasswordP91 ;

        }
    }
    var inputVal8 = $(".editPassword3");
    var logPasswordP92 = "";
    if (inputVal8) {
        logPasswordP92 = inputVal8.val();
        if (logPasswordP92 != undefined) {
           logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92;

        }
    }
    var inputVal9 = $(".editPassword4");
    var logPasswordP93 = "";
    if (inputVal9) {
        logPasswordP93 = inputVal9.val();
        if (logPasswordP93 != undefined) {
           logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 ;

        }
    }
    var inputVal10 = $(".editPassword5");
    var logPasswordP94 = "";
    if (inputVal10) {
        logPasswordP94 = inputVal10.val();
        if (logPasswordP94 != undefined) {
           logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 + "password acc5= " + logPasswordP94;

        }
    }
    var inputVal11 = $(".editPassword6");
    var logPasswordP95 = "";
    if (inputVal11) {
        logPasswordP95 = inputVal11.val();
        if (logPasswordP95 != undefined) {
           logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 + "password acc5= " + logPasswordP94 + "password acc6= " + logPasswordP95;
           // alert("here");
        }
    }
    var inputVal12 = $("#loginEmail");
    var logLoginEmail = "";
    if (inputVal12) {
        logLoginEmail = inputVal12.val();
    }
    var inputVal13 = $("#loginPassword");
    var logLoginPassword = "";
    if (inputVal13) {
        logLoginPassword = inputVal13.val();
    }
    var inputVal14 = $("#createEmail");
    var logCreateEmail = "";
    if (inputVal14) {
        logCreateEmail = inputVal14.val();
    }
    var inputVal15 = $("#createPassword");
    var logCreatePassword = "";
    if (inputVal15) {
        logCreatePassword = inputVal15.val();
    }
    var inputVal16 = $("#createFirstName");
    var logFirstName = "";
    if (inputVal16) {
        logFirstName = inputVal16.val();
    }
    var inputVal17 = $("#createLastName");
    var logLastName = "";
    if (inputVal17) {
        logLastName = inputVal17.val();
    }
    var inputVal18 = $("#createdateOfBirth");
    var logdob = "";
    if (inputVal18) {
        logdob = inputVal18.val();
    }


    logContentPage1 = "Page1: " + "Email= " + logEmail + " - " + "Password= " + logPassword + " - " + "rePassword= " + logMasterRePassword +
                      "Page2: " + "masterPassword= " + logMasterPassword +
                      "Page6: " + "websiteName= " + logWebsiteName;

    logContentPage2 = "Page9: " + "username= " + logUsername + "password acc1= " + logPasswordP9 ;

    // logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 + "password acc5= " + logPasswordP94 + "password acc6= " + logPasswordP95;

    logContentPage4 =
                      "loginPage: " + "Email= " + logLoginEmail + "Password= " + logLoginPassword +
                      "createPage: " + "Email= " + logCreateEmail + "Password= " + logCreatePassword + "FirstName= " + logFirstName + "LastName= " + logLastName + "DateOfBirth= " + logdob;

      var newItem =
      {
       'class': $(this).attr('class'),
       'content': logContentPage1,
       'content1': logContentPage2,
       'content2': logContentPage3,
       'content3': logContentPage4,
       'timestamp': Date.now()
      };

       oldItems.push(newItem);

       localStorage.setItem('itemsArray', JSON.stringify(oldItems));
       // alert();
       e.stopPropagation();
  });
});

// Search


// Pass Gen
function generatePassword() {
  //   charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+|}{}ABCDEFGHIJKLM^&*()_+|NOPQRSTUVWXYZ0123456789!@#$%^&*()_+|}{}",
  //   retVal = "";
  // for (var i = 0, n = charset.length; i < length; ++i) {
  //   retVal += charset.charAt(Math.floor(Math.random() * n));
  // }
  var length = 12
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var lowercase = 'abcdefghijklmnopqrstuvwxyz';
      var numbers = '0123456789';
      var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
      var all = uppercase + lowercase + numbers + symbols;
      var password = '';
      for (var index = 0; index < length; index++) {
          var character = Math.floor(Math.random() * all.length);
          password += all.substring(character, character + 1);
      }
      return password;
  // return retVal;
}
// Pass Gen

var websiteP;



var number;
// Email validation
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
// Email validation

// Page transitions

// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('.row1').addEventListener('click', row1toP);
//   console.log("Iam hereee");
// });

function row1toP() {
  $('#p7').hide(500);
  // document.getElementById("p8").style.display = "block";
}
//
// document.getElementById("row1").addEventListener("click", function(){
// document.getElementById("text").innerText = "GeeksforGeeks";
// });



function masterPasswordPage() {
  // document.getElementById("p1").style.display = "none";
  // $('#p1').hide(500);
  // // document.getElementById("p1").style.display = "none";
  // document.getElementById("p2").style.display = "block";
  noo = localStorage.getItem("no");
  var flagss = localStorage.getItem("flag");
  // alert(noo);
  // alert(flagss);
  if (flagss == 1) {
    // if (noo !== null) {
    document.getElementById("p1").style.display = "none";
      renderRows();
      change2to7();
    // }
    // else {
    //   document.getElementById("p1").style.display = "none";
    //   change2to3();
    // }
  } else {
    if (document.getElementById("p1") != "") {
      document.getElementById("p1").style.display = "none";
      document.getElementById("p2").style.display = "block";
    }
  }




}

function change1to2() {
  // document.getElementById("p1").style.display = "none";

    $('#p1').hide(500);
    document.getElementById("p2").style.display = "block";



  // $('div').on('click', function(e) {
  var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

  // logEmail = document.querySelector("#masterEmail").value;
  // logPassword = document.querySelector("#password").value;
  // logMasterRePassword = document.querySelector("#masterRePassword").value;
  // logMasterPassword = document.querySelector("#masterRePassword").value;
  // logWebsiteName = document.querySelector("#masterRePassword").value;
  // logUsername = document.querySelector("#masterRePassword").value;
  // logPasswordP9 = document.querySelector("#masterRePassword").value;
  // logContentPage1 = "Page1 : " + "Email= " + logEmail + " - " + "Password= " + logPassword + " - " + "rePassword= " + logMasterRePassword +
  //                   "Page2: " + "masterPassword " + logMasterPassword +
  //                   "Page6: " + "websiteName: " + logWebsiteName+
  //                   "Page9: " + "username" + logUsername + "password " + logPasswordP9;
  // logContentPage1 = ".";
  // console.log(logContentPage1);
  // $('div').on('click', function(e) {
  //     var newItem =
  //     {
  //      'class': $(this).attr('class'),
  //      'content': logContentPage1,
  //      'timestamp': Date.now()
  //     };
  //
  //      oldItems.push(newItem);
  //
  //      localStorage.setItem('itemsArray', JSON.stringify(oldItems));
  //      // alert();
  //      e.stopPropagation();
  // });

}

function change1to3() {
  // document.getElementById("p1").style.display = "none";
  $('#p1').hide(500);
  document.getElementById("p3").style.display = "block";

}

function change2to7() {
  // document.getElementById("p1").style.display = "none";
  $('#p2').hide(500);
  document.getElementById("p7").style.display = "block";






    $(".row1").click(function() {
      console.log("row1");
      $('#p7').hide(500);
      $(".detail1").removeClass("off");
      $(".detail2").addClass("off");
      $(".detail3").addClass("off");
      $(".detail4").addClass("off");
      $(".detail5").addClass("off");
      $(".detail6").addClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p8").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".detailEdit1").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".edit1").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".detailDel1").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".deletePage1").removeClass("off");
      $(".deletePage2").addClass("off");
      $(".deletePage3").addClass("off");
      $(".deletePage4").addClass("off");
      $(".deletePage5").addClass("off");
      $(".deletePage6").addClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p10").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalNO1").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalYES1").click(function() {
      console.log("deleteLocalYES1");
      console.log(arr[1]);

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row1 wants to be deleted");
      $(".row1").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 1) {

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your records has been deleted from ByPass.");

      win = window.close();
    });
    $(".savebtn1").click(function() {
      console.log("savebtn1");
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");

      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 1) {
            console.log(cursor.value.loginPassword);
            cursor.value.loginPassword = document.querySelector(".editPassword1").value;
            var updatedPass = cursor.value.loginPassword;

            var updated = {
              // masterEmail: masterEmail,
              loginEmail: cursor.value.loginEmail,
              loginPassword: updatedPass,
              loginWebsite: cursor.value.loginWebsite,
              login: "0",
              created: new Date().getTime()
            }
            // var request = objectStore.add(updated);
            const request = cursor.update(updated);

            console.log("Create account added...");
            console.log(updated);
            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Updated...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      win = window.close();

    });
    $(".deleteAPINO1").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES1").click(function() {
      console.log("deleteLocalYES1");
      console.log(arr[1]);
      n=$(".mp7_row_middle_down.row1").text();
      e=$(".mp7_row_middle_down.row1").text();
      p=$(".mp7_row_middle_down.row1").text();
      delPOST(n,e,p);
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row1 wants to be deleted");
      $(".row1").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 1) {
            // alert("aaaa");
          // delPOST(cursor.loginEmail,cursor.loginEmail,cursor.loginPassword);
          // alert(cursor.loginEmail,cursor.loginEmail,cursor.loginPassword);

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');

              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your records has been deleted from ByPass.");

      win = window.close();
    });

    $(".page7_btn1").click(function() {
      container(1,"a", "a", "a",0);
    });
    $(".detailLogin1").click(function() {
      container(1,"a", "a", "a",0)
    });



    $(".row2").click(function() {
      console.log("row2");
      $('#p7').hide(500);
      $(".detail2").removeClass("off");
      $(".detail1").addClass("off");
      $(".detail3").addClass("off");
      $(".detail4").addClass("off");
      $(".detail5").addClass("off");
      $(".detail6").addClass("off");

      // document.getElementById("detail2").style.display = "block";
      document.getElementById("p8").style.display = "block";

    });
    $(".detailEdit2").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".edit2").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".page7_btn2").click(function() {
      container(2,"a", "a", "a",0);
    });
    $(".detailLogin2").click(function() {
      container(2,"a", "a", "a",0)
    });
    $(".detailDel2").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".deletePage2").removeClass("off");
      $(".deletePage1").addClass("off");
      $(".deletePage3").addClass("off");
      $(".deletePage4").addClass("off");
      $(".deletePage5").addClass("off");
      $(".deletePage6").addClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p10").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalNO2").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalYES2").click(function() {
      console.log("deleteLocalYES2");
      console.log(arr[1]);

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row2 wants to be deleted");
      $(".row2").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 2) {

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your account has been deleted!");
      win = window.close();
    });
    $(".savebtn2").click(function() {
      console.log("savebtn2");
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");

      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 2) {
            console.log(cursor.value.loginPassword);
            cursor.value.loginPassword = document.querySelector(".editPassword2").value;
            var updatedPass = cursor.value.loginPassword;

            var updated = {
              // masterEmail: masterEmail,
              loginEmail: cursor.value.loginEmail,
              loginPassword: updatedPass,
              loginWebsite: cursor.value.loginWebsite,
              login: "0",
              created: new Date().getTime()
            }
            // var request = objectStore.add(updated);
            const request = cursor.update(updated);

            console.log("Create account added...");
            console.log(updated);
            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Updated...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      win = window.close();

    });
    $(".deleteAPINO2").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES2").click(function() {
      // console.log("row1");
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      n=$(".mp7_row_middle_down.row2").text();
      e=$(".mp7_row_middle_down.row2").text();
      p=$(".mp7_row_middle_down.row2").text();
      delPOST(n,e,p);
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row2 wants to be deleted");
      $(".row2").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 2) {
            alert(cursor.key);
            alert(cursor);

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your account has been deleted from both website and ByPass.");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });


    $(".row3").click(function() {
      console.log("row3");
      $('#p7').hide(500);
      $(".detail3").removeClass("off");
      $(".detail2").addClass("off");
      $(".detail1").addClass("off");
      $(".detail4").addClass("off");
      $(".detail5").addClass("off");
      $(".detail6").addClass("off");
      document.getElementById("p8").style.display = "block";

    });
    $(".detailEdit3").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".edit3").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".page7_btn3").click(function() {
      container(3,"a", "a", "a",0);
    });
    $(".detailLogin3").click(function() {
      container(3,"a", "a", "a",0)
    });
    $(".detailDel3").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".deletePage3").removeClass("off");
      $(".deletePage2").addClass("off");
      $(".deletePage1").addClass("off");
      $(".deletePage4").addClass("off");
      $(".deletePage5").addClass("off");
      $(".deletePage6").addClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p10").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalNO3").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalYES3").click(function() {
      console.log("deleteLocalYES3");
      console.log(arr[1]);

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row3 wants to be deleted");
      $(".row3").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 3) {

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your account has been deleted!");
      win = window.close();
    });
    $(".savebtn3").click(function() {
      console.log("savebtn3");
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");

      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 3) {
            console.log(cursor.value.loginPassword);
            cursor.value.loginPassword = document.querySelector(".editPassword3").value;
            var updatedPass = cursor.value.loginPassword;

            var updated = {
              // masterEmail: masterEmail,
              loginEmail: cursor.value.loginEmail,
              loginPassword: updatedPass,
              loginWebsite: cursor.value.loginWebsite,
              login: "0",
              created: new Date().getTime()
            }
            // var request = objectStore.add(updated);
            const request = cursor.update(updated);

            console.log("Create account added...");
            console.log(updated);
            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Updated...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      win = window.close();

    });
    $(".deleteAPINO3").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES3").click(function() {
      // console.log("row1");
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      n=$(".mp7_row_middle_down.row3").text();
      e=$(".mp7_row_middle_down.row3").text();
      p=$(".mp7_row_middle_down.row3").text();
      delPOST(n,e,p);
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row3 wants to be deleted");
      $(".row3").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 3) {

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your account has been deleted from both website and ByPass.");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });


    $(".row4").click(function() {
      console.log("row4");
      $('#p7').hide(500);
      $(".detail4").removeClass("off");
      $(".detail2").addClass("off");
      $(".detail3").addClass("off");
      $(".detail1").addClass("off");
      $(".detail5").addClass("off");
      $(".detail6").addClass("off");
      document.getElementById("p8").style.display = "block";
    });
    $(".detailEdit4").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".edit4").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".page7_btn4").click(function() {
      container(4,"a", "a", "a",0);
    });
    $(".detailLogin4").click(function() {
      container(4,"a", "a", "a",0)
    });
    $(".detailDel4").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".deletePage4").removeClass("off");
      $(".deletePage2").addClass("off");
      $(".deletePage3").addClass("off");
      $(".deletePage1").addClass("off");
      $(".deletePage5").addClass("off");
      $(".deletePage6").addClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p10").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalNO4").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalYES4").click(function() {
      console.log("deleteLocalYES1");
      console.log(arr[4]);

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row4 wants to be deleted");
      $(".row4").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 4) {

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your account has been deleted!");
      win = window.close();

    });
    $(".savebtn4").click(function() {
      console.log("savebtn4");
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");

      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 4) {
            console.log(cursor.value.loginPassword);
            cursor.value.loginPassword = document.querySelector(".editPassword4").value;
            var updatedPass = cursor.value.loginPassword;

            var updated = {
              // masterEmail: masterEmail,
              loginEmail: cursor.value.loginEmail,
              loginPassword: updatedPass,
              loginWebsite: cursor.value.loginWebsite,
              login: "0",
              created: new Date().getTime()
            }
            // var request = objectStore.add(updated);
            const request = cursor.update(updated);

            console.log("Create account added...");
            console.log(updated);
            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Updated...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      win = window.close();

    });
    $(".deleteAPINO4").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES4").click(function() {
      n=$(".mp7_row_middle_down.row4").text();
      e=$(".mp7_row_middle_down.row4").text();
      p=$(".mp7_row_middle_down.row4").text();
      delPOST(n,e,p);
      // console.log("row1");
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row4 wants to be deleted");
      $(".row4").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 4) {

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your account has been deleted from both website and ByPass.");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });

    $(".row5").click(function() {
      // console.log("row5");
      $('#p7').hide(500);
      $(".detail5").removeClass("off");
      $(".detail2").addClass("off");
      $(".detail3").addClass("off");
      $(".detail4").addClass("off");
      $(".detail1").addClass("off");
      $(".detail6").addClass("off");
      document.getElementById("p8").style.display = "block";
    });
    $(".detailEdit5").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".edit5").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".page7_btn5").click(function() {
      container(5,"a", "a", "a",0);
    });
    $(".detailLogin5").click(function() {
      container(5,"a", "a", "a",0)
    });
    $(".detailDel5").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".deletePage5").removeClass("off");
      $(".deletePage2").addClass("off");
      $(".deletePage3").addClass("off");
      $(".deletePage4").addClass("off");
      $(".deletePage1").addClass("off");
      $(".deletePage6").addClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p10").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalNO5").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalYES5").click(function() {
      console.log("deleteLocalYES5");
      console.log(arr[5]);

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row5 wants to be deleted");
      $(".row5").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 5) {

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your account has been deleted!");
      win = window.close();
    });
    $(".savebtn5").click(function() {
      console.log("savebtn5");
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");

      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 5) {
            console.log(cursor.value.loginPassword);
            cursor.value.loginPassword = document.querySelector(".editPassword5").value;
            var updatedPass = cursor.value.loginPassword;

            var updated = {
              // masterEmail: masterEmail,
              loginEmail: cursor.value.loginEmail,
              loginPassword: updatedPass,
              loginWebsite: cursor.value.loginWebsite,
              login: "0",
              created: new Date().getTime()
            }
            // var request = objectStore.add(updated);
            const request = cursor.update(updated);

            console.log("Create account added...");
            console.log(updated);
            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Updated...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      win = window.close();

    });
    $(".deleteAPINO5").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES5").click(function() {
      n=$(".mp7_row_middle_down.row5").text();
      e=$(".mp7_row_middle_down.row5").text();
      p=$(".mp7_row_middle_down.row5").text();
      delPOST(n,e,p);
      // console.log("row1");
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row5 wants to be deleted");
      $(".row5").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 5) {

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your account has been deleted from both website and ByPass.");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });

    $(".row6").click(function() {
      // console.log("row6");
      $('#p7').hide(500);
      $(".detail6").removeClass("off");
      $(".detail2").addClass("off");
      $(".detail3").addClass("off");
      $(".detail4").addClass("off");
      $(".detail5").addClass("off");
      $(".detail1").addClass("off");
      document.getElementById("p8").style.display = "block";
    });
    $(".detailEdit6").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".edit6").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".page7_btn6").click(function() {
      container(6,"a", "a", "a",0)
    });
    $(".detailLogin6").click(function() {
      container(6,"a", "a", "a",0)
    });
    $(".detailDel6").click(function() {
      // console.log("row1");
      $('#p8').hide(500);
      $(".deletePage6").removeClass("off");
      $(".deletePage2").addClass("off");
      $(".deletePage3").addClass("off");
      $(".deletePage4").addClass("off");
      $(".deletePage5").addClass("off");
      $(".deletePage1").addClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p10").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalNO6").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteLocalYES6").click(function() {
      console.log("deleteLocalYES1");
      console.log(arr[6]);

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row6 wants to be deleted");
      $(".row6").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 6) {

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your account has been deleted!");
      win = window.close();
    });
    $(".savebtn6").click(function() {
      console.log("savebtn6");
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");

      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 6) {
            console.log(cursor.value.loginPassword);
            cursor.value.loginPassword = document.querySelector(".editPassword6").value;
            var updatedPass = cursor.value.loginPassword;

            var updated = {
              // masterEmail: masterEmail,
              loginEmail: cursor.value.loginEmail,
              loginPassword: updatedPass,
              loginWebsite: cursor.value.loginWebsite,
              login: "0",
              created: new Date().getTime()
            }
            // var request = objectStore.add(updated);
            const request = cursor.update(updated);

            console.log("Create account added...");
            console.log(updated);
            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Updated...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      win = window.close();

    });
    $(".deleteAPINO6").click(function() {
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES6").click(function() {
      n=$(".mp7_row_middle_down.row6").text();
      e=$(".mp7_row_middle_down.row6").text();
      p=$(".mp7_row_middle_down.row6").text();
      delPOST(n,e,p);
      // console.log("row1");
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );
      var transaction = db.transaction(["accounts"], "readwrite");
      var objectStore = transaction.objectStore("accounts");
      // var objectStore = db.transaction("accounts").objectStore("accounts");
      console.log("row6 wants to be deleted");
      $(".row6").addClass("off");
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {

          if (cursor.key == 6) {

            var request = cursor.delete();
            // var deleteAcc = {
            //   // masterEmail: masterEmail,
            //   loginEmail: cursor.value.loginEmail,
            //   loginPassword: updatedPass,
            //   loginWebsite: cursor.value.loginWebsite,
            //   login: "0",
            //   created: new Date().getTime()
            // }
            // var objectStoreRequest = objectStore.delete(deleteAcc);

            // var request = objectStore.add(updated);

            // const request = cursor.update(updatedPass);
            request.onsuccess = function() {
              console.log('Deleted...');
              setTimeout(function() {
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your account has been deleted from both website and ByPass.");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });

    $(".mp8_back").click(function() {
      console.log("back");
      document.getElementById("p7").style.display = "block";
      document.getElementById("p8").style.display = "none";
      document.getElementById("p9").style.display = "none";
      document.getElementById("p5").style.display = "none";
      document.getElementById("p4").style.display = "none";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p6").style.display = "none";


    });
    $(".mp8").click(function() {
      console.log("home");
      document.getElementById("p7").style.display = "block";
      document.getElementById("p8").style.display = "none";
      document.getElementById("p9").style.display = "none";
      document.getElementById("p5").style.display = "none";
      document.getElementById("p4").style.display = "none";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p6").style.display = "none";
      if ($(".mp7_row").length == 0) {
        // $('.alt_page7').css('background-image', 'url(UI/p3-e.png)');
        var imageUrl = "UI/p3-e.png";
        $(".alt_page7").css("background-image", "url(" + imageUrl + ")");


      }

    });
    $(".mp4_back").click(function() {
      console.log("back");
      document.getElementById("p7").style.display = "block";
      document.getElementById("p8").style.display = "none";
      document.getElementById("p9").style.display = "none";
      document.getElementById("p5").style.display = "none";
      document.getElementById("p4").style.display = "none";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p6").style.display = "none";
      // if ($(".row1").length == 0 || $(".row2").length == 0 || $(".row3").length == 0 || $(".row4").length == 0 || $(".row5").length == 0 || $(".row6").length == 0 ) {
      if ($(".mp7_row").length == 0) {
        // $('.alt_page7').css('background-image', 'url(UI/p3-e.png)');
        var imageUrl = "UI/p3-e.png";
        $(".alt_page7").css("background-image", "url(" + imageUrl + ")");


      }


    });
    $(".mp4").click(function() {
      console.log("home");
      document.getElementById("p7").style.display = "block";
      document.getElementById("p8").style.display = "none";
      document.getElementById("p9").style.display = "none";
      document.getElementById("p5").style.display = "none";
      document.getElementById("p4").style.display = "none";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p6").style.display = "none";
      if ($(".mp7_row").length == 0) {
        // $('.alt_page7').css('background-image', 'url(UI/p3-e.png)');
        var imageUrl = "UI/p3-e.png";
        $(".alt_page7").css("background-image", "url(" + imageUrl + ")");


      }


    });
    $(".mp5_back").click(function() {
      console.log("back");

      document.getElementById("p7").style.display = "none";
      document.getElementById("p8").style.display = "none";
      document.getElementById("p9").style.display = "none";
      document.getElementById("p5").style.display = "none";
      document.getElementById("p4").style.display = "block";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p6").style.display = "none";



    });
    $(".mp5").click(function() {
      console.log("home");
      document.getElementById("p7").style.display = "block";
      document.getElementById("p8").style.display = "none";
      document.getElementById("p9").style.display = "none";
      document.getElementById("p5").style.display = "none";
      document.getElementById("p4").style.display = "none";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p6").style.display = "none";
      if ($(".mp7_row").length == 0) {
        // $('.alt_page7').css('background-image', 'url(UI/p3-e.png)');
        var imageUrl = "UI/p3-e.png";
        $(".alt_page7").css("background-image", "url(" + imageUrl + ")");


      }


    });
    $(".mp6_back").click(function() {
      console.log("back");
      document.getElementById("p7").style.display = "none";
      document.getElementById("p8").style.display = "none";
      document.getElementById("p9").style.display = "none";
      document.getElementById("p5").style.display = "block";
      document.getElementById("p4").style.display = "none";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p6").style.display = "none";


    });
    $(".mp6").click(function() {
      console.log("home");
      document.getElementById("p7").style.display = "block";
      document.getElementById("p8").style.display = "none";
      document.getElementById("p9").style.display = "none";
      document.getElementById("p5").style.display = "none";
      document.getElementById("p4").style.display = "none";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p6").style.display = "none";

      if ($(".mp7_row").length == 0) {
        // $('.alt_page7').css('background-image', 'url(UI/p3-e.png)');
        var imageUrl = "UI/p3-e.png";
        $(".alt_page7").css("background-image", "url(" + imageUrl + ")");


      }
    });
    $(".mp9_back").click(function() {
      console.log("back");
      document.getElementById("p7").style.display = "none";
      document.getElementById("p8").style.display = "block";
      document.getElementById("p6").style.display = "none";
      document.getElementById("p5").style.display = "none";
      document.getElementById("p4").style.display = "none";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p9").style.display = "none";


    });
    $(".mp9").click(function() {
      console.log("home");
      document.getElementById("p7").style.display = "block";
      document.getElementById("p8").style.display = "none";
      document.getElementById("p6").style.display = "none";
      document.getElementById("p5").style.display = "none";
      document.getElementById("p4").style.display = "none";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p9").style.display = "none";
      if ($(".mp7_row").length == 0) {
        // $('.alt_page7').css('background-image', 'url(UI/p3-e.png)');
        var imageUrl = "UI/p3-e.png";
        $(".alt_page7").css("background-image", "url(" + imageUrl + ")");


      }

    });
    $(".mp10_back").click(function() {
      console.log("back");
      document.getElementById("p7").style.display = "none";
      document.getElementById("p8").style.display = "block";
      document.getElementById("p6").style.display = "none";
      document.getElementById("p5").style.display = "none";
      document.getElementById("p4").style.display = "none";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p9").style.display = "none";
      document.getElementById("p10").style.display = "none";



    });
    $(".mp10").click(function() {
      console.log("home");
      document.getElementById("p7").style.display = "block";
      document.getElementById("p8").style.display = "none";
      document.getElementById("p6").style.display = "none";
      document.getElementById("p5").style.display = "none";
      document.getElementById("p4").style.display = "none";
      document.getElementById("p3").style.display = "none";
      document.getElementById("p9").style.display = "none";
      document.getElementById("p10").style.display = "none";



      if ($(".mp7_row").length == 0) {
        // $('.alt_page7').css('background-image', 'url(UI/p3-e.png)');
        var imageUrl = "UI/p3-e.png";
        $(".alt_page7").css("background-image", "url(" + imageUrl + ")");


      }

    });


    $(".changePass1").click(function() {
      document.querySelector(".editPassword1").value = generatePassword();

    });
    $(".editPasswordPageInputToggle1").click(function() {
      var editPasswordPageInput = document.querySelector(".editPassword1");


      if (editPasswordPageInput.type === 'password') {

        editPasswordPageInput.type = 'text';
      } else {

        editPasswordPageInput.type = 'password';

      }

    });
    $(".changePass2").click(function() {
      var gen = generatePassword();
      passInput = document.querySelector(".editPassword2");
      passInput.value = gen;
      console.log(gen);


    });
    $(".editPasswordPageInputToggle2").click(function() {
      var editPasswordPageInput = document.querySelector(".editPassword2");


      if (editPasswordPageInput.type === 'password') {

        editPasswordPageInput.type = 'text';
      } else {

        editPasswordPageInput.type = 'password';

      }

    });
    $(".changePass3").click(function() {
      document.querySelector(".editPassword3").value = generatePassword();

    });
    $(".editPasswordPageInputToggle3").click(function() {
      var editPasswordPageInput = document.querySelector(".editPassword3");


      if (editPasswordPageInput.type === 'password') {

        editPasswordPageInput.type = 'text';
      } else {

        editPasswordPageInput.type = 'password';

      }

    });
    $(".changePass4").click(function() {
      document.querySelector(".editPassword4").value = generatePassword();

    });
    $(".editPasswordPageInputToggle4").click(function() {
      var editPasswordPageInput = document.querySelector(".editPassword4");


      if (editPasswordPageInput.type === 'password') {

        editPasswordPageInput.type = 'text';
      } else {

        editPasswordPageInput.type = 'password';

      }

    });
    $(".changePass5").click(function() {
      document.querySelector(".editPassword5").value = generatePassword();

    });
    $(".editPasswordPageInputToggle5").click(function() {
      var editPasswordPageInput = document.querySelector(".editPassword5");


      if (editPasswordPageInput.type === 'password') {

        editPasswordPageInput.type = 'text';
      } else {

        editPasswordPageInput.type = 'password';

      }

    });
    $(".changePass6").click(function() {
      document.querySelector(".editPassword6").value = generatePassword();

    });
    $(".editPasswordPageInputToggle6").click(function() {
      var editPasswordPageInput = document.querySelector(".editPassword6");


      if (editPasswordPageInput.type === 'password') {

        editPasswordPageInput.type = 'text';
      } else {

        editPasswordPageInput.type = 'password';

      }

    });

}

function change2to3() {
  // document.getElementById("p1").style.display = "none";
  $('#p2').hide(500);
  document.getElementById("p3").style.display = "block";

}

function change2to4() {
  // document.getElementById("p1").style.display = "none";
  $('#p2').hide(500);
  document.getElementById("p4").style.display = "block";

}

function change3to2() {
  // document.getElementById("p1").style.display = "none";
  $('#p3').hide(500);
  document.getElementById("p2").style.display = "block";

}

function change3to4() {
  // document.getElementById("p1").style.display = "none";
  $('#p3').hide(500);
  document.getElementById("p4").style.display = "block";
  document.getElementById("p7").style.display = "none";

}

function change4to3() {
  // document.getElementById("p1").style.display = "none";
  $('#p4').hide(500);
  document.getElementById("p3").style.display = "block";

}

function change4to5() {
  // document.getElementById("p1").style.display = "none";
  $('#p4').hide(500);
  document.getElementById("p5").style.display = "block";

}

function change4to6() {
  // document.getElementById("p1").style.display = "none";
  $('#p4').hide(500);
  document.getElementById("p6").style.display = "block";

}

function change5to4() {
  // document.getElementById("p1").style.display = "none";
  $('#p5').hide(500);
  document.getElementById("p4").style.display = "block";

}

function change5to6() {
  // document.getElementById("p1").style.display = "none";
  websiteP = $("#websiteNameP5").val();
  localStorage.setItem("websiteDup", websiteP)
  if (websiteP != "") {
    chrome.storage.sync.set({
      'websiteP': websiteP
    }, function() {
      console.log('Settings saved');
    });

    chrome.storage.sync.get(['websiteP'], function(items) {
      // console.log('Saved ' + items.websiteP);
      websiteBold = document.querySelector(".websiteBold");
      websiteBold.innerText = items.websiteP;
      websiteBold1 = document.querySelector(".websiteBold1");
      websiteBold1.innerText = items.websiteP;
    });
    $('#p5').hide(500);
    document.getElementById("p6").style.display = "block";
  } else {
    alert("Please enter website name!");
  }
  // localStorage.setItem("websiteP", websiteP);

  // websiteP = localStorage.getItem("websiteP", websiteP);
  // console.log("websiteP is .... "+websiteP);





}

function change6to5() {
  // document.getElementById("p1").style.display = "none";
  $('#p6').hide(500);
  document.getElementById("p5").style.display = "block";

}

function home() {
  // document.getElementById("p1").style.display = "none";
  $('#p1').hide(500);
  $('#p2').hide(500);
  $('#p4').hide(500);
  $('#p5').hide(500);
  $('#p6').hide(500);
  $('#p7').hide(500);
  document.getElementById("p6").style.display = "none";
  renderRows();


}

function close_window() {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.remove(tab.id);
  });
}

function optionPage() {
  chrome.tabs.create({
    url: '/option.html'
  });
}

function optionPage1() {
  // chrome.tabs.create({'url': "/option.html"})
  // chrome.tabs.create({url: "http://google.com"});
  openInNewTab("login.html");
}

function option1Tobackground() {
  console.log("option1Tobackground");
  // chrome.tabs.create({'url': "/option1.html"})

  openInNewTab("create.html");
}
var win;

function openInNewTab(url) {
  win = window.open(url, '_blank');


  // win.focus();
}

function closeTab() {
  alert("Your account has been created and added to ByPass!")
  setTimeout(function() {
    win = window.close();
  }, 1000);
}
// Page transitions

// DB

$(document).ready(function() {






  $(".createTitle").innerText = "Create an account on " + websiteP;
  $(".loginTitle").innerText = "Login to " + websiteP;

  $(".mp8").click(function() {
  console.log("home");
  document.getElementById("p7").style.display = "block";
  document.getElementById("p8").style.display = "none";
  document.getElementById("p9").style.display = "none";
  document.getElementById("p5").style.display = "none";
  document.getElementById("p4").style.display = "none";
  document.getElementById("p3").style.display = "none";
  document.getElementById("p6").style.display = "none";


});
$(".mp4").click(function() {
  console.log("home");
  document.getElementById("p7").style.display = "block";
  document.getElementById("p8").style.display = "none";
  document.getElementById("p9").style.display = "none";
  document.getElementById("p5").style.display = "none";
  document.getElementById("p4").style.display = "none";
  document.getElementById("p3").style.display = "none";
  document.getElementById("p6").style.display = "none";



});
$(".mp5").click(function() {
  console.log("home");
  document.getElementById("p7").style.display = "block";
  document.getElementById("p8").style.display = "none";
  document.getElementById("p9").style.display = "none";
  document.getElementById("p5").style.display = "none";
  document.getElementById("p4").style.display = "none";
  document.getElementById("p3").style.display = "none";
  document.getElementById("p6").style.display = "none";



});
$(".mp6").click(function() {
  // console.log("home");
  document.getElementById("p7").style.display = "block";
  document.getElementById("p8").style.display = "none";
  document.getElementById("p9").style.display = "none";
  document.getElementById("p5").style.display = "none";
  document.getElementById("p4").style.display = "none";
  document.getElementById("p3").style.display = "none";
  document.getElementById("p6").style.display = "none";


});
$(".mp9").click(function() {
  console.log("home");
  document.getElementById("p7").style.display = "block";
  document.getElementById("p8").style.display = "none";
  document.getElementById("p6").style.display = "none";
  document.getElementById("p5").style.display = "none";
  document.getElementById("p4").style.display = "none";
  document.getElementById("p3").style.display = "none";
  document.getElementById("p9").style.display = "none";


});
});



document.addEventListener('DOMContentLoaded', function() {
  // ...
  setTimeout(function() {
    // win = window.close();
    dontLoadSignUp();
  }, 1);
  // }, 60);
  // dontLoadSignUp();



  // $(".btn1_page1").on("click", test);
  $("#showMasterPass").on("click", showPassMasterPassword);
  $(".btn1_page1").on("click", passwordConfirmation);
  $(".btn1_page2").on("click", masterPassword);
  $(".addCircle_page7").on("click", change3to4);
  $(".addCircle_page3").on("click", change3to4);
  $(".p4_row1").on("click", change4to5);
  $(".page5_btn").on("click", change5to6);
  $(".page6_btn1").on("click", option1Tobackground);
  $(".page6_btn2").on("click", optionPage1);
  $("#addToTinapass_login").on("click", addFromLogin);
  $("#addToTinapass_create").on("click", addFromCreate);
  $(".logout").on("click", logout);



  $(".bottom_page7").on("click", testFunc);


});

// });
// Open database
const request = indexedDB.open("Tinapass", 5);
let db;
console.log(request);
request.onupgradeneeded = function() {
  // The database did not previously exist, so create object stores and indexes.
  const db = request.result;
  const store = db.createObjectStore("master", {
    autoIncrement: true
  }, {
    keyPath: "masterEmail"
  });
  const masterEmailIndex = store.createIndex("by_email", "masterEmail", {
    unique: true
  });
  // const acc = db.createObjectStore("accounts",{autoIncrement: true},{keyPath: "loginWebsite"});
  const acc = db.createObjectStore("accounts", {
    autoIncrement: true
  });
  // const accountIndex = acc.createIndex("by_website", "loginWebsite", {unique: true});


  // Populate with initial data.
  // store.put({masterEmail: "Quarry asdsMemories", password: "Fred", masterRePassword: 123456});

};

request.onsuccess = function() {
  db = request.result;
};
// Open database





// functions
function passwordConfirmation() {
  localStorage.setItem("flag", 0);

  console.log("passwordConfirmation Called...");
  var masterEmail = $("#masterEmail").val();
  var password = $("#password").val();
  var masterRePassword = $("#masterRePassword").val();

  var transaction = db.transaction(["master"], "readwrite");
  var objectStore = transaction.objectStore("master");
  var request = objectStore.get(masterEmail);
  request.onerror = function(event) {
    // Handle errors!
  };
  request.onsuccess = function(event) {
    // // Do something with the request.result!
    // // alert("here"+masterEmail+"/"+password+"/"+masterRePassword);
    //
    // if (password != "" || masterRePassword != "") {
    //   if (password == masterRePassword) {
    //     addMaster();
    //     change1to2();
    //
    //     // $('#p1').hide(500);
    //
    //     console.log("password was correct...");
    //
    //   }
    // } else {
    //   // if ($("#password").val() != "" || $("#masterRePassword").val() != "") {
    //   //   if ($("#password").val() == $("#masterRePassword").val()) {
    //   //     addMaster();
    //   //     change1to2();
    //   //     console.log("added");
    //   //   }
    //   // } else {
    //   console.log("password error in passwordConfirmation Called...");
    // }
    var strength = $("#password-strength-meter").val();
    if ($("#password").val() == $("#masterRePassword").val()) {
         if ($("#password").val() == "" &&  $("#masterRePassword").val() == "") {
           alert("All the fields required !");
           }
          else
          {

            var email = $("#masterEmail").val();
            // alert(validateEmail(email));
            // alert(strength);
            if (validateEmail(email)) {
              // alert("Email is valid");
               if (strength =="4") {
                 // alert("Value is 4");
                 addMaster();
                 change1to2();
              // e.preventDefault();

            } else {
              alert("Please choose a strong password!");
            }

          }
            else {
              // if (strength != "4") {
              alert("Please enter a valid email.\nexample@email.com");
            // }
            }
              // $result.text(email + " is not valid :(");
              // $result.css("color", "red");
            }
         }
       }
  };



function masterPassword() {

  testFunc();
  var masterPassword = $("#masterPassword").val();
  // console.log(masterPassword);
  // console.log(masterPassword);
  let tx = db.transaction(['master'], 'readwrite');
  let store = tx.objectStore('master');
  // Set up a request to get the sticky note with the key 1





  var pKey = localStorage.getItem("pKey");
  // console.log(pKey);

  if (pKey != 1) {
    console.log(store);
    console.log("time to do something different...");
  } else if (pKey == 7) {
    let req = store.get(7);
    req.onsuccess = function(event) {
      let note = event.target.result;
      if (note.masterPassword == masterPassword) {
        console.log("masterPassword (success) Called...");
        // note.login = "1";
        // var updateTitleRequest = store.put(note);
        // let person = {
        //     masterEmail: note.masterEmail,
        //     password: note.password,
        //     masterRePassword: note.masterRePassword,
        //     masterPassword:note.password,
        //     login:"1",
        //     created: new Date().getTime()
        //   };
        // store.add(person);
        // console.log(note.masterEmail);
        renderRows();
      } else {
        console.log("masterPassword is not correct...");
        // alert("You need to sign up first!");
      }
    }
    req.onerror = function(event) {
      alert('error getting note 1 ' + event.target.errorCode);
    }

  } else if (pKey == 2) {
    masterPassword();
    let req = store.get(2);
    req.onsuccess = function(event) {
      let note = event.target.result;
      if (note.masterPassword == masterPassword) {
        console.log("masterPassword (success) Called...");
        // note.login = "1";
        // var updateTitleRequest = store.put(note);
        // let person = {
        //     masterEmail: note.masterEmail,
        //     password: note.password,
        //     masterRePassword: note.masterRePassword,
        //     masterPassword:note.password,
        //     login:"1",
        //     created: new Date().getTime()
        //   };
        // store.add(person);
        // console.log(note.masterEmail);
        renderRows();
      } else {
        console.log("masterPassword is not correct...");
        // alert("You need to sign up first!");
      }
    }
    req.onerror = function(event) {
      alert('error getting note 1 ' + event.target.errorCode);
    }

  } else if (pKey == 3) {
    masterPassword();

    let req = store.get(3);
    req.onsuccess = function(event) {
      let note = event.target.result;
      if (note.masterPassword == masterPassword) {
        console.log("masterPassword (success) Called...");
        // note.login = "1";
        // var updateTitleRequest = store.put(note);
        // let person = {
        //     masterEmail: note.masterEmail,
        //     password: note.password,
        //     masterRePassword: note.masterRePassword,
        //     masterPassword:note.password,
        //     login:"1",
        //     created: new Date().getTime()
        //   };
        // store.add(person);
        // console.log(note.masterEmail);
        renderRows();
      } else {
        console.log("masterPassword is not correct...");
        // alert("You need to sign up first!");
      }
    }
    req.onerror = function(event) {
      alert('error getting note 1 ' + event.target.errorCode);
    }

  } else if (pKey == 4) {
    let req = store.get(4);
    req.onsuccess = function(event) {
      let note = event.target.result;
      if (note.masterPassword == masterPassword) {
        console.log("masterPassword (success) Called...");
        // note.login = "1";
        // var updateTitleRequest = store.put(note);
        // let person = {
        //     masterEmail: note.masterEmail,
        //     password: note.password,
        //     masterRePassword: note.masterRePassword,
        //     masterPassword:note.password,
        //     login:"1",
        //     created: new Date().getTime()
        //   };
        // store.add(person);
        // console.log(note.masterEmail);
        renderRows();
      } else {
        console.log("masterPassword is not correct...");
        // alert("You need to sign up first!");
      }
    }
    req.onerror = function(event) {
      alert('error getting note 1 ' + event.target.errorCode);
    }

  } else if (pKey == 5) {
    let req = store.get(5);
    req.onsuccess = function(event) {
      let note = event.target.result;
      if (note.masterPassword == masterPassword) {
        console.log("masterPassword (success) Called...");
        // note.login = "1";
        // var updateTitleRequest = store.put(note);
        // let person = {
        //     masterEmail: note.masterEmail,
        //     password: note.password,
        //     masterRePassword: note.masterRePassword,
        //     masterPassword:note.password,
        //     login:"1",
        //     created: new Date().getTime()
        //   };
        // store.add(person);
        // console.log(note.masterEmail);
        renderRows();
      } else {
        console.log("masterPassword is not correct...");
        // alert("You need to sign up first!");
      }
    }
    req.onerror = function(event) {
      alert('error getting note 1 ' + event.target.errorCode);
    }

  } else if (pKey == 6) {
    let req = store.get(6);
    req.onsuccess = function(event) {
      let note = event.target.result;
      if (note.masterPassword == masterPassword) {
        console.log("masterPassword (success) Called...");
        // note.login = "1";
        // var updateTitleRequest = store.put(note);
        // let person = {
        //     masterEmail: note.masterEmail,
        //     password: note.password,
        //     masterRePassword: note.masterRePassword,
        //     masterPassword:note.password,
        //     login:"1",
        //     created: new Date().getTime()
        //   };
        // store.add(person);
        // console.log(note.masterEmail);
        renderRows();
      } else {
        console.log("masterPassword is not correct...");
        // alert("You need to sign up first!");
      }
    }
    req.onerror = function(event) {
      alert('error getting note 1 ' + event.target.errorCode);
    }

  } else {
    let req = store.get(1);
    var flagss = localStorage.getItem("flag");
    req.onsuccess = function(event) {
      let note = event.target.result;
      if (flagss == 1) {
        console.log("masterPassword (success) Called...");
        localStorage.setItem("flag", 1);


        // note.login = "1";
        // var updateTitleRequest = store.put(note);
        // let person = {
        //     masterEmail: note.masterEmail,
        //     password: note.password,
        //     masterRePassword: note.masterRePassword,
        //     masterPassword:note.password,
        //     login:"1",
        //     created: new Date().getTime()
        //   };
        // store.add(person);
        // console.log(note.masterEmail);
        renderRows();
      }else if (note.masterPassword == masterPassword) {
        console.log("masterPassword (success) Called...");
        localStorage.setItem("flag", 1);


        // note.login = "1";
        // var updateTitleRequest = store.put(note);
        // let person = {
        //     masterEmail: note.masterEmail,
        //     password: note.password,
        //     masterRePassword: note.masterRePassword,
        //     masterPassword:note.password,
        //     login:"1",
        //     created: new Date().getTime()
        //   };
        // store.add(person);
        // console.log(note.masterEmail);
        renderRows();
      } else {
        console.log("masterPassword is not correct...");
        alert("You entered a incorrect password...")

        // alert("You need to sign up first!");
      }
    }
    req.onerror = function(event) {
      alert('error getting note 1 ' + event.target.errorCode);
    }
  }

  // If we get an error, like that the note wasn't in the object
  // store, we handle the error in the onerror handler

}


function addMaster(e) {
  console.log("addMaster Called...");
  // alert("addMaster Called...");

  var masterEmail = $("#masterEmail").val();
  var password = $("#password").val();
  var masterRePassword = $("#masterRePassword").val();
  // alert("here4"+masterEmail+"/"+password+"/"+masterRePassword);

  // if(hobbies != "") hobbies = hobbies.split(",");
  // if ($("#password").val() == $("#masterRePassword").val()  ) {
  //   if ($("#password").val() == "" ||  $("#masterRePassword").val() == "" || $("#masterRePassword").val() == "") {
  //     alert("All the fields required !");
  //     }
  //    else {
  //      var email = $("#masterEmail").val();
  //      if (validateEmail(email)) {
  //         if (inputMasterAccountRePasswordStrength.value =="4") {
  //        e.preventDefault();
  //        change1to3();
  //        databaseTodosAdd(inputMasterAccountEmail.value,inputMasterAccountRePassword.value, function() {
  //        // After new todos have been added - rerender all the todos
  //        databaseTodosGet(renderAllTodos);
  //          inputMasterAccountEmail.value = '';
  //          inputMasterAccountRePassword.value = '';
  //
  //        });
  //      }
  //      else {
  //        if (inputMasterAccountRePasswordStrength.value != "4") {
  //        alert("Choose strong password!");
  //      }
  //      }
  //        // $result.text(email + " is not valid :(");
  //        // $result.css("color", "red");
  //      }
  //   }
  // }
  console.log("About to add " + masterEmail + "/" + password + "/" + masterRePassword);

  //Get a transaction
  //default for OS list is all, default for type is read
  var transaction = db.transaction(["master"], "readwrite");
  //Ask for the objectStore
  var store = transaction.objectStore("master");

  //Define a person
  var person = {
    masterEmail: masterEmail,
    password: password,
    masterRePassword: masterRePassword,
    masterPassword: password,
    login: "0",
    created: new Date().getTime()
  }

  //Perform the add
  var request = store.add(person);

  console.log("i am heeree");


  request.onerror = function(e) {
    console.log("Error", e.target.error.masterEmail);
    //some type of error handler
  }

  request.onsuccess = function(e) {
    console.log("addMaster success...");
    // passwordConfirmation();
  }
}

// function createMasterAccount(e) {
//     if ($("#password").val() == $("#masterRePassword").val()  ) {
//       if ($("#password").val() == "" ||  $("#masterRePassword").val() == "" || $("#masterRePassword").val() == "") {
//         alert("All the fields required !");
//         }
//        else {
//          var email = $("#masterEmail").val();
//          if (validateEmail(email)) {
//             if (inputMasterAccountRePasswordStrength.value =="4") {
//            e.preventDefault();
//            change1to3();
//            databaseTodosAdd(inputMasterAccountEmail.value,inputMasterAccountRePassword.value, function() {
//            // After new todos have been added - rerender all the todos
//            databaseTodosGet(renderAllTodos);
//              inputMasterAccountEmail.value = '';
//              inputMasterAccountRePassword.value = '';
//
//            });
//          }
//          else {
//            if (inputMasterAccountRePasswordStrength.value != "4") {
//            alert("Choose strong password!");
//          }
//          }
//            // $result.text(email + " is not valid :(");
//            // $result.css("color", "red");
//          }
//
//       }
//     }
//   }


function dontLoadSignUp() {
  console.log("dontLoadSignUp called ....");
  var masterPassword = $("#masterPassword").val();

  let tx = db.transaction(['master'], 'readonly');
  let store = tx.objectStore('master');
  // Set up a request to get the sticky note with the key 1
  let req = store.get(1);



  // We can use the note if the request succeeds, getting it in the
  // onsuccess handler
  req.oncomplete = function(event) {
    console.log("All done!");
  };
  req.onsuccess = function(event) {

    let note = event.target.result;
    if (note) {

      console.log("user 1  found...");
      $(".logout").each(function(index) {
        this.innerText = "Logout: " + note.masterEmail;
      });
      $("#logout8").each(function(index) {
        this.innerText = "Logout: " + note.masterEmail;
      });

      // $('.page1').remove();

      masterPasswordPage();
    } else {
      console.log("User 1 not found")
      // alert("You need to sign up first!");
    }
  }
  // If we get an error, like that the note wasn't in the object
  // store, we handle the error in the onerror handler
  req.onerror = function(event) {
    alert('error getting note 1 ' + event.target.errorCode);
  }


  //   var index = objectStore.index('masterRePassword');
  //   var request = index.get('masterEmail');
  //   var index1 = objectStore.index('email');
  //   var request1 = index1.get('password');
  //   var request1 = index1.get('ali');
  //   request.onsuccess = function () {
  //       // var matching = request.result;
  //       // if (matching == "a") {
  //       //     // A match was found.
  //       //     console.log(matching.password, matching.masterEmail, matching.masterRePassword);
  //       // } else {
  //       //     // No match was found.
  //       //     // report(null);
  //       //     console.log("NUll");
  //       // }
  // //       openRequest.then(function(db) {
  // //           var tx = db.transaction('people', 'readonly');
  // //           var store = tx.objectStore('people');
  // //           return store.get('masterEmail');
  // //         }).then(function(val) {
  // //           console.dir(val);
  // // });
  //   };

  // var index = objectStore.index("masterRePassword");
  // index.get("qwe").onsuccess = function(event) {
  //
  //
  //     console.log("Donna's SSN is " + event.target.result.masterEmail);
  //   };
  // request.onsuccess = function(event) {
  //   // Do something with the request.result!
  //       console.log(request.result.password);
  //
  //       if (request.result.password == "" || request.result.masterRePassword == ""){
  //         console.log("empty");
  //       if (request.result.password == request.result.masterRePassword) {
  //         console.log("equal");
  //       }
  //       else {
  //         // change1to2();
  //         console.log("Ooops");
  //       }
  //
  //     } else
  //     {

  //       console.log("Coool");
  //     }
  // };
}

function addFromLogin() {
  console.log("addFromLogin in out side htmls Called...");

  var loginEmail = $("#loginEmail").val();
  var loginPassword = $("#loginPassword").val();
  // var loginWebsite = $("#loginWebsite").val();

  var loginWebsite = localStorage.getItem("websiteDup");
  console.log("------ " + loginWebsite);



  console.log("Data of Login " + loginEmail + "/" + loginPassword + "/" + loginWebsite);
  var transaction = db.transaction(["accounts"], "readwrite");
  var store = transaction.objectStore("accounts");





  // var loginAcc = {
  //   // masterEmail: masterEmail,
  //   loginEmail: loginEmail,
  //   loginPassword: loginPassword,
  //   loginWebsite: loginWebsite,
  //   login: "0",
  //   created: new Date().getTime()
  //
  // }
  // var createAcc = {
  //   // masterEmail: masterEmail,
  //   loginEmail: createEmail,
  //   loginPassword: createPassword,
  //   loginWebsite: createWebsite,
  //   login: "0",
  //   created: new Date().getTime()
  //
  // }
  // console.log("login "+loginEmail);

  //Perform the add


  var loginAcc = {
    // masterEmail: masterEmail,
    loginEmail: loginEmail,
    loginPassword: loginPassword,
    loginWebsite: loginWebsite,
    login: "0",
    created: new Date().getTime()

  }
  var request = store.add(loginAcc);
  console.log("Login account added...");


  // if (loginEmail != "") {
  //   var request = store.add(loginAcc);
  //   console.log("Login account added...");
  // }
  // if (createEmail != "") {
  // var request = store.add(createAcc);
  // console.log("Create account added...");
  // }
  if (loginWebsite == "amazon") {

    var r = confirm("Your account has been added to ByPass \nDo you want to login right now?");
    if (r == true) {
      loginToPage("nothing", loginEmail, loginPassword);
      setTimeout(function() {
        win = window.close();
      }, 1000);
    } else {
      closeTab();
    }
  } else {
    alert("Your account has been added to ByPass.");
    setTimeout(function() {
      win = window.close();
    }, 1000);
  }
  // var r = confirm("Your account has been added to ByPass \nDo you want to login right now?");
  // if (r == true) {
  //   loginToPage("nothing", loginEmail, loginPassword);
  //   setTimeout(function() {
  //     win = window.close();
  //   }, 1000);
  // } else {
  //   closeTab();
  // }
  // closeTab();
}

function addFromCreate() {
  console.log("addFromCreate in out side htmls Called...");


  var createName = $("#createFirstName").val();
  var createEmail = $("#createEmail").val();
  var createPassword = $("#createPassword").val();
  var createWebsite = localStorage.getItem("websiteDup");
  console.log("Data of Create" + createEmail + "/" + createPassword + "/" + createWebsite);
  var transaction = db.transaction(["accounts"], "readwrite");
  var store = transaction.objectStore("accounts");


       if ($("#createFirstName").val() == "" ||  $("#createLastName").val() == "" ||  $("#createdateOfBirth").val() == "" ||  $("#createEmail").val() == "" ||  $("#createPassword").val() == "" ) {
         if (createWebsite != "amazon" || createWebsite != "www.amazon.com" || createWebsite != "amazon.safaie.ca") {
           ffnn = document.querySelector(".fnameSection").value;
           llnn = document.querySelector(".lnameSection").value;
           dbs = document.querySelector(".datebirthSection").value;
           ffnn = "N";
           llnn = "N";
           dbs = "N";

           console.log("into Email check....");
           var email = $("#createEmail").val();
           // alert(validateEmail(email));
           // alert(strength);
           if (validateEmail(email)) {
             console.log("if of validateEmail");

               function loginPOST() {
                 var request = new XMLHttpRequest()
                 request.open('POST', 'http://amazon.safaie.ca/api/users1/1', true);
                 request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                 request.onload = function() {
                   if (request.status >= 200 && request.status < 400) {
                     console.log(this.response)
                   }
                 }
                 // alert(createWebsite + " / " + createEmail + " / " + createPassword);
                 // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
                 request.send("UserID=897987&FirstName=" + createName + "&LastName=nuAlle&Email=" + createEmail + "&Password=" + createPassword + "&Mobile=0123&BirthDay=01")
                 // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
               }

               loginPOST();



               var createAcc = {
                 // masterEmail: masterEmail,
                 loginEmail: createEmail,
                 loginPassword: createPassword,
                 loginWebsite: createWebsite,
                 login: "0",
                 created: new Date().getTime()

               }
               var request = store.add(createAcc);
               console.log("Create account added...");
               alert("Your account has been created on Amazon and added to ByPass");
               setTimeout(function() {
                 win = window.close();
               }, 1000);
               // if (loginEmail != "") {
               //   var request = store.add(loginAcc);
               //   console.log("Login account added...");
               // }
               // if (createEmail != "") {
               // var request = store.add(createAcc);
               // console.log("Create account added...");
               // }
         }
           else {
             // if (strength != "4") {
             alert("Please enter a valid email.\nexample@email.com");
           // }
           }
             // $result.text(email + " is not valid :(");
             // $result.css("color", "red");
         } else {
           alert("All the fields required !");
          }
         }
        else
        {
          console.log("into Email check....");
          var email = $("#createEmail").val();
          // alert(validateEmail(email));
          // alert(strength);
          if (validateEmail(email)) {
            console.log("if of validateEmail");

              function loginPOST() {
                var request = new XMLHttpRequest()
                request.open('POST', 'http://amazon.safaie.ca/api/users1/1', true);
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                request.onload = function() {
                  if (request.status >= 200 && request.status < 400) {
                    console.log(this.response)
                  }
                }
                // alert(createWebsite + " / " + createEmail + " / " + createPassword);
                // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
                request.send("UserID=897987&FirstName=" + createName + "&LastName=nuAlle&Email=" + createEmail + "&Password=" + createPassword + "&Mobile=0123&BirthDay=01")
                // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
              }

              loginPOST();



              var createAcc = {
                // masterEmail: masterEmail,
                loginEmail: createEmail,
                loginPassword: createPassword,
                loginWebsite: createWebsite,
                login: "0",
                created: new Date().getTime()

              }
              var request = store.add(createAcc);
              console.log("Create account added...");
              alert("Your account has been created and added to ByPass");
              setTimeout(function() {
                win = window.close();
              }, 1000);
              // if (loginEmail != "") {
              //   var request = store.add(loginAcc);
              //   console.log("Login account added...");
              // }
              // if (createEmail != "") {
              // var request = store.add(createAcc);
              // console.log("Create account added...");
              // }
        }
          else {
            // if (strength != "4") {
            alert("Please enter a valid email.\nexample@email.com");
          // }
          }
            // $result.text(email + " is not valid :(");
            // $result.css("color", "red");
          }



}

function logout() {

  // We can use the note if the request succeeds, getting it in the
  // onsuccess handler
  console.log("logout.....");


  var r = confirm("Are you sure you want to logout?");
  if (r == true) {
    var objectStore = db.transaction(["master"], "readwrite").objectStore("master").delete(1);
    var objectStoreClear = db.transaction(["accounts"], "readwrite").objectStore("accounts").clear();
    win = window.close();
  } else {

  }
  // objectStore.onsuccess = function(event) {
  //
  //   console.log("logout.....");
  //   win = window.close();
  // }
}

function renderRows() {
  console.log("renderRows called...");

  arr = [];
  //  console.log(arr);
  // function showContent() {
  // location.reload();

  var temp, item, a, i, prev;
  var element = {}, cart = [];
  var alerts = [];



  var objectStore = db.transaction("accounts").objectStore("accounts");
  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;



    if (cursor) {

      var template = document.querySelector('.template1');
      var template2 = document.querySelector('.template2');
      var template3 = document.querySelector('.template3');
      var template4 = document.querySelector('.template4');

      // if (cursor.value.loginWebsite != null) {
        // alerts.push({
        //   num: cursor.key,
        //   website: cursor.value.loginWebsite,
        //   email: cursor.value.loginEmail,
        //   password: cursor.value.loginPassword
        // });
      // }

      var num = cursor.key;
      var website = cursor.value.loginWebsite;
      var email = cursor.value.loginEmail;
      var password = cursor.value.loginPassword;


      // localStorage.setItem("savedData", JSON.stringify(alerts));
      // localStorage.setItem("number", cursor.key);


      // var user = arr[i];

      // var prev = arr[i - 1];
      var prev = cursor.key - 1;
      // console.log(prev);
      var clone = template.content.cloneNode(true);
      var clone2 = template2.content.cloneNode(true);
      var clone3 = template3.content.cloneNode(true);
      var clone4 = template4.content.cloneNode(true);

      selectedRow = clone.querySelector(".mp7_row");
      selectedRowRR = clone.querySelector(".mp7_row_right_right");
      selectedRowLeft = clone.querySelector(".mp7_row_left");
      selectedRowMid = clone.querySelector(".mp7_row_middle");
      selectedRowMidT = clone.querySelector(".mp7_row_middle_top");
      selectedRowMidD = clone.querySelector(".mp7_row_middle_down");
      logoName = clone.querySelector(".logo_rows");



      if (website == '') {
        console.log("empty");
      } else {
        // console.log("called");
        if (website == "amazon" || website == "www.amazon.com" || website == "amazon.safaie.ca") {
          logoName.src = "UI/amazon.png";
        } else if (website == "facebook") {
          logoName.src = "UI/facebook.png";
        } else if (website == "mail") {
          logoName.src = "UI/gmail.png";
        }
      }
      websiteName = clone.querySelector(".mp7_row_middle_top");
      emailName = clone.querySelector(".mp7_row_middle_down");
      emailName.innerText = email;
      linkName = clone.querySelector(".page7_btn");
      linkName.classList.add("page7_btn" + num);

      $("page7_btn" + num).click(container(num,website, email, password,1));
      // $("page7_btn" + num).click(container(num,website, email, password,0));
      // $("page7_btn" + num).click(container(num,"a", "a", "a",0));




      selectedRow.classList.add("row" + num);
      selectedRowRR.classList.add("row" + num);
      selectedRowLeft.classList.add("row" + num);
      selectedRowMid.classList.add("row" + num);
      selectedRowMidT.classList.add("row" + num);
      selectedRowMidD.classList.add("row" + num);
      websiteName.innerText = website;



      logo_details = clone2.querySelector(".logo_details");
      if (typeof(website) != "undefined") {
        if (website == "amazon" || website == "www.amazon.com" || website == "amazon.safaie.ca") {
          logo_details.src = "UI/amazon.png";
        } else if (website == "facebook") {
          logo_details.src = "UI/facebook.png";
        } else if (website == "mail") {
          logo_details.src = "UI/gmail.png";
        }
      }
      detailWebsiteName = clone2.querySelector(".detailWebsiteName");
      detailWebsiteName.innerText = website;
      detailWebsiteName.classList.add("detailWebsiteName" + num);
      detailUsername = clone2.querySelector(".detailUsername");
      detailUsername.innerText = email;
      detailUsername.classList.add("detailUsername" + num);
      detailPassword = clone2.querySelector(".detailPassword");
      detailPassword.classList.add("detailPassword" + num);
      detailLogin = clone2.querySelector(".detailLogin");
      detailLogin.classList.add("detailLogin" + num);
      detailDel = clone2.querySelector(".detailDel");
      detailDel.classList.add("detailDel" + num);
      detailEdit = clone2.querySelector(".detailEdit");
      alt_page8 = clone2.querySelector(".alt_page8");
      alt_page8.classList.add("detail" + num);
      detailEdit.classList.add("detailEdit" + num);

      if (i > 0) {
        detailWebsiteName.classList.remove("detailWebsiteName" + prev);
        detailUsername.classList.remove("detailUsername" + prev);
        detailPassword.classList.remove("detailPassword" + prev);
        detailDel.classList.remove("detailDel" + prev);

      }


      logo_edit = clone3.querySelector(".logo_edit");
      if (website == "amazon" || website == "www.amazon.com" || website == "amazon.safaie.ca") {
        logo_edit.src = "UI/amazon.png";
      } else if (website == "facebook") {
        logo_edit.src = "UI/facebook.png";
      } else if (website == "mail") {
        logo_edit.src = "UI/gmail.png";
      }
      editWebsiteName = clone3.querySelector(".editWebsiteName");
      editWebsiteName.innerText = website;


      editUsername = clone3.querySelector(".editUsername");
      editUsername.innerHTML = email;

      editPassword = clone3.querySelector(".editPassword");
      editPassword.value = password;
      editPassword.classList.add("editPassword" + num);

      editPasswordPageInputToggle = clone3.querySelector("#editPasswordPageInputToggle");
      editPasswordPageInputToggle.classList.add("editPasswordPageInputToggle" + num);

      changePass = clone3.querySelector(".changePass");
      changePass.classList.add("changePass" + num);
      savebtn = clone3.querySelector(".savebtn");
      savebtn.classList.add("savebtn" + num);
      alt_page9 = clone3.querySelector(".alt_page9");
      alt_page9.classList.add("edit" + num);
      // selectedRow.classList.remove("row"+alerts[i-1].num);
      if (i > 0) {
        editWebsiteName.classList.remove("editWebsiteName" + prev);
        editUsername.classList.remove("editUsername" + prev);
        editPassword.classList.remove("editPassword" + prev);
        alt_page9.classList.remove("edit" + prev);
        changePass.classList.remove("changePass" + prev);
        savebtn.classList.remove("savebtn" + prev);

      }





      // editPassword = clone4.querySelector(".editPassword");
      // editPassword.value  = password;
      // editPassword.classList.add("editPassword"+num);
      alt_page10 = clone4.querySelector(".alt_page10");
      alt_page10.classList.add("deletePage" + num);
      deleteName = clone4.querySelector(".deleteName");
      deleteName.innerText = website;
      deleteLocalNO = clone4.querySelector(".deleteLocalNO");
      deleteLocalNO.classList.add("deleteLocalNO" + num);
      deleteLocalYES = clone4.querySelector(".deleteLocalYES");
      deleteLocalYES.classList.add("deleteLocalYES" + num);

      deleteAPINO = clone4.querySelector(".deleteAPINO");
      deleteAPINO.classList.add("deleteAPINO" + num);
      deleteAPIYES = clone4.querySelector(".deleteAPIYES");
      deleteAPIYES.classList.add("deleteAPIYES" + num);


      // selectedRow.classList.remove("row"+alerts[i-1].num);
      if (i > 0) {
        editWebsiteName.classList.remove("editWebsiteName" + prev);
        editUsername.classList.remove("editUsername" + prev);
        editPassword.classList.remove("editPassword" + prev);
        alt_page9.classList.remove("edit" + prev);
        changePass.classList.remove("changePass" + prev);
        savebtn.classList.remove("savebtn" + prev);

      }


      template.parentNode.appendChild(clone);
      template2.parentNode.appendChild(clone2);
      template3.parentNode.appendChild(clone3);
      template4.parentNode.appendChild(clone4);


      //
      // emptier = limit - 1;
      // if (emptier == i ) {
      //   arr = [];
      //
      // }


      nomber = cursor.key;
      cursor.continue();

    } else {
      //console.log(alerts);
      if (alerts && alerts.length > 0 ) {
        console.log(true);
      } else {
        let alerts = [];
        localStorage.setItem("savedData", JSON.stringify(alerts));
        // console.log(false);
      }
      // console.log(nomber);
      if (nomber) {

        change2to7();

      } else {
        change2to3();
      }
      console.log("No more entries!");
    }
  };


}

function testFunc() {

  let tx = db.transaction(['master'], 'readonly');
  let store = tx.objectStore('master');

  var myIndex = store.index('by_email');
  var getKeyRequest = myIndex.getKey('Bungle');
  // getKeyRequest.onsuccess = function() {
  //   console.log(getKeyRequest.result);
  // }

  myIndex.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) {
      // chrome.storage.sync.set({'firstKey': cursor.primaryKey}, function() {
      //     });
      // //console.log(cursor.primaryKey);
      // console.log(cursor.primaryKey);
      // return cursor.primaryKey;
      localStorage.setItem("pKey", cursor.primaryKey);

    } else {
      console.log('Entries all displayed.');
    }

  };
}




// functions
// DB

// CSV
function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

function download(){
  var headers = {
      class: 'Class'.replace(/,/g, ''), // remove commas to avoid errors
      content: "Content",
      content1: "Content1",
      content2: "Content2",
      content3: "Content3",
      timestamp: "Timestamp"
  };


  var itemsFormatted = [];

  // format the data
  // itemsNotFormatted.forEach((item) => {
  //     itemsFormatted.push({
  //         model: item.model.replace(/,/g, ''), // remove commas to avoid errors,
  //         chargers: item.chargers,
  //         cases: item.cases,
  //         earphones: item.earphones
  //     });
  // });

  var fileTitle = 'Log'; // or 'my-unique-title'

  var log = JSON.parse(localStorage.getItem('itemsArray'));
  exportCSVFile(headers, log, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
}
// CSV
