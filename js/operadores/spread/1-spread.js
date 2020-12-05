// Spread ...
var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pés'];

function fn(x, y, z) {
    console.log(x, y, z);
}

var args = [0,1,2];
fn(...args);

console.log(musica);