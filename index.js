function writeCards(name, event) {
    let newCards = [];
    for (let i = 0; i < name.length; i++) {
    newCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
return newCards;
}
function countDown(x) {
    let startingInt = x;
    while (x > -1) {
    console.log(x--);
    }
}
