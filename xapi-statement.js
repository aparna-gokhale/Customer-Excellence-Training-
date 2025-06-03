function toBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function sendStatement(verbDisplay, verbId, objectName, objectId, result = null) {
  const player = GetPlayer();
  const learnerName = player.GetVar("TextEntryname") || "Anonymous";
  const learnerEmail = player.GetVar("TextEntryemail") || "anonymous@example.com";

  const conf = {
    endpoint: "https://portfolio-courses.lrs.io/xapi/",
    auth: "Basic " + toBase64("ofjiet:roziet")
  };

  ADL.XAPIWrapper.changeConfig(conf);

  const statement = {
    actor: {
      name: learnerName,
      mbox: "mailto:" + learnerEmail
    },
    verb: {
      id: verbId,
      display: { "en-US": verbDisplay }
    },
    object: {
      id: objectId,
      definition: {
        name: { "en-US": objectName }
      }
    }
  };

  // If result data like score/success is passed, add it
  if (result) {
    statement.result = result;
  }

  ADL.XAPIWrapper.sendStatement(statement);
}
