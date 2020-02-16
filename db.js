

function editPOSTCow(name,user,pass) {
  logMe("Webmail Server","request","Edit account with API","Email: "+ user + " / New Password:" + pass);

  var request = new XMLHttpRequest()
  request.open('POST', 'http://webmail.montreal-events.com/api/v1/edit/mailbox', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Authorization","79DC3B-86B430-C222C7-8C9D02-6EEBCB");
  request.setRequestHeader('Access-Control-Allow-Origin','*');
  // request.setRequestHeader(' ','true');
  // request.withCredentials = true;

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log(this.response)
    }else {
    }
  }
  var body = {
    'items': [
      user
    ],
    'attr': {
      'name': 'Full name',
      'quota': '10',
      'password': pass,
      'password2': pass,
      'active': '1',
      'sender_acl': [
        'default',
        'info@domain2.tld',
        'domain3.tld',
        '*'
      ],
      'force_pw_update': '0',
      'sogo_access': '1'
    }
  };
  // var attr = {"local_part":res[0],"domain":"montreal-events.com","name":"ByPass User","quota":"200","password":createPassword,"password2":createPassword,"active":"1"}
    // var attr = {"local_part":user,"domain":"webmail.com","name":"ByPass User","quota":"10","password":pass,"password2":pass,"active":"1"}
  // alert(createWebsite + " / " + createEmail + " / " + createPassword);
  // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
  // request.send("UserID=897987&FirstName=" + createName + "&LastName=nuAlle&Email=" + createEmail + "&Password=" + createPassword + "&Mobile=0123&BirthDay=01")
  // request.send("attr:{'local_part':demoooooo,'domain':montreal-events.com,'name':John Doe,'quota':100,'password':moohoo,'password2':moohoo,'active':1}")
  // alert(attr.local_part);
    // request.send(JSON.stringify(attr))
  request.send(JSON.stringify(body))
  // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
}

function deletePOSTCow(name,pass,user) {
  logMe("Webmail Server","request","Delete account with API","Email: "+ user);

  var request = new XMLHttpRequest()
  request.open('POST', 'http://webmail.montreal-events.com/api/v1/delete/mailbox', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Authorization","79DC3B-86B430-C222C7-8C9D02-6EEBCB");
  request.setRequestHeader('Access-Control-Allow-Origin','*');
  // request.setRequestHeader(' ','true');
  // request.withCredentials = true;

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log(this.response)
    }else {
    }
  }
  var body = [
    user
  ];
  // var attr = {"local_part":res[0],"domain":"montreal-events.com","name":"ByPass User","quota":"200","password":createPassword,"password2":createPassword,"active":"1"}
  // var attr = {"local_part":user,"domain":"webmail.com","name":"ByPass User","quota":"10","password":pass,"password2":pass,"active":"1"}
  // alert(createWebsite + " / " + createEmail + " / " + createPassword);
  // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
  // request.send("UserID=897987&FirstName=" + createName + "&LastName=nuAlle&Email=" + createEmail + "&Password=" + createPassword + "&Mobile=0123&BirthDay=01")
  // request.send("attr:{'local_part':demoooooo,'domain':montreal-events.com,'name':John Doe,'quota':100,'password':moohoo,'password2':moohoo,'active':1}")
  // alert(attr.local_part);
  // request.send(JSON.stringify(attr))
  request.send(JSON.stringify(body))
  // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
}


function loginToPageTEST() {
  var name = "a"
  var pass = "a"
  var user = "a"
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
    } else {
      console.log("Hmm... There was an error undrestanding request.");


    }
  }
  request.send("UserID=0123&FirstName=" + name + "&LastName=nuAlle&Email=" + user + "&Password=" + pass + "&Mobile=0123&BirthDay=01");
  var myStatus = request.send;
  console.log(myStatus);

  // alert(request.send("UserID=0123&FirstName=" + name + "&LastName=nuAlle&Email=" + user + "&Password=" + pass + "&Mobile=0123&BirthDay=01"));
}
loginToPageTEST();




var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

// Match password + add margin to masterRePassword

function logMe(who,action,mode,data){
  // $("HTMLselector").on('click', function(e) {
  const today = new Date();
  var n = today.toString();



  // alert(n);
  // today.setHours(today.getHours());
    var newItem =
        {
          // 'clicked': $(this).attr('class'),
          'who': who,
          'action': action,
          'mode': mode,
          'data': data,
          'time': n
          // 'time': Date.now()
        };

    oldItems.push(newItem);

    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
    // alert();
    // e.stopPropagation();
  // });
}



$(document).ready(function() {

  $( ".mp10_el_api" ).each(function( i ) {
      this.style.display = "block";
  });
  $( ".mp10_el_local" ).each(function( i ) {
      this.style.display = "none";
  });


  $( function() {
    $( document ).tooltip({
      position: {
        my: "center bottom",
        at: "center top-10",
        collision: "none"
      }
    });
  } );

  $("div").click(function() {
    logDivBoxClass = $(this).attr('class');
    logDivBoxID = $(this).attr('id');
    if(logDivBoxClass.includes("p4_row2")){
      logMe("User","Step2", "Wizard","Clicked");

    }else if(logDivBoxClass.includes("p4_row3")){
      logMe("User","Step3", "Wizard","Clicked");

    }else if(logDivBoxClass.includes("p4_row4")){
      logMe("User","Step4", "Wizard","Clicked");
    }else if(logDivBoxClass.includes("p4_row1")){
      logMe("User","Step1", "Wizard","Clicked");
    }else if(logDivBoxClass.includes("detailUsername")){
      logMe("User","Username Box", "Detail Page","Clicked");
    }else if(logDivBoxClass.includes("detailPassword")){
      logMe("User","Password Box", "Detail Page","Clicked");
    }else if(logDivBoxClass.includes("editUsername")){
      logMe("User","Username Box", "Edit Page","Clicked");
    }else if(logDivBoxClass.includes("editPassword")){
      logMe("User","Password Box", "Edit Page","Clicked");
    }else if(logDivBoxClass.includes("detailEdit")){
      logMe("User","Edit account button", "Detail Page","Clicked");
    }else{
      // logMe("User","Clicked", "Full Log","Element with Class: " + $(this).attr('class') + " and ID: "+ $(this).attr('id'));
    }

  });
  $("input").click(function() {
    // alert($(this).attr('id'));
    logInputBoxClass = $(this).attr('class');
    logInputBoxID = $(this).attr('id');
    if (logInputBoxID.includes("masterEmail")) {
      logMe("User","Email box", "Create ByPass account","Clicked");
    } else if(logInputBoxID.includes("password")){
      logMe("User","Password box", "Create ByPass account","Clicked");

    }else if(logInputBoxID.includes("masterRePassword")){
      logMe("User","Confirm password box", "Create ByPass account","Clicked");

    }else if(logInputBoxID.includes("masterPassword")){
      logMe("User","Confirm Masterpassword box", "Create ByPass account","Clicked");

    }else if(logInputBoxID.includes("loginEmail")){
      logMe("User","Email", "Login(options)","Clicked");

    }else if(logInputBoxID.includes("loginPassword")){
      logMe("User","Password", "Login(options)","Clicked");

    }else if(logInputBoxID.includes("createFirstName")){
      logMe("User","FirstName", "Create(options)","Clicked");

    }else if(logInputBoxID.includes("createLastName")){
      logMe("User","Lastname", "Create(options)","Clicked");

    }else if(logInputBoxID.includes("createdateOfBirth")){
      logMe("User","Date of Birth", "Create(options)","Clicked");

    }else if(logInputBoxID.includes("createEmail")){
      logMe("User","Email", "Create(options)","Clicked");
    }else if(logInputBoxID.includes("createPassword")){
      logMe("User","Password", "Create(options)","Clicked");


    }else if(logInputBoxID.includes("passLength")){
      var pli = $('passLength').val();
      logMe("User","Password Length Box", "Create(options)","Clicked / Password Length: " + pli );

    }else if(logInputBoxID.includes("websiteNameP5")){
      logMe("User","Website name", "Create or Login","Clicked");

    }else if(logInputBoxID.includes("input1_page7")){
      logMe("User","Search Box", "Homepage","Clicked");

    }
  });






  var strength = $("#password-strength-meter").val();



  $("#createPassword").keyup(function() {
    document.getElementById('passLength').value =     document.getElementById('createPassword').value.length;
  });

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
      logMe("System","Password match check", "Create ByPass account","password not match" );

    } else
    if ($("#password").val() == "") {
      $("#msg").html("").css("color", "red");

    } else {
      $("#msg").html("Matched").css("color", "green");
      logMe("System","Password match check", "Create ByPass account","password matched" );

    }
  });
});
// Match password + add margin to masterRePassword





// Show password
function showPass() {
  const password = document.getElementById('password');
  const rePassword = document.getElementById('masterRePassword');
  if (password.type === 'password') {
    password.type = 'text';
    rePassword.type = 'text';
    logMe("User","Toggle-Password","Create ByPass account","ON - Password Confirm Input : "+ password.value);

  } else {
    password.type = 'password';
    rePassword.type = 'password';
    logMe("User","Toggle-Password","Create ByPass account","OFF - Password Confirm Input : "+ password.value);

  }
}
document.addEventListener('DOMContentLoaded', function() {
  // document.querySelector('.toggle-password').addEventListener('click', showPass);
  $(".toggle-password").click(function(){
    showPass();
  });

});

// Show password


var nomber;

function delPOST(name,email,pass) {
  var request = new XMLHttpRequest()
  request.open('POST', 'http://amazon.safaie.ca/api/users1/1', true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      logMe("Amazon Server","request","Deleting account with API","success");

      console.log(this.response)
    } else {
      logMe("Amazon Server","request","Deleting account with API","fail");

    }
  }
  // alert(createWebsite + " / " + createEmail + " / " + createPassword);
  // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
  request.send("UserID=10&FirstName=" + email + "&LastName=nuAlle&Email=" + email + "&Password=" + email + "&Mobile=0123&BirthDay=01")
  // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
}

