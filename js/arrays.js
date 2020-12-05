const users = ['Luan' , 'Vanessa', 'Ana'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('F')
}
const persons = [
  { name: 'Luan',
    age: 30,
    gender: gender.MAN
  },
  { name: 'Ana',
    age: 59,
    gender: gender.WOMAN
  },
  { name: 'Vanessa',
    age: 39,
    gender: gender.WOMAN
  },
];
//TODORetorna a quantidade de itens de um array
console.log('Items:',persons.length);

//TODOVerificar se é array
console.log('A variável persons é um array',Array.isArray(persons));

//TODOIterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
    console.log(`Idade: ${person.age}`);
    console.log(`Genero: ${person.gender.toString()}`);
});

//TODOFiltrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens:', mens);

const womens = persons.filter(person => person.gender === gender.WOMAN)
console.log('\nNova lista apenas com mulheres:', womens);

//TODORetornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
})
console.log(personsWithCourse);

//TODOTransformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;

    
},0)
console.log('\nSoma de idade das possoas:', totalAge);

//TODOJuntando operações
const totalEvenAges = persons       
                            .filter(person =>person.age % 2 === 0)
                            .reduce((age, person)=>{
                                age += person.age;
                                return age;
                            },0);
console.log('\nSoma de idades das pessoas que possuem idade par:' , totalEvenAges);                                

