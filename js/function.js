function fn(){
    return 'Code here';
}
// TODOApenas uma função, não precisa por o return.
const arrowFn = () => 'Code here';
const arrowFn2 = () =>{
    //Mais de uma expressão
    return 'Code here'
}

//TODOFunções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//TODOReceber parãmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam()); 

logFnResult(fn);

//TODOReceber e retornar funções
const controlFnExec = fnParam => allowed =>{
    if (allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);// Executará a função fn
handleFnExecution();//Não executará a função fn

//TODOControlfn como função
function controlFnExec(fnParam){
    return function(allowed){
        if (allowed){
        fnParam();
        }
    }
}



