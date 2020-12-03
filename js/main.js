// var meuNumero = 20;
// var meuTexto = 'Exemplo';

// console.log(meuNumero + meuTexto);


/*escopo global
só pode ser usado o var


function(){
    escopo de função
}
pode ser usado o var, let e o const

{
    escopo de bloco
}
pode ser usado o let e o const
*/

//==============STRINGS===================

// //Retorna o tamanho de uma string
// const textSize = 'Texto'.length;
// console.log(`Quantidade de letras: ${textSize}`)

//Retorna um array quebrando a string por um delimitador
// const splittedText = 'Texto'.split('x')
// console.log('\nArray com as posições separadas pelo delimitador:', splittedText)

//Busca por um valor e substitui por outro
// const replacedText = 'Ação'.replace('A' , 'Motiva')
// console.log('\nSubstituiçãao de valor:' , replacedText)

//Retorna a "fatia" de um valor
// const lastChar = 'Texto'.slice(-1)
// console.log('\nÚltima letra de uma string:' , lastChar)


// const allWhitoutLastChar = 'Texto'.slice(0,-1)
// console.log('\nValor da string da primeira letra menos a última:' , allWhitoutLastChar)

// const firstLetter = 'Texto'.slice(1)
// console.log('\nValor da primeira letra da string: ', firstLetter)

// const secondToEnd = 'Texto'.slice(0,1)
// console.log('\nValor da string da segunda letra até a última: ', secondToEnd)

// //Retorna N caracteres a partir de uma posição
// const twoCharsBeforeFirstPos = 'Texto'.substr(0,1)
// console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos)


//===============NUMBER========================

// const myNumber = 12.4032

// //Transformar número para string
// const numberAsString = myNumber.toString()
// console.log('Número transformado em string: ', numberAsString)

// //Retorna número com um número de casas decimais
// const fixedTwoDecimals = myNumber.toFixed(2)
// console.log('\nNúmero com duas casas decimais: ',fixedTwoDecimals)

// //Transforma uma string em float
// console.log('\nString parseada para float: ', parseFloat('13.22'))

// //Transforma uma string em int
// console.log('\nString parseada para int: ', parseInt('13.23'))

//=================OBJECT========================


