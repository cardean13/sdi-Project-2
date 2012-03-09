alert("JavaScript works!");

var matthewsArrives = ' "Road\'s all clear." ',
	trust = "I don't trust ",
	guns = 4,
	ammo = 200 + " rounds",
	mag = 2,
	gun = 2,
	enemy = "steve",
	JD = true,
	jeffAndSara = true,
	people = [
	"JD",
	"Matthews",
	"Jeff",
	"Sara",
];


var ammo = function(rounds){
	var guns = rounds * mag * gun, preperation;
	preperation = guns + " rounds would be used";
	return preperation;
};
var totallyPrepared = ammo(14);
	console.log(totallyPrepared);

if ( JD === false) { 
	console.log("JD's tired, time to send in Matthews." );
} else { 
	console.log("Send JD to checkout the city.");
};


if ( JD === true) { 
	console.log("JD's tired, time to see if Jeff and Sara are ready." );
} else { 
	console.log("Send JD to checkout the city.");
};

if (jeffAndSara === true) {
	console.log("Send " + people[2] + " and " + people[3] + " in."); 
} else { 
	console.log("I'm stuck with Matthews.");
};

if (jeffAndSara === false) {
	console.log("Send " + people[2] + " and " + people[3] + " in."); 
} else { 
	console.log("They're not ready, I'm stuck with Matthews.");
};
var ammo = 200
var howsAmmo = function () {console.log(ammo + " rounds left");}
while (ammo > 0) {
	ammo -=20;
	howsAmmo()
		
};
	console.log("Out of ammo.");
var howsWeapons = function () {console.log(guns + " guns left.")};

for (var guns = 4; guns > 0; guns--) {
	howsWeapons ();
};
	console.log("No more protection.");

console.log(trust + people[1] + ", even when he says" + matthewsArrives);
