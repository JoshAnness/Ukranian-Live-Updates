/*const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

app.get('/', (req, res) => res.send('Welcome to Twilio Twitter SMS Notification'));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
*/
// Twilio Test
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const notifyServiceSid = process.env.NOTIFY_SERVICE_SID;

const client = require('twilio')(accountSid, authToken);

client.notify.services(notifyServiceSid) 
  .notifications.create({
    toBinding: JSON.stringify({
        binding_type: 'sms', address: '+5137603873'
    }),
    body: 'Test'
  })
  .then(notification => console.log(notification.sid))
  .catch(error => console.log(error));

