var BasicCard = require("./BasicCard");

function ClozeCard(partial, cloze, err) {

	if (err) {
		console.log("This does not work. Try Again.")
	}

    this.cloze = cloze;
    this.partial = " ..." + partial.split(cloze);
    this.full = cloze + " " + partial;

 
}

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front);

console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze);

console.log(firstPresidentCloze.partial);

console.log(firstPresidentCloze.fullText);

var brokenCloze = new ClozeCard("This doesn't work", "oops");


module.exports = ClozeCard;