function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () =>{
    //Mais de uma expressão
    return 'Code here'
}

//Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn);
console.log(fn.prop);