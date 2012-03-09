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
	var guns = rounds * mag * gun;
	console.log(guns + " rounds would be used");
};
ammo(14)
;

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
	console.log("I'm stuck with Matthews.");
};
var ammo = 200
while (ammo > 0) {
console.log(ammo + " rounds left");
ammo -=14;
};
console.log("Out of ammo.");

console.log(trust + people[1] + ", even when he says" + matthewsArrives);
