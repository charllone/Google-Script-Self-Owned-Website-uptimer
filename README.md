# Google-Script-Self-Owned-Website-uptimer
This script pings a website requesting 200 request every time you run it. Create a trigger to Ping the website always in Google app script. It also supports Discord webhook to send the status of the requests if it down or not.

### HOW TO SETUP
- Go to [Google App Script](https://script.google.com/)
- Paste the code in the Code.gs
- Configure the Website to ping
- Change the Discord Webhook
- Go to Triggers
- Add a Trigger with the corresponding function "CheckUptime"
- Then "Time-driven" and choose the corresponding time base and interval to your preference
