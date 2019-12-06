//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/details-and-service'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/details-and-service/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
