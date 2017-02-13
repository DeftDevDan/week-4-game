window.onload = start;
var characters = [];
var luke;
var yoda;
var vader;
var obiwan;
var maul;
var char=[];
var defender;
var player;
var enemies=[];
var totalEnemy;

function start() {
	$("#enemies").hide();
	$("#defender").hide();
	$("#choose").hide();
	$("#battle").hide();
	$("#avatar").attr("src", "");
	$("#enemy1").attr("src", "");
	$("#enemy2").attr("src", "");
	$("#enemy3").attr("src", "");
	$("#enemy4").attr("src", "");
	$("#game").show();
	$("#difficulty").show();
	$("#HowToPlay").show();
	$("#myChar").show();
	$("#endGame").hide();
	$("#myChar").hide();
	char=[];
	defender=0;
	//declare new characters and values

	luke = new Char("Luke Skywalker", 7, 15, 475, "assets/images/luke200.jpg", "assets/images/luke600.jpg");
	yoda = new Char("Yoda", 9, 20, 400, "assets/images/yoda200.jpg", "assets/images/yoda600.jpg");
	vader = new Char("Darth Vader", 4, 30, 525, "assets/images/vader200.jpg", "assets/images/vader600.jpg");
	obiwan = new Char("Obi Wan Kenobi", 4, 18, 600, "assets/images/obiwan200.jpg", "assets/images/obiwan600.jpg");
	maul = new Char("Darth Maul", 3, 25, 675, "assets/images/darthmaul200.jpg", "assets/images/darthmaul600.jpg");
	characters = [luke, yoda, vader, obiwan, maul];
}

function Char(name,AP,CAP,HP, image1, image2) {
	this.base = AP;
	this.baseHP = HP;
	this.AP = AP;
	this.CAP = CAP;
	this.HP = HP;
	this.image1 = image1;
	this.image2 = image2;
	this.updateHP = function(difference) {
		this.HP -= difference;
	};
	this.updateAP = function() {
		this.AP += this.base;
	};
}

//function loops through and resets all HTML, variables, and CSS back to default
function reset() {
	alert("JK, coming soon xD");
}

//Player selects difficulty of game. Easy will load 3 random objects, medium will load 4 random objects, hard will load all 5 objects
function easy() {
	$("#HowToPlay").hide();
	var rand1 = Math.floor(Math.random()*5);
	var rand2 = Math.floor(Math.random()*4);
	var rand3 = Math.floor(Math.random()*3);

	char.push(characters[rand1]);
	characters.splice(rand1, 1);
	$("#char0").attr("src", char[0].image1);
	document.getElementById('stats0AP').innerHTML = "Attack Power: " + char[0].AP;
	document.getElementById('stats0HP').innerHTML = "Health Points: " + char[0].HP;

	char.push(characters[rand2]);
	characters.splice(rand2, 1);
	$("#char1").attr("src", char[1].image1);
	document.getElementById('stats1AP').innerHTML = "Attack Power: " + char[1].AP;
	document.getElementById('stats1HP').innerHTML = "Health Points: " + char[1].HP;

	char.push(characters[rand3]);
	characters.splice(rand3, 1);
	$("#char2").attr("src", char[2].image1);
	$("#char3").attr("src", "");
	$("#char4").attr("src", "");
	document.getElementById('stats2AP').innerHTML = "Attack Power: " + char[2].AP;
	document.getElementById('stats2HP').innerHTML = "Health Points: " + char[2].HP;

	$(".ez-noshow").css("display", "none");

	$("#choose").animate().fadeIn("1000");
	$("#difficulty").animate().fadeOut("1000");
	totalEnemy = 2;
}