function editPOST(name,email,pass) {
  logMe("Amazon Server","request","Edit account with API","Email: "+ email + " / New Password:" + pass);
  var request = new XMLHttpRequest()
  request.open('POST', 'http://amazon.safaie.ca/api/users1/1', true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      logMe("Amazon Server","request","Deleting account with API","success");

      console.log(this.response)
    } else {
      logMe("Amazon Server","request","Deleting account with API","fail");

    }
  }
  // alert(createWebsite + " / " + createEmail + " / " + createPassword);
  // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
  request.send("UserID=1&FirstName=" + email + "&LastName=nuAlle&Email=" + email + "&Password=" + pass + "&Mobile=0123&BirthDay=01")
  // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
}

function showPassMasterPassword() {


  const createPassword = document.getElementById('masterPassword');
  if (createPassword.type === 'password') {
    logMe("User","Toggle-Password","Create ByPass account","ON - masterPassword Input : "+ createPassword.value);
    createPassword.type = 'text';
  } else {
    logMe("User","Toggle-Password","Create ByPass account","OFF - masterPassword Input : "+ createPassword.value);
    createPassword.type = 'password';
  }
}

function loginToPagePop(name, user, pass) {

  // loadingPage();
  console.log(name + " / " + user + " / " + pass);
  var request = new XMLHttpRequest()
  request.open('POST', 'http://amazon.safaie.ca/api/login', true)
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  request.onload = function() {
    console.log('login');
    if (request.status >= 200 && request.status < 400) {
      logMe("Amazon Server","request","login to amazon request","success - name: " +name+ "/email: " +user+ "/password: "+pass);
      console.log(this.response)
      token = this.response;
      token = token.replace("\"", "");
      token = token.replace("\"", "");
      window.open("http://amazon.safaie.ca/Users/Apilogin?username=" + user + "&token=" + token, '_blank');
    } else {
      // alert("hh");
      // loadingPageClose();
      alert("Hmm... There was an error undrestanding request.");
      // alert("Account does not exist in the website! \nCheck your account detail for more information.");
      logMe("Amazon Server","request","login to amazon request","fail - name: " +name+ "/email: " +user+ "/password: "+pass);
      logMe("System","Popup msg3","Homepage","Hmm... There was an error undrestanding request.");
      logMe("User","User response to popup msg3","Login Page Option","OK");

    }
  }
  request.send("UserID=0123&FirstName=" + name + "&LastName=nuAlle&Email=" + user + "&Password=" + pass + "&Mobile=0123&BirthDay=01");
  var myStatus = request.send;
  console.log(myStatus);

  // alert(request.send("UserID=0123&FirstName=" + name + "&LastName=nuAlle&Email=" + user + "&Password=" + pass + "&Mobile=0123&BirthDay=01"));
}



function loginToPage(name, user, pass) {
  function loadingPage() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("bgloader").style.display = "block";
  }
  function loadingPageClose() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("bgloader").style.display = "none";
  }
  loadingPage();
  console.log(name + " / " + user + " / " + pass);
  var request = new XMLHttpRequest()
  request.open('POST', 'http://amazon.safaie.ca/api/login', true)
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  request.onload = function() {
    console.log('login');
    if (request.status >= 200 && request.status < 400) {
      logMe("Amazon Server","request","login to amazon request","success - name: " +name+ "/email: " +user+ "/password: "+pass);
      console.log(this.response)
      token = this.response;
      token = token.replace("\"", "");
      token = token.replace("\"", "");
      window.open("http://amazon.safaie.ca/Users/Apilogin?username=" + user + "&token=" + token, '_blank');
    } else {
      // alert("hh");
      loadingPageClose();
      alert("Hmm... There was an error undrestanding request.");
      // alert("Account does not exist in the website! \nCheck your account detail for more information.");
      logMe("Amazon Server","request","login to amazon request","fail - name: " +name+ "/email: " +user+ "/password: "+pass);
      logMe("System","Popup msg3","Homepage","Hmm... There was an error undrestanding request.");
      logMe("User","User response to popup msg3","Homepage","OK");

    }
  }
  request.send("UserID=0123&FirstName=" + name + "&LastName=nuAlle&Email=" + user + "&Password=" + pass + "&Mobile=0123&BirthDay=01");
  var myStatus = request.send;
  console.log(myStatus);

  // alert(request.send("UserID=0123&FirstName=" + name + "&LastName=nuAlle&Email=" + user + "&Password=" + pass + "&Mobile=0123&BirthDay=01"));
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
      logMe("User","Go button on first created account","Homepage","name: " +data.name+ " / email: " +data.user+ " / password: "+data.pass);
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
      logMe("User","Go button on second created account","Homepage","name: " +data.name+ " / email: " +data.user+ " / password: "+data.pass);
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
      logMe("User","Go button on third created account","Homepage","name: " +data.name+ " / email: " +data.user+ " / password: "+data.pass);
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
      logMe("User","Go button on forth created account","Homepage","name: " +data.name+ " / email: " +data.user+ " / password: "+data.pass);
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
      logMe("User","Go button on fifth created account","Homepage","name: " +data.name+ " / email: " +data.user+ " / password: "+data.pass);
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
      logMe("User","Go button on sixth created account","Homepage","name: " +data.name+ " / email: " +data.user+ " / password: "+data.pass);
      loginToPage(data.name,data.user,data.pass);
    }
    if (number == 7 && saveOrReturn == 1) {
      a7 = { "name": name, "user": user, "pass": pass};
      localStorage.setItem('acc7', JSON.stringify(a7));
    }
    if (number == 7 && saveOrReturn == 0) {
      acc7 = localStorage.getItem('acc7');
      var data = JSON.parse(acc7)
      logMe("User","Go button on seventh created account","Homepage","name: " +data.name+ " / email: " +data.user+ " / password: "+data.pass);
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
        logMe("User","search box typing","Homepage","search input: "+filter);
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
  if ($('.p5').css("display","block")){
    shortcut.add("Enter",function() {
      // logMe("User","clipboard","system clipbaoard"," clipboard: "+ ClipboardEvent.clipboardData);
      // alert("hello")
    });
  }


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
///// log for each element
  // $('div').on('click', function(e) {
  //   logContentPage3 = "--";
  //   var inputVal1 = document.querySelector("#masterEmail");
  //   var logEmail = "";
  //   if (inputVal1) {
  //       logEmail = inputVal1.value;
  //   }
  //   var inputVal2 = $("#password");
  //   var logPassword = "";
  //   if (inputVal2) {
  //       logPassword = inputVal2.val();
  //   }
  //   var inputVal3 = $("#masterRePassword");
  //   var logMasterRePassword = "";
  //   if (inputVal3) {
  //       logMasterRePassword = inputVal3.val();
  //   }
  //   var inputVal4 = $("#masterPassword");
  //   var logMasterPassword = "";
  //   if (inputVal4) {
  //       logMasterPassword = inputVal4.val();
  //   }
  //   var inputVal5 = document.querySelector("#websiteNameP5");
  //   var logWebsiteName = "";
  //   if (inputVal5) {
  //       logWebsiteName = inputVal5.value;
  //   }
  //   // logUsername = document.querySelector("#masterRePassword").value;
  //   var logUsername = "-";
  //   // var logPasswordP9 = document.querySelector("#editPasswordPageInput").value;
  //   var inputVal6 = $(".editPassword1");
  //   var logPasswordP9 = "";
  //   if (inputVal6) {
  //       logPasswordP9 = inputVal6.val();
  //   }
  //   var inputVal7 = $(".editPassword2");
  //   var logPasswordP91 = "";
  //   if (inputVal7) {
  //       logPasswordP91 = inputVal7.val();
  //       if (logPasswordP91 != undefined) {
  //         logContentPage3 = "password acc2= " + logPasswordP91 ;
  //
  //       }
  //   }
  //   var inputVal8 = $(".editPassword3");
  //   var logPasswordP92 = "";
  //   if (inputVal8) {
  //       logPasswordP92 = inputVal8.val();
  //       if (logPasswordP92 != undefined) {
  //          logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92;
  //
  //       }
  //   }
  //   var inputVal9 = $(".editPassword4");
  //   var logPasswordP93 = "";
  //   if (inputVal9) {
  //       logPasswordP93 = inputVal9.val();
  //       if (logPasswordP93 != undefined) {
  //          logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 ;
  //
  //       }
  //   }
  //   var inputVal10 = $(".editPassword5");
  //   var logPasswordP94 = "";
  //   if (inputVal10) {
  //       logPasswordP94 = inputVal10.val();
  //       if (logPasswordP94 != undefined) {
  //          logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 + "password acc5= " + logPasswordP94;
  //
  //       }
  //   }
  //   var inputVal11 = $(".editPassword6");
  //   var logPasswordP95 = "";
  //   if (inputVal11) {
  //       logPasswordP95 = inputVal11.val();
  //       if (logPasswordP95 != undefined) {
  //          logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 + "password acc5= " + logPasswordP94 + "password acc6= " + logPasswordP95;
  //          // alert("here");
  //       }
  //   }
  //   var inputVal12 = $("#loginEmail");
  //   var logLoginEmail = "";
  //   if (inputVal12) {
  //       logLoginEmail = inputVal12.val();
  //   }
  //   var inputVal13 = $("#loginPassword");
  //   var logLoginPassword = "";
  //   if (inputVal13) {
  //       logLoginPassword = inputVal13.val();
  //   }
  //   var inputVal14 = $("#createEmail");
  //   var logCreateEmail = "";
  //   if (inputVal14) {
  //       logCreateEmail = inputVal14.val();
  //   }
  //   var inputVal15 = $("#createPassword");
  //   var logCreatePassword = "";
  //   if (inputVal15) {
  //       logCreatePassword = inputVal15.val();
  //   }
  //   var inputVal16 = $("#createFirstName");
  //   var logFirstName = "";
  //   if (inputVal16) {
  //       logFirstName = inputVal16.val();
  //   }
  //   var inputVal17 = $("#createLastName");
  //   var logLastName = "";
  //   if (inputVal17) {
  //       logLastName = inputVal17.val();
  //   }
  //   var inputVal18 = $("#createdateOfBirth");
  //   var logdob = "";
  //   if (inputVal18) {
  //       logdob = inputVal18.val();
  //   }
  //
  //
  //   logContentPage1 = "Page1: " + "Email= " + logEmail + " - " + "Password= " + logPassword + " - " + "rePassword= " + logMasterRePassword +
  //                     "Page2: " + "masterPassword= " + logMasterPassword +
  //                     "Page6: " + "websiteName= " + logWebsiteName;
  //
  //   logContentPage2 = "Page9: " + "username= " + logUsername + "password acc1= " + logPasswordP9 ;
  //
  //   // logContentPage3 = "password acc2= " + logPasswordP91 + "password acc3= " + logPasswordP92 + "password acc4= " + logPasswordP93 + "password acc5= " + logPasswordP94 + "password acc6= " + logPasswordP95;
  //
  //   logContentPage4 =
  //                     "loginPage: " + "Email= " + logLoginEmail + "Password= " + logLoginPassword +
  //                     "createPage: " + "Email= " + logCreateEmail + "Password= " + logCreatePassword + "FirstName= " + logFirstName + "LastName= " + logLastName + "DateOfBirth= " + logdob;
  //
  //     var newItem =
  //     {
  //      'class': $(this).attr('class'),
  //      'content': logContentPage1,
  //      'content1': logContentPage2,
  //      'content2': logContentPage3,
  //      'content3': logContentPage4,
  //      'timestamp': Date.now()
  //     };
  //
  //      oldItems.push(newItem);
  //
  //      localStorage.setItem('itemsArray', JSON.stringify(oldItems));
  //      // alert();
  //      e.stopPropagation();
  // });
});

