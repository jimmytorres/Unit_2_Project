"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Jimmy Torres 
   Date: 2/4/20   
   
   Filename: hg_report.js
	
*/


var gameReport = "<h1>" + itemTitle + "</h1>"; 
gameReport += "<h2>By:" + itemManufacturer + "</h2>";
gameReport += "<img src='hg_" + itemID + ".png' alt='id' id='gameImg' />";
gameReport += "<table>";
gameReport += "<tr><th>Prouduct ID</th> <td>" + itemID + "</td> </tr>";
gameReport += "<tr><th>List Price</th> <td>" + itemPrice + "</td> </tr>";
gameReport += "<tr><th>Platform</th> <td>" + itemPlatform + "</td> </tr>";
gameReport += "<tr><th>ESRB Rating</th> <td>" + itemESRB + "</td> </tr>";
gameReport += "<tr><th>Condition</th> <td>" + itemCondition + "</td> </tr>";
gameReport += "<tr><th>Release</th> <td>" + itemRelease + "</td> </tr>";
gameReport += "</table>";
gameReport += itemSummary;


document.getElementsByTagName("article")[0].innerHTML = gameReport;


var ratingSum = 0;

var ratingsCount = ratings.length;

for(var i = 0; i < ratings.length; i++){

}


var ratingsAvg = ratingSum/ratingsCount;

var ratingReport = "<h1>Customer Reviews</h1>";
ratingReport += "<h2>" + ratingsAvg + "out of 5 stars(count reviews)</h2>";














