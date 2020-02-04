"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Jimmy Torres 
   Date: 2/3/20   
   
   Filename: tc_cart.js
	
*/


//sets initial value of order total to zero
var orderTotal = 0;

//sets table for cart
var cartHTML = "<table> <tr> <th>Item</th> <th>Description</th> <th>Price</th> <th>Qty</th> <th>Total</th> </tr>"

//adds up the cost of a single item by multiplying it's cost and quantity
for(var i = 0; i < item.length; i++){
   cartHTML += "<tr> <td><img src='tc_"+ item[i] +".png'alt='"+ item +"'/> </td>";
   cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
   var itemCost = itemPrice[i] * itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td></tr>";

   //adds up the item costs
   orderTotal += itemCost;


}

//displays the order total
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td></tr></table>";
//outputs the table into the html
document.getElementById("cart").innerHTML = cartHTML;