// Search


// Pass Gen
function generatePassword() {
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


  //   charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+|}{}ABCDEFGHIJKLM^&*()_+|NOPQRSTUVWXYZ0123456789!@#$%^&*()_+|}{}",
  //   retVal = "";
  // for (var i = 0, n = charset.length; i < length; ++i) {
  //   retVal += charset.charAt(Math.floor(Math.random() * n));
  // }
  var length = 20
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
  logMe("System","generate password","generete passwoed","value: "+password);
  return password;
  // return retVal;
}
// Pass Gen

var websiteP;



var number;
// Email validation
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  logMe("System","validate email","validate email","value: "+re.test(email));
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
    logMe("System","render page","masterPassword confirmation","value: change page to homepage");

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
  logMe("System","Page change","Create ByPass account","Page changed from \"Create ByPass account\" to \"Confirm master password\"");
    $('#p1').hide(500);
    document.getElementById("p2").style.display = "block";



  // $('div').on('click', function(e) {
  // var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

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
  logMe("System","Page change","Confirm master password","Page changed from \"Confirm master password\" to \"Home page\"");
  // renderRows();
  $('#p2').hide(500);
  document.getElementById("p7").style.display = "block";
  if ($(".mp7_row").length == 0) {
    // $('.alt_page7').css('background-image', 'url(UI/p3-e.png)');
    var imageUrl = "UI/p3-e.png";

    $(".alt_page7").css("background-image", "url(" + imageUrl + ")");
  }else{
    var imageUrlnone = "UI/p3.png";
    $(".alt_page7").css("background-image", "url(" + imageUrlnone + ")");
  }
  $(".logout").each(function(index) {
    var logoutEmailforPage3 = localStorage.getItem("logoutEmailforPage3");

    this.innerHTML = "Logout: " + logoutEmailforPage3;
  });






    $(".row1").click(function() {
      logMe("User","First account - row1","Homepage","clicked");
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
  $(".rowq1").click(function() {
    logMe("User","First account - row1 - Setting button","Homepage","clicked");


    $('#p7').hide(500);
    $(".edit1").removeClass("off");
    $(".edit2").addClass("off");
    $(".edit3").addClass("off");
    $(".edit4").addClass("off");
    $(".edit5").addClass("off");
    $(".edit6").addClass("off");
    $(".mp9_back").addClass("off");

    // $("p").css("background-color", "yellow");
    document.getElementById("p9").style.display = "block";
    document.getElementById("p8").style.display = "none";
    // $( "detail1" ).removeClass( "off" ).addClass( "on" );

  });
    $(".detailEdit1").click(function() {
      logMe("User","First account - Detail button clicked","Account details page","");
      logMe("System","Page change","Homepage","Page changed from \"Home page\" to \"Account details page\"");
      var user1Radio = localStorage.getItem("radioUser1");
      if (user1Radio){
        $("."+"radiobtn"+user1Radio+"-1").attr("checked","checked");
      }

      // console.log("row1");
      $('#p8').hide(500);
      $(".edit1").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".detailDel1").click(function() {
      logMe("User","First account - Delete button on detail page","Account Details","Clicked");

      // console.log("row1");
      $('#p9').hide(500);
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
      logMe("User","First account - Delete from ByPass","Delete account ByPass","no");

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES1").click(function() {
      logMe("User","First account - Delete from ByPass","Delete account ByPass","yes");

      logMe("User","First account - Delete from website","Delete account Website","yes");

      n=$(".mp7_row_middle_down.row1").text();
      e=$(".mp7_row_middle_down.row1").text();
      p=$(".mp7_row_middle_down.row1").text();
      delPOST(n,e,p);
      deletePOSTCow(n,p,e);




      console.log("deleteAPIYES1");
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
              logMe("System","First Account - delete account from bypass","database delete request","success");

              console.log('Deleted...');
              // setTimeout(function() {
              //   win = window.close();
              // }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your records has been deleted both from the website and ByPass!");
      logMe("System","popup","First Account - delete account from bypass","Your records has been deleted both from the website and ByPass!");


      setTimeout(function() {
        logMe("System","close tab","window closed","");
        win = window.close();
      }, 1000);
      // win = window.close();
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
            logMe("System","save button","First Account - new password saved","new password: "+ updatedPass);

            updateWebsite = cursor.value.loginWebsite;
            if (updateWebsite.includes("amazon") || updateWebsite.includes("Amazon")) {
              editPOST("", cursor.value.loginEmail, updatedPass);
            } else if (updateWebsite.includes("webmail") || updateWebsite.includes("Webmail")) {
              editPOSTCow("",cursor.value.loginEmail,updatedPass);
            }


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
                logMe("System","save button","First Account - new password saved","new password: "+ updatedPass);

                win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      logMe("System","popup","Account edit","Your data has been saved!");
      logMe("System","close tab","window closed","");

      win = window.close();


    });
    $(".deleteAPINO1").click(function() {
      // console.log("row1");
      logMe("User","First account - Delete from website","Delete account Website","no");
      logMe("System","close tab","window closed","");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES1beta").click(function() {
      logMe("User","First account - Delete from website","Delete account Website","yes");

      console.log("deleteAPIYES1");
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
      // $(".row1").addClass("off");
      // objectStore.openCursor().onsuccess = function(event) {
      //   var cursor = event.target.result;
      //
      //   if (cursor) {
      //
      //     if (cursor.key == 1) {
      //       // alert("aaaa");
      //     // delPOST(cursor.loginEmail,cursor.loginEmail,cursor.loginPassword);
      //     // alert(cursor.loginEmail,cursor.loginEmail,cursor.loginPassword);
      //
      //       var request = cursor.delete();
      //       // var deleteAcc = {
      //       //   // masterEmail: masterEmail,
      //       //   loginEmail: cursor.value.loginEmail,
      //       //   loginPassword: updatedPass,
      //       //   loginWebsite: cursor.value.loginWebsite,
      //       //   login: "0",
      //       //   created: new Date().getTime()
      //       // }
      //       // var objectStoreRequest = objectStore.delete(deleteAcc);
      //
      //       // var request = objectStore.add(updated);
      //
      //       // const request = cursor.update(updatedPass);
      //       request.onsuccess = function() {
      //         console.log('Deleted...');
      //
      //         setTimeout(function() {
      //           // win = window.close();
      //         }, 1000);
      //       };
      //
      //     }
      //     cursor.continue();
      //   } else {
      //
      //   }
      // };
      logMe("System","popup","Delete account website","Your records has been deleted from website and ByPass too.");
      alert("Your records has been deleted from website and ByPass too.");
      // document.getElementById("mp10_el_api").style.display = "none";
      // document.getElementById("mp10_el_local").style.display = "block";
      // $('.mp10_edit_element').css("display", "none");
      // $('.mp10_edit_element2').css("display", "block");
      // $('.mp10_edit_element2').animate({marginTop: "-=100px"});
      // $('#mp10_jooje').show(500);

      // $("p").css("background-color", "yellow");

      // document.getElementById("mp10_el_api").style.display = "none";
      // $('#mp10_jooje').show(500);
      // document.getElementById("mp10_el_local").style.display = "block";
      win = window.close();
    });

    $(".page7_btn1").click(function() {
      logMe("User","Go button on first created account","Homepage","Clicked and login requested");
      container(1,"a", "a", "a",0);
    });
    $(".detailLogin1").click(function() {
      logMe("User","login button on first created account","Detail Page","Clicked and login requested");
      container(1,"a", "a", "a",0)
    });

    // $(".radiobtn1-1").prop(function () {
    //   alert($this.class());
    // })




  $("input[name='timePeriod']").click(function() {
    if(this.checked){
      radioCheck = $(this).attr('class');
      if (radioCheck.includes("radiobtn1-1"))
      {
        localStorage.setItem("radioUser1", 1);
        logMe("User","Automatic change passwrod function ","Account edit","Every 30 day");


      } else if (radioCheck.includes("radiobtn2-1")){

        localStorage.setItem("radioUser1", 2);
        logMe("User","Automatic change passwrod function ","Account edit","Every 60 day");


      } else if (radioCheck.includes("radiobtn3-1")){
        localStorage.setItem("radioUser1", 3);
        logMe("User","Automatic change passwrod function ","Account edit","Every 90 day");


      } else if (radioCheck.includes("radiobtn4-1")){

        localStorage.setItem("radioUser1", 4);
        logMe("User","Automatic change passwrod function ","Account edit","Every year");


      } else if (radioCheck.includes("radiobtn1-2")){

        localStorage.setItem("radioUser2", 1);
        logMe("User","Automatic change passwrod function ","Account edit","Every 30 day");


      } else if (radioCheck.includes("radiobtn2-2")){

        localStorage.setItem("radioUser2", 2);
        logMe("User","Automatic change passwrod function ","Account edit","Every 60 day");


      } else if (radioCheck.includes("radiobtn3-2")){
        localStorage.setItem("radioUser2", 3);
        logMe("User","Automatic change passwrod function ","Account edit","Every 60 day");

      } else if (radioCheck.includes("radiobtn4-2")){

        localStorage.setItem("radioUser2", 4);
        logMe("User","Automatic change passwrod function ","Account edit","Every year");


      } else if (radioCheck.includes("radiobtn1-3")){

        localStorage.setItem("radioUser3", 1);
        logMe("User","Automatic change passwrod function ","Account edit","Every 30 day");


      } else if (radioCheck.includes("radiobtn2-3")){

        localStorage.setItem("radioUser3", 2);
        logMe("User","Automatic change passwrod function ","Account edit","Every 60 day");


      } else if (radioCheck.includes("radiobtn3-3")){
        localStorage.setItem("radioUser3", 3);
        logMe("User","Automatic change passwrod function ","Account edit","Every 90 day");


      } else if (radioCheck.includes("radiobtn4-3")){

        localStorage.setItem("radioUser3", 4);
        logMe("User","Automatic change passwrod function ","Account edit","Every year");


      } else if (radioCheck.includes("radiobtn1-4")){

        localStorage.setItem("radioUser4", 1);
        logMe("User","Automatic change passwrod function ","Account edit","Every 30 day");


      } else if (radioCheck.includes("radiobtn2-4")){

        localStorage.setItem("radioUser4", 2);
        logMe("User","Automatic change passwrod function ","Account edit","Every 60 day");


      } else if (radioCheck.includes("radiobtn3-4")){
        localStorage.setItem("radioUser4", 3);
        logMe("User","Automatic change passwrod function ","Account edit","Every 90 day");


      } else if (radioCheck.includes("radiobtn4-4")){
        localStorage.setItem("radioUser4", 4);
        logMe("User","Automatic change passwrod function ","Account edit","Every year");

      }  else if (radioCheck.includes("radiobtn1-5")){

        localStorage.setItem("radioUser5", 1);
        logMe("User","Automatic change passwrod function ","Account edit","Every 30 day");


      } else if (radioCheck.includes("radiobtn2-5")){

        localStorage.setItem("radioUser5", 2);
        logMe("User","Automatic change passwrod function ","Account edit","Every 60 day");


      } else if (radioCheck.includes("radiobtn3-5")){
        localStorage.setItem("radioUser5", 3);
        logMe("User","Automatic change passwrod function ","Account edit","Every 90 day");


      } else if (radioCheck.includes("radiobtn4-5")){
        localStorage.setItem("radioUser5", 4);
        logMe("User","Automatic change passwrod function ","Account edit","Every year");

      }  else if (radioCheck.includes("radiobtn1-6")){

        localStorage.setItem("radioUser6", 1);
        logMe("User","Automatic change passwrod function ","Account edit","Every 30 day");


      } else if (radioCheck.includes("radiobtn2-6")){

        localStorage.setItem("radioUser6", 2);
        logMe("User","Automatic change passwrod function ","Account edit","Every 60 day");


      } else if (radioCheck.includes("radiobtn3-6")){
        localStorage.setItem("radioUser6", 3);
        logMe("User","Automatic change passwrod function ","Account edit","Every 90 day");


      } else if (radioCheck.includes("radiobtn4-6")){
        localStorage.setItem("radioUser6", 4);
        logMe("User","Automatic change passwrod function ","Account edit","Every year");

      }
    }
  });



  // $(".radiobtn1-1").click(function() {
  //   $('.radiobtn1-1').attr('checked', 'checked');
  //   $('.radiobtn2-1').removeAttr('checked');
  //   $('.radiobtn3-1').removeAttr('checked');;
  //   logMe("User","30 day option","edit account page","selected");
  // });
  // $(".radiobtn2-1").click(function() {
  //   $('.radiobtn2-1').attr('checked', 'checked');
  //   $('.radiobtn1-1').removeAttr('checked');
  //   $('.radiobtn3-1').removeAttr('checked');;
  //   logMe("User","60 day option","edit account page","selected");
  // });
  // $(".radiobtn3-1").click(function() {
  //   $('.radiobtn3-1').attr('checked', 'checked');
  //   $('.radiobtn2-1').removeAttr('checked');
  //   $('.radiobtn1-1').removeAttr('checked');;
  //   logMe("User","90 day option","edit account page","selected");
  //
  // });



    $(".row2").click(function() {
      logMe("User","Second account - row2","Homepage","Clicked");

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
  $(".rowq2").click(function() {
    logMe("User","Second account - row2 - Setting button","Homepage","clicked");


    $('#p7').hide(500);
    $(".edit2").removeClass("off");
    $(".edit1").addClass("off");
    $(".edit3").addClass("off");
    $(".edit4").addClass("off");
    $(".edit5").addClass("off");
    $(".edit6").addClass("off");
    $(".mp9_back").addClass("off");

    // $("p").css("background-color", "yellow");
    document.getElementById("p9").style.display = "block";
    document.getElementById("p8").style.display = "none";
    // $( "detail1" ).removeClass( "off" ).addClass( "on" );

  });
    $(".detailEdit2").click(function() {
      logMe("User","Second account - row2 clicked","Account details page","");
      logMe("System","Page change","Homepage","Page changed from \"Home page\" to \"Account details page\"");

      var user2Radio = localStorage.getItem("radioUser2");
      if (user2Radio){
        $("."+"radiobtn"+user2Radio+"-2").attr("checked","checked");
      }
      // console.log("row1");
      $('#p8').hide(500);
      $(".edit2").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".page7_btn2").click(function() {
      logMe("User","Go button on second created account","Homepage","Clicked and login requested");
      container(2,"a", "a", "a",0);
    });
    $(".detailLogin2").click(function() {
      logMe("User","login button on second created account","Detail Page","Clicked and login requested");
      container(2,"a", "a", "a",0)
    });
    $(".detailDel2").click(function() {
      logMe("User","Second account - Delete button on detail page","Account Details","Clicked");

      // console.log("row1");
      $('#p9').hide(500);
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
      logMe("User","Second account - Delete from ByPass","Delete account ByPass","no");

      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES2").click(function() {
      logMe("User","Second account - Delete from ByPass","Delete account ByPass","yes");
      logMe("User","Second account - Delete from website","Delete account Website","yes");

      n=$(".mp7_row_middle_down.row2").text();
      e=$(".mp7_row_middle_down.row2").text();
      p=$(".mp7_row_middle_down.row2").text();
      delPOST(n,e,p);
      deletePOSTCow(n,p,e);

      console.log("deleteAPIYES2");
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
      alert("Your records has been deleted from both the website and ByPass.");
      logMe("System","popup","Second Account - delete account from bypass","Your records has been deleted from both the website and ByPass.");

      // win = window.close();

      setTimeout(function() {
        logMe("System","close tab","window closed","");
        win = window.close();
      }, 1000);
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
            var updatedPass = cursor.value.loginPassword;
            logMe("System","save button","Second Account - new password saved","new password: "+ updatedPass);

            console.log(cursor.value.loginPassword);
            cursor.value.loginPassword = document.querySelector(".editPassword2").value;
            var updatedPass = cursor.value.loginPassword;

            updateWebsite = cursor.value.loginWebsite;
            if (updateWebsite.includes("amazon") || updateWebsite.includes("Amazon")) {
              editPOST("", cursor.value.loginEmail, updatedPass);
            } else if (updateWebsite.includes("webmail") || updateWebsite.includes("Webmail")) {
              editPOSTCow("",cursor.value.loginEmail,updatedPass);
            }
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
                logMe("System","save button","Second Account - new password saved","new password: "+ updatedPass);
                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      logMe("System","popup","Account edit","Your data has been saved!");
      logMe("System","close tab","window closed","");
      win = window.close();


    });
    $(".deleteAPINO2").click(function() {
      logMe("User","Second account - Delete from website","Delete account Website","no");
      logMe("System","close tab","window closed","");
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES2beta").click(function() {
      logMe("User","Second account - Delete from website","Delete account Website","yes");
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
      // $(".row2").addClass("off");
      logMe("System","popup","Delete account website","Your records has been deleted from both the website and ByPass.");
      alert("Your records has been deleted from both the website and ByPass.");

      // document.getElementById("mp10_el_api").style.display = "none";
      // document.getElementById("mp10_el_local").style.display = "block";
      // $('#mp10_el_api').hide(500);
      // $('#mp10_el_api').css("display", "none");
      // $('#mp10_el_local').css("display", "block");
      // $("#mp10_el_local").animate({marginTop: "-=100px"});
      // $('#mp10_jooje').show(500);
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });


    $(".row3").click(function() {
      logMe("User","Third account - row3","Homepage","Clicked");

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
  $(".rowq3").click(function() {
    logMe("User","Third account - row3 - Setting button","Homepage","clicked");


    $('#p7').hide(500);
    $(".edit3").removeClass("off");
    $(".edit2").addClass("off");
    $(".edit1").addClass("off");
    $(".edit4").addClass("off");
    $(".edit5").addClass("off");
    $(".edit6").addClass("off");
    $(".mp9_back").addClass("off");

    // $("p").css("background-color", "yellow");
    document.getElementById("p9").style.display = "block";
    document.getElementById("p8").style.display = "none";
    // $( "detail1" ).removeClass( "off" ).addClass( "on" );

  });
    $(".detailEdit3").click(function() {
      logMe("User","Third account - row3 clicked","Account details page","");
      logMe("System","Page change","Homepage","Page changed from \"Home page\" to \"Account details page\"");

      var user3Radio = localStorage.getItem("radioUser3");
      if (user3Radio){
        $("."+"radiobtn"+user3Radio+"-3").attr("checked","checked");
      }
      // console.log("row1");
      $('#p8').hide(500);
      $(".edit3").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".page7_btn3").click(function() {
      logMe("User","Go button on third created account","Homepage","Clicked and login requested");
      container(3,"a", "a", "a",0);
    });
    $(".detailLogin3").click(function() {
      logMe("User","login button on third created account","Detail Page","Clicked and login requested");
      container(3,"a", "a", "a",0)
    });
    $(".detailDel3").click(function() {
      logMe("User","Third account - Delete button on detail page","Account Details","Clicked");

      // console.log("row1");
      $('#p9').hide(500);
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
      logMe("User","Third account - Delete from ByPass","Delete account ByPass","no");

      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES3").click(function() {
      logMe("User","Third account - Delete from ByPass","Delete account ByPass","yes");

      logMe("User","Third account - Delete from website","Delete account Website","yes");

      n=$(".mp7_row_middle_down.row3").text();
      e=$(".mp7_row_middle_down.row3").text();
      p=$(".mp7_row_middle_down.row3").text();
      delPOST(n,e,p);
      deletePOSTCow(n,p,e);

      console.log("deleteAPIYES3");
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
      alert("Your records has been deleted from website and ByPass too.");
      logMe("System","popup","Third Account - delete account from bypass","Your records has been deleted from both the website and ByPass.");

      // win = window.close();

      setTimeout(function() {
        logMe("System","close tab","window closed","");
        win = window.close();
      }, 1000);
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
            var updatedPass = cursor.value.loginPassword;
            logMe("System","save button","Third Account - new password saved","new password: "+ updatedPass);

            console.log(cursor.value.loginPassword);
            cursor.value.loginPassword = document.querySelector(".editPassword3").value;
            var updatedPass = cursor.value.loginPassword;

            updateWebsite = cursor.value.loginWebsite;
            if (updateWebsite.includes("amazon") || updateWebsite.includes("Amazon")) {
              editPOST("", cursor.value.loginEmail, updatedPass);
            } else if (updateWebsite.includes("webmail") || updateWebsite.includes("Webmail")) {
              editPOSTCow("",cursor.value.loginEmail,updatedPass);
            }
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
                logMe("System","save button","Third Account - new password saved","new password: "+ updatedPass);

                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      logMe("System","popup","Account edit","Your data has been saved!");
      logMe("System","close tab","window closed","");
      win = window.close();

    });
    $(".deleteAPINO3").click(function() {
      logMe("User","Third account - Delete from website","Delete account Website","no");
      logMe("System","close tab","window closed","");
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES3beta").click(function() {
      logMe("User","Third account - Delete from website","Delete account Website","yes");

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
      // $(".row3").addClass("off");
      logMe("System","popup","Delete account website","Your records has been deleted from both the website and ByPass.");
      alert("Your records has been deleted from both the website and ByPass.");
      //
      // document.getElementById("mp10_el_api").style.display = "none";
      // document.getElementById("mp10_el_local").style.display = "block";
      // $('#mp10_el_api').hide(500);
      // $('#mp10_el_api').css("display", "none");
      // $('#mp10_el_local').css("display", "block");
      // $("#mp10_el_local").animate({marginTop: "-=100px"});
      // $('#mp10_jooje').show(500);
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });


    $(".row4").click(function() {
      logMe("User","Forth account - row4","Homepage","");

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
  $(".rowq4").click(function() {
    logMe("User","Forth account - row4 - Setting button","Homepage","clicked");


    $('#p7').hide(500);
    $(".edit4").removeClass("off");
    $(".edit2").addClass("off");
    $(".edit3").addClass("off");
    $(".edit1").addClass("off");
    $(".edit5").addClass("off");
    $(".edit6").addClass("off");
    $(".mp9_back").addClass("off");

    // $("p").css("background-color", "yellow");
    document.getElementById("p9").style.display = "block";
    document.getElementById("p8").style.display = "none";
    // $( "detail1" ).removeClass( "off" ).addClass( "on" );

  });
    $(".detailEdit4").click(function() {
      logMe("User","Forth account - row4 clicked","Account details page","");
      logMe("System","Page change","Homepage","Page changed from \"Home page\" to \"Account details page\"");

      var user4Radio = localStorage.getItem("radioUser4");
      if (user4Radio){
        $("."+"radiobtn"+user4Radio+"-4").attr("checked","checked");
      }

      // console.log("row1");
      $('#p8').hide(500);
      $(".edit4").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".page7_btn4").click(function() {
      logMe("User","Go button on forth created account","Homepage","Clicked and login requested");
      container(4,"a", "a", "a",0);
    });
    $(".detailLogin4").click(function() {
      logMe("User","login button on forth created account","Detail Page","Clicked and login requested");
      container(4,"a", "a", "a",0)
    });
    $(".detailDel4").click(function() {
      logMe("User","Forth account - Delete button on detail page","Account Details","Clicked");

      // console.log("row1");
      $('#p9').hide(500);
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
      logMe("User","Forth account - Delete from ByPass","Delete account ByPass","no");

      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES4").click(function() {
      logMe("User","Forth account - Delete from ByPass","Delete account ByPass","yes");
      logMe("User","Forth account - Delete from website","Delete account Website","yes");

      n=$(".mp7_row_middle_down.row4").text();
      e=$(".mp7_row_middle_down.row4").text();
      p=$(".mp7_row_middle_down.row4").text();
      delPOST(n,e,p);
      deletePOSTCow(n,p,e);

      console.log("deleteAPIYES1");
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
      alert("Your records has been deleted from website and ByPass too.");
      logMe("System","popup","Second Account - delete account from bypass","Your records has been deleted from both the website and ByPass.");

      // win = window.close();

      setTimeout(function() {
        logMe("System","close tab","window closed","");
        win = window.close();
      }, 1000);

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
            var updatedPass = cursor.value.loginPassword;
            logMe("System","save button","Account edit","new password: "+ updatedPass);

            console.log(cursor.value.loginPassword);
            cursor.value.loginPassword = document.querySelector(".editPassword4").value;
            var updatedPass = cursor.value.loginPassword;

            updateWebsite = cursor.value.loginWebsite;
            if (updateWebsite.includes("amazon") || updateWebsite.includes("Amazon")) {
              editPOST("", cursor.value.loginEmail, updatedPass);
            } else if (updateWebsite.includes("webmail") || updateWebsite.includes("Webmail")) {
              editPOSTCow("",cursor.value.loginEmail,updatedPass);
            }
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
                logMe("System","save button","Account edit","new password: "+ updatedPass);

                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      logMe("System","popup","Account edit","Your data has been saved!");
      logMe("System","close tab","window closed","");
      win = window.close();

    });
    $(".deleteAPINO4").click(function() {
      logMe("User","Second account - Delete from website","Delete account Website","no");
      logMe("System","close tab","window closed","");
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES4beta").click(function() {
      logMe("User","Forth account - Delete from website","Delete account Website","yes");

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
      // $(".row4").addClass("off");
      logMe("System","popup","Delete account website","Your records has been deleted from both the website and ByPass.");
      alert("Your records has been deleted from both the website and ByPass.");
      // document.getElementById("mp10_el_api").style.display = "none";
      // document.getElementById("mp10_el_local").style.display = "block";
      // $('#mp10_el_api').hide(500);
      // document.getElementById("mp10_el_api").style.display = "none";
      // $('#mp10_el_local').show(500);
      // $('#mp10_el_api').css("display", "none");
      // $('#mp10_el_local').css("display", "block");
      // $("#mp10_el_local").animate({marginTop: "-=100px"});
      // $('#mp10_jooje').show(500);
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });

    $(".row5").click(function() {
      logMe("User","Fifth account - row5","Homepage","Clicked");

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
  $(".rowq5").click(function() {
    logMe("User","Fifth account - row5 - Setting button","Homepage","clicked");


    $('#p7').hide(500);
    $(".edit5").removeClass("off");
    $(".edit2").addClass("off");
    $(".edit3").addClass("off");
    $(".edit4").addClass("off");
    $(".edit1").addClass("off");
    $(".edit6").addClass("off");
    $(".mp9_back").addClass("off");

    // $("p").css("background-color", "yellow");
    document.getElementById("p9").style.display = "block";
    document.getElementById("p8").style.display = "none";
    // $( "detail1" ).removeClass( "off" ).addClass( "on" );

  });
    $(".detailEdit5").click(function() {
      logMe("User","Fifth account - row5 clicked","Account details page","");
      logMe("System","Page change","Homepage","Page changed from \"Home page\" to \"Account details page\"");

      var user5Radio = localStorage.getItem("radioUser5");
      if (user5Radio){
        $("."+"radiobtn"+user5Radio+"-5").attr("checked","checked");
      }
      // console.log("row1");
      $('#p8').hide(500);
      $(".edit5").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".page7_btn5").click(function() {
      logMe("User","Go button on fifth created account","Homepage","Clicked and login requested");

      container(5,"a", "a", "a",0);
    });
    $(".detailLogin5").click(function() {
      logMe("User","login button on second created account","Detail Page","Clicked and login requested");

      container(5,"a", "a", "a",0)
    });
    $(".detailDel5").click(function() {
      logMe("User","Fifth account - Delete button on detail page","Account Details","Clicked");

      // console.log("row1");
      $('#p9').hide(500);
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
      logMe("User","Fifth account - Delete from ByPass","Delete account ByPass","no");

      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES5").click(function() {
      logMe("User","Fifth account - Delete from ByPass","Delete account ByPass","yes");
      logMe("User","Fifth account - Delete from website","Delete account Website","yes");

      n=$(".mp7_row_middle_down.row5").text();
      e=$(".mp7_row_middle_down.row5").text();
      p=$(".mp7_row_middle_down.row5").text();
      delPOST(n,e,p);
      deletePOSTCow(n,p,e);


      console.log("deleteAPIYES5");
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
      alert("Your records has been deleted from website and ByPass too.");
      logMe("System","popup","Second Account - delete account from bypass","Your records has been deleted from both the website and ByPass.");

      // win = window.close();

      setTimeout(function() {
        logMe("System","close tab","window closed","");
        win = window.close();
      }, 1000);
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
            var updatedPass = cursor.value.loginPassword;
            logMe("System","save button","Fifth Account - new password saved","new password: "+ updatedPass);

            console.log(cursor.value.loginPassword);
            cursor.value.loginPassword = document.querySelector(".editPassword5").value;
            var updatedPass = cursor.value.loginPassword;

            updateWebsite = cursor.value.loginWebsite;
            if (updateWebsite.includes("amazon") || updateWebsite.includes("Amazon")) {
              editPOST("", cursor.value.loginEmail, updatedPass);
            } else if (updateWebsite.includes("webmail") || updateWebsite.includes("Webmail")) {
              editPOSTCow("",cursor.value.loginEmail,updatedPass);
            }
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
                logMe("System","save button","Fifth Account - new password saved","new password: "+ updatedPass);

                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      logMe("System","popup","Account edit","Your data has been saved!");
      logMe("System","close tab","window closed","");
      win = window.close();

    });
    $(".deleteAPINO5").click(function() {
      logMe("User","Fifth account - Delete from website","Delete account Website","no");
      logMe("System","close tab","window closed","");
      // console.log("row1");
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES5beta").click(function() {
      logMe("User","Fifth account - Delete from website","Delete account Website","yes");

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
      // $(".row5").addClass("off");
      logMe("System","popup","Delete account website","Your records has been deleted from both the website and ByPass.");
      alert("Your records has been deleted from both the website and ByPass.");
      // document.getElementById("mp10_el_api").style.display = "none";
      // document.getElementById("mp10_el_local").style.display = "block";
      // $('#mp10_el_api').hide(500);
      // $('#mp10_el_api').css("display", "none");
      // $('#mp10_el_local').css("display", "block");
      // $("#mp10_el_local").animate({marginTop: "-=100px"});
      // $('#mp10_jooje').show(500);
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });

    $(".row6").click(function() {
      logMe("User","Sixth account - row6","Homepage","");

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
  $(".rowq6").click(function() {
    logMe("User","Sixth account - row6 - Setting button","Homepage","clicked");


    $('#p7').hide(500);
    $(".edit6").removeClass("off");
    $(".edit2").addClass("off");
    $(".edit3").addClass("off");
    $(".edit4").addClass("off");
    $(".edit5").addClass("off");
    $(".edit1").addClass("off");
    $(".mp9_back").addClass("off");

    // $("p").css("background-color", "yellow");
    document.getElementById("p9").style.display = "block";
    document.getElementById("p8").style.display = "none";
    // $( "detail1" ).removeClass( "off" ).addClass( "on" );

  });
    $(".detailEdit6").click(function() {
      logMe("User","Sixth account - row6 clicked","Account details page","");
      logMe("System","Page change","Homepage","Page changed from \"Home page\" to \"Account details page\"");

      var user6Radio = localStorage.getItem("radioUser6");
      if (user6Radio){
        $("."+"radiobtn"+user6Radio+"-6").attr("checked","checked");
      }

      // console.log("row1");
      $('#p8').hide(500);
      $(".edit6").removeClass("off");
      // $("p").css("background-color", "yellow");
      document.getElementById("p9").style.display = "block";
      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".page7_btn6").click(function() {
      logMe("User","Go button on sixth created account","Homepage","Clicked and login requested");
      container(6,"a", "a", "a",0)
    });
    $(".detailLogin6").click(function() {
      logMe("User","login button on sixth","Detail Page","Clicked and login requested");
      container(6,"a", "a", "a",0)
    });
    $(".detailDel6").click(function() {
      logMe("User","Sixth account - Delete button on detail page","Account Details","Clicked");

      // console.log("row1");
      $('#p9').hide(500);
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
      logMe("User","Sixth account - Delete from ByPass","Delete account ByPass","no");

      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES6").click(function() {
      logMe("User","Sixth account - Delete from ByPass","Delete account ByPass","yes");
      logMe("User","Sixth account - Delete from website","Delete account Website","yes");

      n=$(".mp7_row_middle_down.row6").text();
      e=$(".mp7_row_middle_down.row6").text();
      p=$(".mp7_row_middle_down.row6").text();
      delPOST(n,e,p);
      deletePOSTCow(n,p,e);


      console.log("deleteAPIYES1");
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
      alert("Your records has been deleted from website and ByPass too.");
      logMe("System","popup","Sixth Account - delete account from bypass","Your records has been deleted from both the website and ByPass.");

      // win = window.close();

      setTimeout(function() {
        logMe("System","close tab","window closed","");

        win = window.close();
      }, 1000);
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
            var updatedPass = cursor.value.loginPassword;
            logMe("System","save button","Sixth Account - new password saved","new password: "+ updatedPass);

            console.log(cursor.value.loginPassword);
            cursor.value.loginPassword = document.querySelector(".editPassword6").value;
            var updatedPass = cursor.value.loginPassword;

            updateWebsite = cursor.value.loginWebsite;
            if (updateWebsite.includes("amazon") || updateWebsite.includes("Amazon")) {
              editPOST("", cursor.value.loginEmail, updatedPass);
            } else if (updateWebsite.includes("webmail") || updateWebsite.includes("Webmail")) {
              editPOSTCow("",cursor.value.loginEmail,updatedPass);
            }
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
                logMe("System","save button","Sixth Account - new password saved","new password: "+ updatedPass);

                // win = window.close();
              }, 1000);
            };

          }
          cursor.continue();
        } else {

        }
      };
      alert("Your data has been saved!")
      logMe("System","popup","Account edit","Your data has been saved!");
      logMe("System","close tab","window closed","");
      win = window.close();

    });
    $(".deleteAPINO6").click(function() {
      // console.log("row1");
      logMe("User","Sixth account - Delete from website","Delete account Website","no");
      logMe("System","close tab","window closed","");

      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });
    $(".deleteAPIYES6beta").click(function() {
      logMe("User","Sixth account - Delete from website","Delete account Website","yes");

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
      // $(".row6").addClass("off");
      logMe("System","popup","Delete account website","Your records has been deleted from both the website and ByPass.");
      alert("Your records has been deleted from both the website and ByPass.");
      // document.getElementById("mp10_el_api").style.display = "none";
      // document.getElementById("mp10_el_local").style.display = "block";
      // $('#mp10_el_api').hide(500);
      // $('#mp10_el_api').css("display", "none");
      // $('#mp10_el_local').css("display", "block");
      // $("#mp10_el_local").animate({marginTop: "-=100px"});
      // $('#mp10_jooje').show(500);
      win = window.close();

      // $( "detail1" ).removeClass( "off" ).addClass( "on" );

    });

    $(".mp8_back").click(function() {
      logMe("User","back button clicked","detail page to home page","");

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
      // logMe("User","home button clicked","detail page","");

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
      logMe("User","back button clicked","wizard page to home page","");

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
      // logMe("User","home button clicked","wizard page","");

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
      logMe("User","back button clicked","website name page to wizard page","");

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
      // logMe("User","home button clicked","Website name","");

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
      logMe("User","back button clicked","login or create page to website name page","");

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
      // logMe("User","home button clicked","login or create page","");

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
      logMe("User","back button clicked","edit page to detail page","");

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
      // logMe("User","home button clicked","edit page","");

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
      logMe("User","back button clicked","delete page to edit page","");

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
      // logMe("User","home button clicked","edit page","");

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
      logMe("User","First Account - genarate password button clicked","edit page",document.querySelector(".editPassword1").value);

    });
    $(".editPasswordPageInputToggle1").click(function() {

      var editPasswordPageInput = document.querySelector(".editPassword1");


      if (editPasswordPageInput.type === 'password') {

        logMe("User","Toggle-Password","Account edit","off");

        editPasswordPageInput.type = 'text';
      } else {
        logMe("User","Toggle-Password","Account edit","on");

        editPasswordPageInput.type = 'password';

      }

    });
    $(".changePass2").click(function() {
      logMe("User","Second Account - genarate password button clicked","edit page","");

      var gen = generatePassword();
      passInput = document.querySelector(".editPassword2");
      passInput.value = gen;
      console.log(gen);
      logMe("User","Second Account - genarate password button clicked","edit page",gen);



    });
    $(".editPasswordPageInputToggle2").click(function() {
      var editPasswordPageInput = document.querySelector(".editPassword2");


      if (editPasswordPageInput.type === 'password') {

        logMe("User","Toggle-Password","Account edit","off");

        editPasswordPageInput.type = 'text';
      } else {

        logMe("User","Toggle-Password","Account edit","on");

        editPasswordPageInput.type = 'password';

      }

    });
    $(".changePass3").click(function() {
      document.querySelector(".editPassword3").value = generatePassword();
      logMe("User","Third Account - genarate password button clicked","edit page","");
      logMe("User","Third Account - genarate password button clicked","edit page",document.querySelector(".editPassword3").value);


    });
    $(".editPasswordPageInputToggle3").click(function() {
      var editPasswordPageInput = document.querySelector(".editPassword3");


      if (editPasswordPageInput.type === 'password') {

        logMe("User","Toggle-Password","Account edit","off");

        editPasswordPageInput.type = 'text';
      } else {

        logMe("User","Toggle-Password","Account edit","on");

        editPasswordPageInput.type = 'password';

      }

    });
    $(".changePass4").click(function() {
      document.querySelector(".editPassword4").value = generatePassword();
      logMe("User","Forth Account - genarate password button clicked","edit page",document.querySelector(".editPassword4").value);


    });
    $(".editPasswordPageInputToggle4").click(function() {
      var editPasswordPageInput = document.querySelector(".editPassword4");


      if (editPasswordPageInput.type === 'password') {

        logMe("User","Toggle-Password","Account edit","off");

        editPasswordPageInput.type = 'text';
      } else {

        logMe("User","Toggle-Password","Account edit","on");

        editPasswordPageInput.type = 'password';

      }

    });
    $(".changePass5").click(function() {
      document.querySelector(".editPassword5").value = generatePassword();
      logMe("User","Fifth Account - genarate password button clicked","edit page",document.querySelector(".editPassword5").value);


    });
    $(".editPasswordPageInputToggle5").click(function() {
      var editPasswordPageInput = document.querySelector(".editPassword5");


      if (editPasswordPageInput.type === 'password') {

        logMe("User","Toggle-Password","Account edit","off");

        editPasswordPageInput.type = 'text';
      } else {

        logMe("User","Toggle-Password","Account edit","on");

        editPasswordPageInput.type = 'password';

      }

    });
    $(".changePass6").click(function() {
      document.querySelector(".editPassword6").value = generatePassword();
      logMe("User","Sixth Account - genarate password button clicked","edit page",document.querySelector(".editPassword6").value);


    });
    $(".editPasswordPageInputToggle6").click(function() {
      var editPasswordPageInput = document.querySelector(".editPassword6");


      if (editPasswordPageInput.type === 'password') {

        logMe("User","Toggle-Password","Account edit","off");

        editPasswordPageInput.type = 'text';
      } else {
        logMe("User","Toggle-Password","Account edit","on");

        editPasswordPageInput.type = 'password';

      }

    });


    // $("#logout8").on("click", logout);
    // $(".logout").each(function(index) {
    //     $(this).on("click", function(){
    //         logout();
    //     });
    // });
    // $(".logout").each(function(index) {
        $(".logout").on("click", function(){
          logMe("User","logout button clicked","","");

          logout();
        });
    // });



}

function change2to3() {
  // document.getElementById("p1").style.display = "none";
  $('#p2').hide(500);

  document.getElementById("p3").style.display = "block";
  // $(".logout").each(function(index) {
  //   var logoutEmailforPage3 = localStorage.getItem("logoutEmailforPage3");
  //   alert(logoutEmailforPage3);
  //   this.innerHTML = "Logout: " + logoutEmailforPage3;
  // });
  logMe("System","Page change","Confirm master password","Page changed from \"Confirm master password\" to \"Home page\"");

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
  logMe("User","Add button","Home page","clicked");
  logMe("System","page change","Home page","Page changed from \"Home page\" to \"Wizard page\"");

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
  // logMe("User","Step1","Wizard","clicked");
  logMe("System","Page change","Wizard","Page changed from \"Wizard page\" to \"Website name\"");

  // document.getElementById("p1").style.display = "none";
  $('#p4').hide(500);
  document.getElementById("p5").style.display = "block";
  localStorage.setItem('checkFlag',1);
  // if (localStorage.getItem('checkFlag') == 1) {
  //   shortcut.add("Enter", function () {
  //     alert(localStorage.getItem('checkFlag'));
  //   });
  // } else {
  // }
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
  // logMe("User","Website name input","Website name","clicked");
  logMe("User","Next button","Website name","clicked");
  logMe("System","Page change","Website name","Page changed from \"Website name\" to \"Login/Create account\"");

  // document.getElementById("p1").style.display = "none";
  document.getElementById("p5").style.display = "none";
  localStorage.setItem('checkFlag',0);

  websiteP = $("#websiteNameP5").val();
  localStorage.setItem("websiteDup", websiteP)
  logMe("System","website name input","enter website name page",websiteP);



  if (websiteP != "") {
    if (websiteP.includes("amazon") || websiteP.includes("Amazon") || websiteP.includes("webmail") || websiteP.includes("Webmail")) {
      chrome.storage.sync.set({
        'websiteP': websiteP
      }, function () {
        console.log('Settings saved');
      });

      chrome.storage.sync.get(['websiteP'], function (items) {
        // console.log('Saved ' + items.websiteP);
        websiteBold = document.querySelector(".websiteBold");
        websiteBold.innerText = items.websiteP;
        websiteBold1 = document.querySelector(".websiteBold1");
        websiteBold1.innerText = items.websiteP;
      });
      $('#p5').hide(500);
      document.getElementById("p6").style.display = "block";
    } else {
      // alert("sorry :( \nIt seems we do not support creating an account on this website.")
      chrome.storage.sync.set({
        'websiteP': websiteP
      }, function () {
        console.log('Settings saved');
      });

      chrome.storage.sync.get(['websiteP'], function (items) {
        // console.log('Saved ' + items.websiteP);
        websiteBold = document.querySelector(".websiteBold");
        websiteBold.innerText = items.websiteP;
        websiteBold1 = document.querySelector(".websiteBold1");
        websiteBold1.innerText = items.websiteP;
      });
      $('#p5').hide(500);
      document.getElementById("p6").style.display = "block";
    }
  } else {
    alert("Please enter website name!");
    logMe("System","website name alert","enter website name page","Please enter website name");

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
  var websiteCheck = localStorage.getItem("websiteDup")
  logMe("User","Create account button","login or create page","Clicked");
  logMe("System","Create account button","login or create page",websiteCheck);

  if (  websiteCheck.includes("amazon") || websiteCheck.includes("Amazon") || websiteCheck.includes("webmail") || websiteCheck.includes("Webmail"))
  {
    logMe("System","Page change","Login/Create account","Create(options) tab opened");

    openInNewTab("login.html");

  } else {
    alert("sorry :( \nIt seems we do not support creating an account on this website.")
    logMe("System","create account  alert","create account page","sorry :( It seems we do not support creating an account on this website.");
    logMe("System","close tab","window closed","");

    win = window.close();

  }

}

function option1Tobackground() {
  console.log("option1Tobackground");
  // chrome.tabs.create({'url': "/option1.html"})
  logMe("User","login button","Login/Create account","clicked");
  logMe("System","Page change","Login/Create account","Login(options) tab opened");


  openInNewTab("create.html");
}
var win;

function openInNewTab(url) {
  win = window.open(url, '_blank');


  // win.focus();
}

function closeTab() {
  logMe("System","popup","Option Page","Your account has been added to ByPass!");
  alert("Your account has been added to ByPass!")

  setTimeout(function() {
    logMe("System","close tab","window closed","");
    win = window.close();
  }, 1000);
}
// Page transitions

// DB

$(document).ready(function() {







  $(".createTitle").innerText = "Create an account on " + websiteP;
  $(".loginTitle").innerText = "Add your " + websiteP + "account to ByPass by filling the form below";

  $(".mp8").click(function() {
    logMe("User","Home button clicked","Account Details","Clicked");

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
  logMe("User","Home button clicked","wizard page","");
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
  logMe("User","Home button clicked","enter website page","");

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
  logMe("User","Home button clicked","create or login page","");

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
  logMe("User","Home button clicked","edit account page","");

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
  // $(".logout").on("click", logout);



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
  localStorage.setItem("logoutEmailforPage3", masterEmail);


  logMe("User","Create ByPass Account button","Create ByPass Account","master Email: " + masterEmail + " / password: " + password + " / masterRePassword: " + masterRePassword);

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
           logMe("System","popup","Creating Bypass Account","All the fields required !  " + "master Email: " + masterEmail + "password: " + password + "masterRePassword: " + masterRePassword );

         }
          else
          {

            var email = $("#masterEmail").val();
            // alert(validateEmail(email));
            // alert(strength);
            if (validateEmail(email)) {
              logMe("System","Email Validation","Creating Bypass Account","TRUE");

              // alert("Email is valid");
               if (strength =="4") {
                 // alert("Value is 4");
                 addMaster();
                 change1to2();
              // e.preventDefault();

            } else {
                 logMe("System","popup","Creating Bypass Account","Please choose a strong password!  " + "master Email: " + masterEmail + "password: " + password + "masterRePassword: " + masterRePassword );

                 alert("Please choose a strong password!");

            }

          }
            else {
              // if (strength != "4") {
              logMe("System","popup","Creating Bypass Account","Please enter a valid email.example@email.com  " + "master Email: " + masterEmail + "password: " + password + "masterRePassword: " + masterRePassword );
              alert("Please enter a valid email.\nexample@email.com");

            // }
            }
              // $result.text(email + " is not valid :(");
              // $result.css("color", "red");
            }
         }
         else {
      logMe("System","popup","Creating Bypass Account","Your passwords are not matched!  " + "master Email: " + masterEmail + "password: " + password + "masterRePassword: " + masterRePassword );
      alert("Your passwords are not matched!")
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

  if (pKey ==8 ) {
    console.log(store);
    console.log("time to do something different...");
  } else if (pKey == 7)
  {
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

  } else if (pKey == 5)
  {
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

  } else if (pKey == 6)
  {
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

  } else
    {
    let req = store.get(1);
    var flagss = localStorage.getItem("flag");
    req.onsuccess = function(event) {
      let note = event.target.result;
      if (flagss == 1) {
        console.log("masterPassword (success) Called...");
        localStorage.setItem("flag", 1);

        alert(flagss);
        alert(note);
        alert(note.masterPassword);
        alert(masterPassword);


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
        logMe("User","Confirm master password box","Confirm master password", masterPassword);
        logMe("User","Get access button","Confirm master password","DB master password: " + note.masterPassword + "user input master password" + masterPassword);

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
       alert("You entered a incorrect password...");
        logMe("User","Confirm master password box","Confirm master password", masterPassword);



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
  logMe("User","Create ByBass Account button ","create bypass account","Master Email: " + masterEmail + " / Master password: "+ password +" / Master confirm password: "+masterRePassword);

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
  logMe("User","auto check","masterpassword Confrim","ByPass extension clicked");
  logMe("System","auto check","Confirm master password","TRUE");

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

      logMe("User","create logout button","create bypass account page","Bypass logout email: " + note.masterEmail );

      console.log("user 1  found...");
      $(".logout").each(function(index) {
        localStorage.setItem("logoutEmail", note.masterEmail);
        this.innerHTML = "Logout: " + note.masterEmail;
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
  logMe("User","login account button clicked","create or login page","");

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
  if (validateEmail(loginEmail)) {
    logMe("User","Add to ByPass button","Login(options)","Email: "+ loginEmail + " / password: "+ loginPassword + " / website name: "+loginWebsite);
    logMe("System","Email Validation","Login(options)","TRUE");

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
  if (loginWebsite.includes("amazon") || loginWebsite.includes("Amazon") ) {
    logMe("System","Popup msg1","Login(options)","Your account has been added to ByPass! Do you want to login to your account right now? If yes click on OK and if not click on Cancel. Your account will be still added to ByPass.");

    var r = confirm("Your account has been added to ByPass! Do you want to login to your account right now? If yes click on OK and if not click on Cancel. Your account will be still added to ByPass.");
    if (r == true) {
      loginToPagePop("nothing", loginEmail, loginPassword);
      logMe("User","User response to popup msg","Login(options)","OK");

      setTimeout(function() {
        logMe("System","closeTab","Login(options)","");
        win = window.close();
      }, 1000);
    } else {
      logMe("User","User response to popup msg","Login(options)","CANCEL");
      logMe("System","closeTab","Login(options)","");

      closeTab();
    }
  } else {
    alert("Your account has been added to ByPass.");
    logMe("System","Popup msg2","Login(options)","Your account has been added to ByPass.");

    setTimeout(function() {
      logMe("User","User response to popup msg","Login(options)","OK");
      logMe("System","closeTab","Login(options)","True");
      win = window.close();

    }, 1000);
  }
}
else {
  alert("Enter valid email...");
    logMe("System","popup","Login(options)","Enter valid email...");

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
  var res = createEmail.split("@");
  var createFirstName = $("#createFirstName").val();
  var createLastName = $("#createLastName").val();
  var createdateOfBirth = $("#createdateOfBirth").val();


  console.log("Data of Create" + createEmail + "/" + createPassword + "/" + createWebsite);
  var transaction = db.transaction(["accounts"], "readwrite");
  var store = transaction.objectStore("accounts");

       if ($("#createFirstName").val() == "" ||  $("#createLastName").val() == "" ||  $("#createdateOfBirth").val() == "" ||  $("#createEmail").val() == "" ||  $("#createPassword").val() == "" ) {
         if (createWebsite.includes("webmail") || createWebsite.includes("Webmail") ||createWebsite !== "webmail") {
           logMe("User","website name entered","create account page","websitename:" + createWebsite );
           logMe("User","Create account button","create account page","clicked");

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
             logMe("User","Add to ByPass button","Create(options)","Email: "+ createEmail + " / password: "+ createPassword + " / website name: "+createWebsite);
             logMe("System","Email validation","create account page","True");


             function loginPOSTmailCow() {

               emailCreate = res[0]+"@webmail.com";
               // alert(createWebsite + " / " + createEmail + " / " + createPassword);
               // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
               // request.send("UserID=897987&FirstName=" + createName + "&LastName=nuAlle&Email=" + createEmail + "&Password=" + createPassword + "&Mobile=0123&BirthDay=01")
               // request.send("attr:{'local_part':demoooooo,'domain':montreal-events.com,'name':John Doe,'quota':100,'password':moohoo,'password2':moohoo,'active':1}")
               // alert(attr.local_part);
               // console.log(JSON.stringify(attr));
               // request.send(JSON.stringify(attr))

               var request = new XMLHttpRequest();

               request.open('POST', 'http://webmail.montreal-events.com/api/v1/add/mailbox');

               request.setRequestHeader('Content-Type', 'application/json');
               request.setRequestHeader('X-API-Key', '79DC3B-86B430-C222C7-8C9D02-6EEBCB');
               request.setRequestHeader('Access-Control-Allow-Origin','*');


               request.onreadystatechange = function () {
                 if (this.readyState === 4) {
                   console.log('Status:', this.status);
                   console.log('Headers:', this.getAllResponseHeaders());
                   console.log('Body:', this.responseText);
                   logMe("Webmail Server","request","create an account request to webmail","Success - Email: " +res[0]+ "@webmail.com / password: " +createPassword);
                   logMe("Webmail Server","request","create an account request to webmail","Server respond: " + this.response);
                 } else {
                   logMe("Webmail Server", "request", "create an account request to webmail", "Failure - Email: " + res[0] + "@webmail.com / password: " + createPassword);

                 }
               };

               var body = {"local_part":res[0],"domain":"webmail.com","name":"ByPass User","quota":"10","password":createPassword,"password2":createPassword,"active":"1"};

               request.send(JSON.stringify(body));
               // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
             }

               loginPOSTmailCow();






             logMe("User","Create and add to ByPass button","Create account options","Clikced / Email: "+ createEmail + " / password: "+ createPassword + " / website name: "+createWebsite);

             var createAcc = {
                 // masterEmail: masterEmail,
                 loginEmail: res[0]+"@webmail.com",
                 loginPassword: createPassword,
                 loginWebsite: createWebsite,
                 login: "0",
                 created: new Date().getTime()

               }
               var request = store.add(createAcc);
             $('.mainCA_bottom_main_top_btn').css("background-color", "#A9A9A9");
             $('.mainCA_bottom_main_top_btn').css("border", "2px solid #A9A9A9");
               console.log("Create account added...");
               alert("Your account has been created and added to ByPass.");
               logMe("System","popup","create page"," Your account has been created and added to ByPass..  -  create Email: "+ createEmail + " create Password: "+ createPassword+" webiste name: "+createWebsite);


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
             logMe("System","popup","create page"," Please enter a valid email.example@email.com  -  create Email: "+ createEmail + " / create Password: "+ createPassword+" / webiste name: "+createWebsite);

             // }
           }
             // $result.text(email + " is not valid :(");
             // $result.css("color", "red");
         }
         else {
           alert("All the fields required !");
           logMe("System","popup","create page"," All the fields required !-  create Email: "+ createEmail + " create Password: "+ createPassword+" webiste name: "+createWebsite);

         }
         }
        else
        {
          logMe("User","website name entered","create account page","websitename:"+ createWebsite );
          logMe("User","Create account button","create account page","clicked");
          console.log("into Email check....");
          var email = $("#createEmail").val();
          // alert(validateEmail(email));
          // alert(strength);
          if (validateEmail(email)) {
            console.log("if of validateEmail");
            logMe("System","Email Validation","Creating amazon account","TRUE");


            function loginPOST() {
              var request = new XMLHttpRequest()
              request.open('POST', 'http://amazon.safaie.ca/api/users1/1', true);
              request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
              request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                  console.log(this.response)
                  logMe("Webmail Server","request","create an account request to Amazon","Success - Email: " +createEmail+ " / password: " +createPassword + " / Website name: "+ createWebsite +" / Firstname: "+ createFirstName+" / Lastname: "+ createLastName+" / Date of Birth: "+createdateOfBirth);
                  logMe("Webmail Server","request","create an account request to Amazon","Server respond: " + this.response);
                }
                logMe("Webmail Server","request","create an account request to Amazon","Failure - Email: " +createEmail+ " / password: " +createPassword + " / Website name: "+ createWebsite +" / Firstname: "+ createFirstName+" / Lastname: "+ createLastName+" / Date of Birth: "+createdateOfBirth);

              }
              // alert(createWebsite + " / " + createEmail + " / " + createPassword);
              // request.send("UserID=897987&FirstName=AMAZON&LastName=nuAlle&Email="+loginEmail+"&Password="+loginPassword+"&Mobile=0123&BirthDay=222")
              request.send("UserID=897987&FirstName=" + createName + "&LastName=nuAlle&Email=" + createEmail + "&Password=" + createPassword + "&Mobile=0123&BirthDay=01")
              // request.send("UserID=897987&FirstName="+tablewebsite1+"&LastName=nuAlle&Email="+tableemail1+"&Password="+tablepassword1+"&Mobile=0123&BirthDay=01")
            }


            loginPOST();
            $('.mainCA_bottom_main_top_btn').css("background-color", "#A9A9A9");
            $('.mainCA_bottom_main_top_btn').css("border", "2px solid #A9A9A9");


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
              logMe("System","popup","create page"," Your account has been created and added to ByPass..  -  create Email: "+ createEmail + " create Password: "+ createPassword+" webiste name: "+createWebsite);

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
            logMe("System","popup","create page"," Please enter a valid email.example@email.com  -  create Email: "+ createEmail + " / create Password: "+ createPassword+" / webiste name: "+createWebsite);

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

  logMe("User","logout button clicked","logout called","");

  var r = confirm("Are you sure you want to logout?");
  logMe("System","popup","logout button clicked","Are you sure you want to logout?");

  if (r == true) {
    logMe("User","popup","logout button clicked","user seleceted - OK");

    var objectStore = db.transaction(["master"], "readwrite").objectStore("master").delete(1);
    var objectStoreClear = db.transaction(["accounts"], "readwrite").objectStore("accounts").clear();
    win = window.close();
  } else {
    logMe("User","popup","logout button clicked","user seleceted - Cancel");

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

      localStorage.setItem("logoutEmailpage7", email);


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
      selectedRowlll = clone.querySelector(".mp7_row_right_left ");
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
        if (website.includes("amazon") || website.includes("Amazon")) {
          logoName.src = "UI/amazon.png";
        } else if (website == "facebook") {
          logoName.src = "UI/facebook.png";
        } else if (website.includes("webmail") || website.includes("Webmail")) {
          logoName.src = "UI/gmail.png";
        }
      }
      websiteName = clone.querySelector(".mp7_row_middle_top");
      emailName = clone.querySelector(".mp7_row_middle_down");
      emailName.innerText = email;
      linkName = clone.querySelector(".page7_btn");
      arrow = clone.querySelector(".mp7_go_detail");
      linkName.classList.add("page7_btn" + num);

      $("page7_btn" + num).click(container(num,website, email, password,1));
      // $("page7_btn" + num).click(container(num,website, email, password,0));
      // $("page7_btn" + num).click(container(num,"a", "a", "a",0));




      selectedRow.classList.add("rowww" + num);
      selectedRowlll.classList.add("rowq" + num);
      selectedRowRR.classList.add("roww" + num);
      selectedRowLeft.classList.add("row" + num);
      selectedRowMid.classList.add("row" + num);
      arrow.classList.add("row" + num);
      selectedRowMidT.classList.add("row" + num);
      selectedRowMidD.classList.add("row" + num);
      websiteName.innerText = website;



      logo_details = clone2.querySelector(".logo_details");
      if (typeof(website) != "undefined") {
        if (website.includes("amazon") || website.includes("Amazon")) {
          logo_details.src = "UI/amazon.png";
        } else if (website == "facebook") {
          logo_details.src = "UI/facebook.png";
        } else if (website.includes("webmail") || website.includes("Webmail")) {
          logo_details.src = "UI/gmail.png";
        }
      }
      logout_p8 = clone2.querySelector(".logout_p8");
      logout_p8.innerText = "Logout: " + localStorage.getItem("logoutEmail");

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
      if (website.includes("amazon") || website.includes("Amazon")) {
        logo_edit.src = "UI/amazon.png";
      } else if (website == "facebook") {
        logo_edit.src = "UI/facebook.png";
      } else if (website.includes("webmail") || website.includes("Webmail")) {
        logo_edit.src = "UI/gmail.png";
      }
      editWebsiteName = clone3.querySelector(".editWebsiteName");
      editWebsiteName.innerText = website;

      logout_p9 = clone3.querySelector(".logout_p9");
      logout_p9.innerText = "Logout: " + localStorage.getItem("logoutEmail");

      detailDel = clone3.querySelector(".detailDel");
      detailDel.classList.add("detailDel" + num);

      editUsername = clone3.querySelector(".editUsername");
      editUsername.innerHTML = email;

      editPassword = clone3.querySelector(".editPassword");
      editPassword.value = password;
      editPassword.classList.add("editPassword" + num);

      radiobtn1 = clone3.querySelector(".radiobtn1");
      radiobtn1.classList.add("radiobtn1-" + num);
      radiobtn2 = clone3.querySelector(".radiobtn2");
      radiobtn2.classList.add("radiobtn2-" + num);
      radiobtn3 = clone3.querySelector(".radiobtn3");
      radiobtn3.classList.add("radiobtn3-" + num);
      radiobtn4 = clone3.querySelector(".radiobtn4");
      radiobtn4.classList.add("radiobtn4-" + num);

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
        change2to7();
        // change2to3();
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
      class: 'who'.replace(/,/g, ''), // remove commas to avoid errors
      content: "action",
      content1: "Current Page name",
      content2: "value",
      timestamp: "time"
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