function medium() {
	$("#HowToPlay").hide();
	var rand1 = Math.floor(Math.random()*5);
	var rand2 = Math.floor(Math.random()*4);
	var rand3 = Math.floor(Math.random()*3);
	var rand4 = Math.floor(Math.random()*2);

	char.push(characters[rand1]);
	characters.splice(rand1, 1);
	$("#char0").attr("src", char[0].image1);
	document.getElementById('stats0AP').innerHTML = "Attack Power: " + char[0].AP;
	document.getElementById('stats0HP').innerHTML = "Health Points: " + char[0].HP;

	char.push(characters[rand2]);
	characters.splice(rand2, 1);
	$("#char1").attr("src", char[1].image1);
	document.getElementById('stats1AP').innerHTML = "Attack Power: " + char[1].AP;
	document.getElementById('stats1HP').innerHTML = "Health Points: " + char[1].HP;

	char.push(characters[rand3]);
	characters.splice(rand3, 1);
	$("#char2").attr("src", char[2].image1);
	document.getElementById('stats2AP').innerHTML = "Attack Power: " + char[2].AP;
	document.getElementById('stats2HP').innerHTML = "Health Points: " + char[2].HP;

	char.push(characters[rand4]);
	characters.splice(rand4,1);
	$("#char3").attr("src", char[3].image1);
	$("#char4").attr("src", "");
	document.getElementById('stats3AP').innerHTML = "Attack Power: " + char[3].AP;
	document.getElementById('stats3HP').innerHTML = "Health Points: " + char[3].HP;

	$(".md-noshow").css("display", "none");

	$("#choose").animate().fadeIn("1000");
	$("#difficulty").animate().fadeOut("1000");
	totalEnemy = 3;
}

function hard() {
	$("#HowToPlay").hide();
	char = [luke, yoda, vader, obiwan, maul];
	$("#char0").attr("src", char[0].image1);
	$("#char1").attr("src", char[1].image1);
	$("#char2").attr("src", char[2].image1);
	$("#char3").attr("src", char[3].image1);
	$("#char4").attr("src", char[4].image1);
	document.getElementById('stats0AP').innerHTML = "Attack Power: " + char[0].AP;
	document.getElementById('stats0HP').innerHTML = "Health Points: " + char[0].HP;
	document.getElementById('stats1AP').innerHTML = "Attack Power: " + char[1].AP;
	document.getElementById('stats1HP').innerHTML = "Health Points: " + char[1].HP;
	document.getElementById('stats2AP').innerHTML = "Attack Power: " + char[2].AP;
	document.getElementById('stats2HP').innerHTML = "Health Points: " + char[2].HP;
	document.getElementById('stats3AP').innerHTML = "Attack Power: " + char[3].AP;
	document.getElementById('stats3HP').innerHTML = "Health Points: " + char[3].HP;
	document.getElementById('stats4AP').innerHTML = "Attack Power: " + char[4].AP;
	document.getElementById('stats4HP').innerHTML = "Health Points: " + char[4].HP;

	$("#choose").animate().fadeIn("1000");
	$("#difficulty").animate().fadeOut("1000");
	totalEnemy = 4;
}

//When the player selects the character, show my character div, update avatar at top and set HP according to object properties.
function select(x) {
	$("#avatar").attr("src", char[x].image1);
	player = char[x];
	char.splice(x,1);
	$("#choose").animate().fadeOut("1000");
	for (var i=0; i < char.length; i++) {
		$("#enemy"+i).attr("src", char[i].image1);
		enemies.push[i];
	}
	$("#myChar").animate().fadeIn("1000");
	$("#enemies").animate().fadeIn("1000");
	$("#defender").animate().fadeIn("1000");
	document.getElementById('totalEnemies').innerHTML = "Number of Enemies Remaining: " + totalEnemy;
	document.getElementById('currentHPnum').innerHTML = player.HP + "/" + player.baseHP;
	document.getElementById('myAP').innerHTML = "Attack Power: " + player.AP;

	document.getElementById('stats0CAP').innerHTML += "Attack Power: " + char[0].CAP;
	document.getElementById('stats1CAP').innerHTML += "Attack Power: " + char[1].CAP;
	document.getElementById('stats2CAP').innerHTML += "Attack Power: " + char[2].CAP;
	document.getElementById('stats3CAP').innerHTML += "Attack Power: " + char[3].CAP;

	document.getElementById('stats0CHP').innerHTML += "Health Points: " + char[0].HP;
	document.getElementById('stats1CHP').innerHTML += "Health Points: " + char[1].HP;
	document.getElementById('stats2CHP').innerHTML += "Health Points: " + char[2].HP;
	document.getElementById('stats3CHP').innerHTML += "Health Points: " + char[3].HP;
}

