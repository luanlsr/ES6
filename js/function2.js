this.name = 'Nome do contexto de criação';
const getNameArrowFn = () => this.name;

function getName(){
    return this.name;
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());

// const getDiscount = discount => price => price * discount

// const getTenPercent = getDiscount(.10)
// const getFifteenPercent = getDiscount(.15)
// const getTwentyPercent = getDiscount(.20)



// console.log(getTenPercent(500));
// console.log(getFifteenPercent(500));
// console.log(getTwentyPercent(500));

