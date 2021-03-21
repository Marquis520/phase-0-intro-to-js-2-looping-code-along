const names = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(names, surprise) {
    return [ 'Thank you, Lisa, for the wonderful surprise gift!', 
    'Thank you, Kaitlin, for the wonderful surprise gift!', 
    'Thank you, Jan, for the wonderful surprise gift!' ];
}

const n = 10

function countDown() {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
    }
}