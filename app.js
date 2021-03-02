/*
Nnaemeka Okarazu
3/2/2021

NGP VAN--Broadcast Emails API
Print list of emails received with id, name and total count.

*/

var request = require('request');
var username = 'apiuser';
var password = 'FE61C847-CBC8-4520-B09F-AC6334EE7C78';
var options = {
  url: 'https://api.myngp.com/v2/BroadcastEmails',
  auth: {
    user: username,
    password: password
  }
};
request(options, function (err, res, body) {
  if (err) {
    console.dir(err);
    return;
  }

  //Get email list as an object
  var emailList = JSON.parse(body).items;

  //Print emails sent
  printEmails(emailList);
});


function printEmails(list) {
  console.log("Emails sent: ")
  for (let i = 0; i < list.length; i++) {
    console.log(`id: ${list[i].emailMessageId} name: ${list[i].name}`);
  }
  console.log(`Total: ${list.length} emails`);

}