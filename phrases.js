var phrases = [

	"I\'\m just bout that action, boss. - Marshawn Lynch",
	"Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV. - Morty Smith",
	"Sometimes science is more art than science, Morty. Lot of people don't get that. - Rick Sanchez",
	"Get Schwifty - Rick Sanchez",
	"Get off the high road Summer. We all got pink eye because you won't stop texting on the toilet. - Rick Sanchez",
	"I\'\m just here so I won\'t get fined. - Marshawn Lynch",
	"its fine, everythings is fine. theres an infinite number of realities morty, and in a few dozens of those i got lucky and turned everything back to normal - Rick Sanchez",
	"You're our boy dog, don't even trip - Rick Sanchez",
	"Wow, I really Cronenberged up the whole place, huh Morty? Just a bunch a Cronenbergs walkin' around - Rick Sanchez",
	"If it takes nine seasons, I want my McNugget dipping sauce, Szechuan sauce, Morty. - Rick Sanchez",
	"Joffrey...Cersei...Walder Frey...Meryn Trant...Tywin Lannister...The Red Woman...Beric Dondarrion...Thoros of Myr...The Mountain...The Hound. - Arya Stark"

];


function random(){
	num = Math.floor(Math.random() * 11);
  	quote = phrases[num];
  	console.log(quote);

  	return quote;
}

module.exports.random = random;

