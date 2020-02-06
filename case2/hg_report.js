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
   ratingSum += ratings[i];
}


var ratingsAvg = ratingSum/ratingsCount;

var ratingReport = "<h1>Customer Reviews</h1>";
ratingReport += "<h2>" + ratingsAvg + "out of 5 stars (" + ratingsCount + "Reviews)</h2>";


for(var w = 0; w < 3; w++){
   ratingReport += "<div class='review'>";
   ratingReport += "<h1>" + ratingTitles[w] + "</h1>";
   ratingReport += "<table>";
   ratingReport += "<tr><th>By</th><td>" + ratingAuthors[w] + "</td></tr>";
   ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[w] + "</td></tr>";
   ratingReport += "<tr><th>Rating</th><td>";

   for(var h = 0; h < ratings[w]; h++){
      ratingReport += "<img src='hg_star.png' />";
   }

   ratingReport += "</td></tr></table>" + ratingSummaries[w] + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;











