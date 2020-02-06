"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Jimmy Torres
   Date: 2/5/20   
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

//sets title for table
var reportHTML = "<h1>" + raceTitle + "</h1>";

 for(var i = 0; i < race.length; i++){
    var totalVotes = 0;
    votes[i].forEach(calcSum);
    reportHTML += "<table>";
    reportHTML += "<caption>" + race[i] + "</caption>";
    reportHTML += "<tr><th>Candidate</th><th>Votes</th></tr>";
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>"
 }

 //displays everything within the html
document.getElementsByTagName("section")[0].innerHTML += reportHTML;

//gets vote numbers
function candidateRows(raceNum, totalVotes){
   var rowHTML = "";

   //makes the voting count
   for(var w = 0; w < 3; w++){
      var candidateName = candidate[raceNum][w];
      var candidateParty = party[raceNum][w];
      var candidateVotes = votes[raceNum][w];
      var candidatePercent = calcPercent(candidateVotes, totalVotes);
      rowHTML += "<tr>";
      rowHTML += "<td>" + candidateName + "(" + candidateParty + ")</td>";
      rowHTML += "<td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td>";

      for(var b = 0; b < candidatePercent; b++){
         rowHTML += createBar(candidateParty, candidatePercent);
      }
   }
   return rowHTML;
}
//creats colored bars for the table
function createBar(partyType){
   var barHTML = "";
   if(partyType === "D"){
      barHTML = "<td class='dem'></td>";
   }
   if(partyType === "R"){
      barHTML = "<td class='rep'></td>";
   }
   if(partyType === "I"){
      barHTML = "<td class='ind'></td>";
   }
   return barHTML;
}



/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