//This function will move all enemies that weren't selected to the enemies well. Animate show the enemies well, animate move the enemies. Animate hide the select well, and animate show the defender well.

//This function will move enemy from enemies to defender
function move(x) {
	$("#defenderPic").hide();
	for (var i=0; i < char.length; i++) {
		$("#en"+i).show();
	}
	$("#defenderPic").fadeIn("1000");
	$("#defenderPic").attr("src", char[x].image2);
	$("#en"+x).fadeOut();
	defender = x;
}

//This function will start when a player chooses to attack the defender. This will load the battle page. Show battle page and hide the select,defender, and enemy wells.
function attackSet() {
	if(char[defender].HP > 0 && player.HP > 0) {
		$("#game").animate().fadeOut("1000");
		$("#myChar").animate().fadeOut("1000");
		$("#battle").animate().fadeIn("1000");
		$("#battlePic1").attr("src", player.image2);
		$("#battlePic2").attr("src", char[defender].image2);
		var attackerHP = player.HP/player.baseHP * 100;
		var defenderHP = char[defender].HP/char[defender].baseHP*100;

		$("#attackHP").css("width", attackerHP + "%");
		$("#defendHP").css("width", defenderHP + "%");
	}
}

//This function will start when the player chooses the attack button while on the battle page
function attack() {
	char[defender].updateHP(player.AP);
	if (char[defender].HP > 0) {
		player.updateHP(char[defender].CAP);
		var currentHP = player.HP/player.baseHP*100;
		$("#currentHP").css("width", currentHP+"%");
		document.getElementById('currentHPnum').innerHTML = player.HP + "/" + player.baseHP;
	}
	player.updateAP()
	document.getElementById('myAP').innerHTML = "Attack Power: " + player.AP;
	var attackerHP = player.HP/player.baseHP * 100;
	var defenderHP = char[defender].HP/char[defender].baseHP*100;
	$("#attackHP").css("width", attackerHP + "%");
	$("#defendHP").css("width", defenderHP + "%");

	if (char[defender].HP <= 0) {
		$("#battle").animate().fadeOut("1000");
		$("#game").animate().fadeIn("1000");
		$("#myChar").animate().fadeIn("1000");
		$("#defenderPic").hide();
		$("#en"+defender).show();
		$("#enemy"+defender).css("opacity", "0.6");
		$("#enemy"+defender).attr("onClick", "");
		totalEnemy -= 1;
		document.getElementById('totalEnemies').innerHTML = "Number of Enemies Remaining: " + totalEnemy;
	} else if (player.HP <= 0) {
		loser();
	}
	if (totalEnemy == 0) {
		winner();
	}
}

function winner() {
	$("#game").animate().fadeOut("1000");
	$("#myChar").animate().fadeOut("1000");
	$("#endGame").animate().fadeIn("1000");
	$("#endGame").animate().fadeIn("1000");
	document.getElementById('result').innerHTML = "CONGRATULATIONS! YOU WON!";
}

function loser() {
	$("#battle").animate().fadeOut("1000");
	$("#game").animate().fadeOut("1000");
	$("#myChar").animate().fadeOut("1000");
	$("#endGame").animate().fadeIn("1000");
	document.getElementById('result').innerHTML = "CONGRATULATIONS! YOU LOST! LOSER!!!";
}