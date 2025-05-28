function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dFn1i1gU9d":
        Script1();
        break;
      case "6MG4OD0XSIy":
        Script2();
        break;
      case "6JTmXSzeFLP":
        Script3();
        break;
      case "6WGQx7XbG7P":
        Script4();
        break;
      case "6fiWA4NXGwK":
        Script5();
        break;
      case "5oDvbzeJxmi":
        Script6();
        break;
      case "6l0kSZWjR2q":
        Script7();
        break;
      case "69AE5aNWCBp":
        Script8();
        break;
      case "6J5cxwkJaK7":
        Script9();
        break;
      case "63JQdVX1lqw":
        Script10();
        break;
      case "5XCKJ4PWQbe":
        Script11();
        break;
      case "6BG6sDOopD8":
        Script12();
        break;
      case "63s9BeqBDvB":
        Script13();
        break;
      case "6iK5ApNEEDW":
        Script14();
        break;
      case "6UVLVdyFwlA":
        Script15();
        break;
      case "6Vc3xACk9Ob":
        Script16();
        break;
      case "6dxlIsLL4ds":
        Script17();
        break;
      case "62hSAQdQZ6d":
        Script18();
        break;
      case "5kYYHEJIPyC":
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

sendStatement("launched", "http://adlnet.gov/expapi/verbs/launched", "Customer Excellence training", "https://aparna-gokhale.github.io/cs xapi 7 may/");

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
  sendStatement("launched", "http://adlnet.gov/expapi/verbs/launched", "Scene-1", "https://aparna-gokhale.github.io/cs xapi 7 mayi/Scene1");

}

function Script6()
{
  sendStatement("attempted", "http://adlnet.gov/expapi/verbs/attempted", "S1-Q1", "https://aparna-gokhale.github.io/cs xapi 7 may/S1-Q1");

}

function Script7()
{
  sendStatement("answered", "http://adlnet.gov/expapi/verbs/answered", "S1-Q1", "https://aparna-gokhale.github.io/cs xapi 7 may/S1-Q1", {
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
  sendStatement("launched", "http://adlnet.gov/expapi/verbs/launched", "Scene-2", "https://aparna-gokhale.github.io/cs xapi 7 may/Scene-2");

}

function Script10()
{
  sendStatement("attempted", "http://adlnet.gov/expapi/verbs/attempted", "S2-Q1", "https://aparna-gokhale.github.io/cs xapi 7 may/S2-Q1");

}

function Script11()
{
  sendStatement("attempted", "http://adlnet.gov/expapi/verbs/attempted", "S2-Q2", "https://aparna-gokhale.github.io/cs xapi 7 may/S2-Q2");

}

function Script12()
{
  sendStatement("answered", "http://adlnet.gov/expapi/verbs/answered", "S2-Q2", "https://aparna-gokhale.github.io/cs xapi 7 may/S2-Q2", {
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
  sendStatement("answered", "http://adlnet.gov/expapi/verbs/answered", "S2-Q1", "https://aparna-gokhale.github.io/cs xapi 7 may/S2-Q1", {
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
  "https://aparna-gokhale.github.io/cs xapi 6 may/",
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
  sendStatement("attempted", "http://adlnet.gov/expapi/verbs/attempted", "S2-Q3", "https://aparna-gokhale.github.io/cs xapi 7 may/S2-Q3");

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

