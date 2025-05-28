function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bpGyIlFwiC":
        Script1();
        break;
      case "5tY21qpgRqk":
        Script2();
        break;
      case "62IZLkZCbhP":
        Script3();
        break;
      case "5n1qP4xFJHi":
        Script4();
        break;
      case "5h6skuTNAvE":
        Script5();
        break;
      case "6XTA786P6k1":
        Script6();
        break;
      case "60zQPpl8TGG":
        Script7();
        break;
      case "6doFnjOSrvU":
        Script8();
        break;
      case "6Ud7M8yx7Gn":
        Script9();
        break;
      case "6GkTx4w76DU":
        Script10();
        break;
      case "6HfODy0X2Wi":
        Script11();
        break;
      case "6etRASDyLKr":
        Script12();
        break;
      case "6SUsz3DHUvV":
        Script13();
        break;
      case "63sQp0p64Xg":
        Script14();
        break;
      case "6jVFGhAR4oR":
        Script15();
        break;
      case "5Y1XWxeRY9s":
        Script16();
        break;
      case "67qMQ2HfHmn":
        Script17();
        break;
      case "6PoEUC5T1tL":
        Script18();
        break;
      case "6E7jQTkI7br":
        Script19();
        break;
  }
}

function Script1()
{
  if (!navigator.onLine) {
    var player = GetPlayer();
    player.SetVar("IsOffline", true);
}

}

function Script2()
{
  window.startTime = new Date();

sendStatement("launched", "http://adlnet.gov/expapi/verbs/launched", "Customer Excellence training", "https://aparna-gokhale.github.io/Customer-Excellence-Training-/");

}

function Script3()
{
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
(!document.mozFullScreen && !document.webkitIsFullScreen)) {
if (document.documentElement.requestFullScreen) {
document.documentElement.requestFullScreen();
} else if (document.documentElement.mozRequestFullScreen) {
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullScreen) {
document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
}
} else {
if (document.cancelFullScreen) {
document.cancelFullScreen();
} else if (document.mozCancelFullScreen) {
document.mozCancelFullScreen();
} else if (document.webkitCancelFullScreen) {
document.webkitCancelFullScreen();
}
}
}

function Script4()
{
  var player = GetPlayer();
var email = player.GetVar("TextEntryemail");

// Improved regex for stricter email validation
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;

if (emailPattern.test(email.trim())) {
    player.SetVar("EmailIsValid", true); // valid email
} else {
    player.SetVar("EmailIsValid", false); // invalid email
}


}

function Script5()
{
  sendStatement("launched", "http://adlnet.gov/expapi/verbs/launched", "Scene-1", "https://aparna-gokhale.github.io/Customer-Excellence-Training-/Scene1");

}

function Script6()
{
  sendStatement("attempted", "http://adlnet.gov/expapi/verbs/attempted", "S1-Q1", "https://aparna-gokhale.github.io/Customer-Excellence-Training-/S1-Q1");

}

function Script7()
{
  sendStatement("answered", "http://adlnet.gov/expapi/verbs/answered", "S1-Q1", "https://aparna-gokhale.github.io/Customer-Excellence-Training-/S1-Q1", {
  success: true,
  score: {
    raw: 10,
    min: 0,
    max: 10
  }
});

}

function Script8()
{
  var player = GetPlayer();
var learnerName = player.GetVar("TextEntryname");

// Slight delay to ensure iframe loads
setTimeout(function() {
    var iframes = document.getElementsByTagName("iframe");
    for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        // Try to find the iframe pointing to our certificate web object
        if (iframe.src.includes("WebObjects") && iframe.contentWindow.renderCertificate) {
            iframe.contentWindow.renderCertificate(learnerName);
            break;
        }
    }
}, 1000); // Adjust if needed

}

function Script9()
{
  sendStatement("launched", "http://adlnet.gov/expapi/verbs/launched", "Scene-2", "https://aparna-gokhale.github.io/Customer-Excellence-Training-/Scene-2");

}

function Script10()
{
  sendStatement("attempted", "http://adlnet.gov/expapi/verbs/attempted", "S2-Q1", "https://aparna-gokhale.github.io/Customer-Excellence-Training-/S2-Q1");

}

function Script11()
{
  sendStatement("attempted", "http://adlnet.gov/expapi/verbs/attempted", "S2-Q2", "https://aparna-gokhale.github.io/Customer-Excellence-Training-/S2-Q2");

}

