var express = require('express');
var app = express();
var port = 80;

app.listen(port, () => console.log(`Redirect form app now on and listening on ${port}`));

app.get('/id=:id', function (req, res) {
  console.log(`Recieving request from ${req.ip} for the ID of ${req.params.id}`)
  res.redirect(`https://5856437-sb1.app.netsuite.com/app/crm/common/onlineforms/internalonlineform.nl?formid=1?id=${req.params.id}`);
});