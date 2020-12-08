/*****************
 *
 * Restaurant Tinder Server Code.
 *
 ***************/

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
const APIHelper = require('./APIHelper');

var app = express();
var port = 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', function (req, res) {
  apiHelper = new APIHelper([45.409274, -122.722615], 6000);

  let placesObj = await apiHelper.getNearbyPlaces();

  res.status(200).render('homepage', {
    placesObj: placesObj
  });
});

app.get('/test', async function (req, res) {

    apiHelper = new APIHelper([45.409274, -122.722615], 6000);

    let placesObj = await apiHelper.getNearbyPlaces();

    console.log("== Data Recieved");
    console.log(placesObj);
    res.status(200);
});

app.post('/rightRestaurant', function (req, res)
{
  apiHelper = new APIHelper([45.409274, -122.722615], 6000);

  let placesObj = await apiHelper.getNearbyPlaces();

  res.status(200).render('homepage', {
    placesObj: placesObj
  });
});

app.get('*', function(req, res) {
    console.log("== 404 Page Would Be displayed");
    res.status(404);
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});
