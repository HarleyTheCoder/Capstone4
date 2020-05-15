//I can't change the table sizes for anything, it's driving me nuts


var shopList = [];
var itemList = [];
var numItems = 0;
var lastItem = 0;

//var displayHead = document.getElementById("list-display");
//displayHead.style.visibility = 'hidden';

var itemInfo = document.getElementById("item_info");
//Define table, items and prices
var itemTable = document.getElementById("item_table");
var items = ["Primer", "Eyelashes", "Eyeliner", "Mascara", "Liquid Foundation",
				"Eyeshadow", "Powder Foundation", "Concealer", "Lipstick"];
var prices = [8.00, 12.99, 8.99, 9.99, 10.99, 6.99, 11.99, 7.99, 8.99];

//Create item instances, store them in a list
for (i = 0; i < items.length; i++) {
	var item = [items[i], prices[i]];
	itemList.push(item);
}

//sort itemList
itemList.sort();

//Add stuff to each item row on index

for (i = 0; i < itemList.length; i++) {
	var row = itemTable.insertRow(-1);
	
	var nameCell = row.insertCell(-1);
	var priceCell = row.insertCell(-1);
	var buttonCell = row.insertCell(-1);

	nameCell.innerHTML = itemList[i][0];
	priceCell.innerHTML = "$" + itemList[i][1];
	buttonCell.innerHTML = "<button id=" + i + " onclick='A=addItem(" + 
							i + ")'>Add</button>"
		console.log(buttonCell.innerHTML);
}









//Function for what to do when you click a button
//Only adds new item if it's not in the list, otherwise it adds to the quantity
function addItem(buttonID) {
	var quant = 1;
	var exists = false;
	var name = itemList[buttonID][0];
	var price = itemList[buttonID][1];
	if (shopList.length !== 0) {
		for (i = 0; i < shopList.length; i ++) {
			if (shopList[i][0] === name) {
				shopList[i][2] += quant;
				exists = true;
			}
		}
	}
	console.log(shopList);
	
	if (!exists) {
		var newItem = [name, price, quant];
		shopList.push(newItem);
	}
	numItems++;
	updateItemInfo(numItems, name, price);
	shopList.sort();
}

function updateItemInfo(num, name, price) {
	itemInfo.innerHTML = "You added " + name + " for $" + price + "." +
	"<br>There are " + num + " item(s) in your cart."
}

//Go to check out page
function checkOut() {
	//refreshCheckOut();
	makeShopList();
}

//The tables gave me too many problems so I'm just making a list
function makeShopList () {
	//I've spent way too much time on this so I'm not bothering to format it
	var listArea = document.getElementById("list-section");
	var list = "";
	var total = 0;
	list = "<h2>Your Cart</h2>";
	//listArea.innerHTML = "<h2>Your Cart</h2>";
	for (var i = 0; i < shopList.length; i++) {
		list +=  "<br>" + shopList[i][2] + "x " + shopList[i][0] + " $" + shopList[i][1];
		total += shopList[i][2] * shopList[i][1];
	}
	list += "<br><br>Grand Total: $" + total;
	
	
	
	listArea.innerHTML = list;
	console.log(list);
	
}


//Create the check out table
//now add rows
function refreshCheckOut() {
	//This part is for the check out page
	var checkOutTable = document.getElementById("check_out_table");
	if (shopList.length === 0) {
		var display = document.getElementById("display-text");
		itemInfo.innerHTML = "There's nothing to display!";
		//display.innerHTML = "There's nothing to display!";
		displayHead.style.visibility = 'hidden';
	} else {
		//display.innerHTML = "Here are your items.";
		itemInfo.innerHTML = "Checking out items.";
		displayHead.style.visibility = 'visible';
		for (i = lastItem; i < shopList.length; i++) {
			var row = checkOutTable.insertRow(-1);
		
			var quantCell = row.insertCell(-1);
			var nameCell = row.insertCell(-1);
			var priceCell = row.insertCell(-1);
			var buttonCell = row.insertCell(-1);
				
			quantCell.innerHTML = shopList[i][2];
			nameCell.innerHTML = shopList[i][0];
			priceCell.innerHTML = "$" + shopList[i][1];
			buttonCell.innerHTML = "<button id='c" + i + "'>Remove</button>";
			console.log(buttonCell.innerHTML);
			lastItem++;
		}
	}
}