function Script12()
{
  sendStatement("answered", "http://adlnet.gov/expapi/verbs/answered", "S2-Q2", "https://aparna-gokhale.github.io/Customer-Excellence-Training-/S2-Q2", {
  success: true,
  score: {
    raw: 10,
    min: 0,
    max: 10
  }
});

}

function Script13()
{
  sendStatement("answered", "http://adlnet.gov/expapi/verbs/answered", "S2-Q1", "https://aparna-gokhale.github.io/Customer-Excellence-Training-/S2-Q1", {
  success: true,
  score: {
    raw: 10,
    min: 0,
    max: 10
  }
});

}

function Script14()
{
  const endTime = new Date(); 
const durationInSeconds = Math.floor((endTime - window.startTime) / 1000);

sendStatement(
  "completed",
  "http://adlnet.gov/expapi/verbs/completed",
  "Customer Excellence training",
  "https://aparna-gokhale.github.io/Customer-Excellence-Training-/",
  {
    success: true,
    extensions: {
      "https://aparna-gokhale.github.io/xapi/extensions/durationInSeconds": durationInSeconds
    }
  }
);

}

function Script15()
{
  var player = GetPlayer();
var learnerName = player.GetVar("TextEntryname");

// Slight delay to ensure iframe loads
setTimeout(function() {
    var iframes = document.getElementsByTagName("iframe");
    for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        // Try to find the iframe pointing to our certificate web object
        if (iframe.src.includes("WebObjects") && iframe.contentWindow.renderCertificate) {
            iframe.contentWindow.renderCertificate(learnerName);
            break;
        }
    }
}, 1000); // Adjust if needed

}

function Script16()
{
  var player = GetPlayer();

// Get Storyline variables
var A = player.GetVar("S2_Q3_A_selected");
var B = player.GetVar("S2_Q3_B_selected");
var C = player.GetVar("S2_Q3_C_selected");
var D = player.GetVar("S2_Q3_D_selected");
var E = player.GetVar("S2_Q3_E_selected");

let result = "";

// All 20 combinations
if (!A && !B && !C && !D && !E) result = "NoneSelected";
else if ( A &&  B &&  C &&  D &&  E) result = "AllSelected"
else if ( A && !B && !C && !D && !E) result = "OnlyA";
else if (!A &&  B && !C && !D && !E) result = "OnlyB";
else if (!A && !B &&  C && !D && !E) result = "OnlyC";
else if (!A && !B && !C &&  D && !E) result = "OnlyD";
else if (!A && !B && !C && !D &&  E) result = "OnlyE";

else if ( A &&  B && !C && !D && !E) result = "AB";
else if ( A && !B &&  C && !D && !E) result = "AC";
else if (!A &&  B &&  C && !D && !E) result = "BC";
else if ( A &&  B &&  C && !D && !E) result = "ABC";

else if ( D &&  E && !A && !B && !C) result = "Correct"; // ✅ Correct answer

// All partially correct combinations that include D+E + extras
else if ( D &&  E &&  A && !B && !C) result = "DEA";
else if ( D &&  E && !A &&  B && !C) result = "DEB";
else if ( D &&  E && !A && !B &&  C) result = "DEC";
else if ( D &&  E &&  A &&  B && !C) result = "DEAB";
else if ( D &&  E &&  A && !B &&  C) result = "DEAC";
else if ( D &&  E && !A &&  B &&  C) result = "DEBC";
else if ( D &&  E &&  A &&  B &&  C) result = "DEABC";

// All wrong combos that include only parts of the right answer
else if ( D && !E &&  A &&  B &&  C) result = "DOnlyWithABC";
else if (!D &&  E &&  A &&  B &&  C) result = "EOnlyWithABC";
else result = "CatchAll"; // fallback catch-all

// Set result back into Storyline
player.SetVar("FeedbackResult", result);

}

function Script17()
{
  sendStatement("attempted", "http://adlnet.gov/expapi/verbs/attempted", "S2-Q3", "https://aparna-gokhale.github.io/Customer-Excellence-Training-/S2-Q3");

}

function Script18()
{
  sendStatement("answered", "http://adlnet.gov/expapi/verbs/answered", "S2-Q3", "https://aparna-gokhale.github.io/cs xapi 6 may/S2-Q3", {
  success: true,
  score: {
    raw: 10,
    min: 0,
    max: 10
  }
});

}

function Script19()
{
  location.reload(); // Reloads the course

}

