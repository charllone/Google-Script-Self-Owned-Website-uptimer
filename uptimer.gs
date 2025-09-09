function checkUptime() {
  var url = "THE WEBISTE HTTPS"; // site to monitor
  var webhook = "YOUR DISCORD WEBHOOK"; // your Discord webhook FOR THE STATUS

  var status;
  try {
    var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    status = response.getResponseCode();
  } catch (e) {
    status = 0; // treat errors as "down"
  }

  // Save and load last status
  var props = PropertiesService.getScriptProperties();
  var lastStatus = props.getProperty("lastStatus");

  // If status changed, send Discord message
  if (status == 200 && lastStatus !== "UP") {
    sendDiscord(webhook, "✅ Website is UP again!\nURL: " + url);
    props.setProperty("lastStatus", "UP");
  } else if (status !== 200 && lastStatus !== "DOWN") {
    sendDiscord(webhook, "⚠️ Website DOWN!\nURL: " + url + "\nStatus: " + status);
    props.setProperty("lastStatus", "DOWN");
  }
}

function sendDiscord(webhook, message) {
  var payload = {
    "content": message
  };
  UrlFetchApp.fetch(webhook, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  });
}
