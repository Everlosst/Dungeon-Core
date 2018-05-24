"use strict";
 // Initialization
 window.onload = function () {
   startTab();};
function startTab() {
  document.getElementById("defaultOpen").click(); // Initial nav bar click
  setInterval(gameTimer, 1000); // Game Timer 
  runDropDownPop();
  }
function gameTimer () { // Timer function triggers
	refresh();
	passiveMana();
}
function refresh() { // Status bar updates
	document.getElementById("manaTotal").innerHTML = Math.ceil(mana, 2); //Updating Status Bar
	document.getElementById("passiveManaGain").innerHTML = passiveManaRate;
  }

// Nav tabs
function openScreen(evt, screenName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(screenName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Global variables and universal functions
var mana = 50;
var floorNumber = 1;
var floor1Rooms = 1;
var familyAvailable = 1;
	// CDVT and ADVT functions need to be added
	var creatureDVT = 0;
	var adventurerDVT = 0;
var passiveManaRate = (creatureDVT * .02) + (adventurerDVT * .005) + .1; // Main passive mana regen rate, followed by mana added
function passiveMana() {
  mana += passiveManaRate;
  }


//Families and base monster tree
var data = {
  familiesArray: [
    {status: "available", level: 0, class: "family", species: "Insect"},
    {status: "available", level: 0, class: "family", species: "Mammal"},
    {status: "unavailable", level: 0, class: "family", species: "Goblin"},
    {status: "unavailable", level: 0, class: "family", species: "Slime"},
  ]
};

//Dropdown population
function runDropDownPop () {
  var dropdown = document.querySelectorAll('.dropdown');
  for(x=0; x<dropdown.length; x++) {
    populateDropDown(
      dropdown[x].dataset.state,        // Get state from data attr
      dropdown[x],                      // Pass the dropdown DOM element
      data[dropdown[x].dataset.array],  // Reference local data object above using variable
      dropdown[x].dataset.type          // Get type from data attr
    );
    console.log("Dropdown loop")
    }
}

function populateDropDown(state, dropdown, array, textType) {
	for (i = 0; i < array.length; i++) {
    if (array[i].status== state) {
			var option = document.createElement ("option");
			document.getElementById(dropdown.id).add(option);
			option.text = array[i][textType];
		}
  }
}


			
			
			
			
			
			
			
			





