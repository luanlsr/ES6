// //=================OBJECT========================
// let user ={
//     name:'Luan'
// };

// //TODOAlterando a propriedade do objeto
// //console.log(user);

// user.name = 'Outro nome';
// //console.log(user);

// user['name'] = 'Outro nome 2';
// //console.log(user);

// const prop = 'name';
// user[prop] = 'Outro nome 3';

// //console.log(user);

// //TODOCriando uma propriedade
// user.lastName = 'da Silva Ramalho';


// //TODODeletando uma propriedade
// delete user.name;
// console.log(user);

// const user = {
//     name:'Luan',
//     lastName:'da Silva Ramalho'
// }

// //TODORecupera as chaves do objeto
// console.log('\nPropriedades do objeto' , Object.keys(user));

// //TODORecupera os valores das chaves do objeto
// console.log('\nValores das propriedades do objeto' , Object.values(user));


// //TODORetorna um array de arrays contendo [nome_prop , valor_prop]
// console.log('\nListas de propriedades e valores' , Object.entries(user));

// //TODOMargear propriedades de objetos
// Object.assign(user, {fullName: 'Luan da Silva Ramalho'});

// console.log('\nAdiciona propriedades fullName no objeto user' , user);

// //outra forma de fazer o de cima
// console.log('\nRetorna um novo objeto margeado dois ou mais objetos' , Object.assign({} , user ,{age:29}));


// //TODOPrevine todas as alterações dem um objeto
// const newObj = {foo: 'bar'};
// Object.freeze(newObj);

// newObj.foo = 'changes';
// delete newObj.foo;
// newObj.bar = 'foo';

// console.log('\nVariável newObj após as alterações' , newObj);

//TODOPermite apenas a alteração de propriedades existentes em um objeto
// const person = {name: 'Luan'};
// Object.seal(person);

// person.name = 'Luan Ramalho';
// delete person.name;
// person.age = 26;

// console.log('\nVariável person após as alterações' , person);
