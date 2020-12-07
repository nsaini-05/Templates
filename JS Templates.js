//SIMPLE SERVER TEMPLATE

const express = require("express");
const app = express();


app.get("/", function(req , res)
{
  res.send("<h1> Hello </h1>");
});


app.listen( 3000 , function(req,res)
{
  console.log("server started");
});

//_____________________________________________________________
/* SENDING FILE IN RETURN*/

app.get("/", function(req , res)
{
  res.sendFile(__dirname + "/index.html");
});

//_____________________________________________________________

/*BODY PARSER
SENDING DATA FROM HTML PAGE USING FORMS*/


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var cityName  = req.body.city;

/*
<form action = "/" method = "POST">
<input type="text" placeholder="Search for a city"  name ="city"  autofocus>
<button type="submit">SUBMIT</button>
<span class="msg"></span>
</form>
*/

//_____________________________________________________________



/*SERVING THE CSS ALONG.
CREATE A PUBLIC FOLDER IN APP DIRECTORY
CREATE A CSS , IMAGES FOLDER IN PUBLIC FOLDER*/

app.use(express.static("public"));
//<link rel="stylesheet" href="/css/style.css">

//____________________________________________________________
/* GETTING DATA FROM API */

const https = require('https');
https.get( endpoint link, function(response)
 {
   response.on("data", function(data)
   {
     var weatherData = JSON.parse(data);
     //var icon = weatherData.weather[0].icon;
     //const imgUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
     res.write("<h1>The temp is" +weatherData.main.temp +"</h1>");
     //res.write("<img src ="+ imgUrl +">");
   });

//____________________________________________________________
/* Sending data from server to ejs */
//Note: TO use ejs make viewa folder inside app directory and add ejs pages
app.get("/work", function(req , res)
{
  res.render('index' , {listTitle: "Work List" , itemnames:workItems})
});


/*
 <h1><%= listTitle%></h1>

 <%for (var i = 0; i < itemnames.length; i++) { %>
    <div class ="item">
      <input type="checkbox" >
      <p> <%=itemnames[i]%></p>
    </div>
    <%}%>

*/

//____________________________________________________________
