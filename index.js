//const fruits = new Array();
const fruits = [];
const vegetabls = ['Potatos','Tomatos']

fruits.push('Apple');
fruits.push('lemon');
//fruits.pop();
fruits.unshift('Pinapple');
//fruits.shift();
fruits.push('Banana');

const newArrayProducts = vegetabls.concat(fruits);

const string = newArrayProducts.join('\v');

//console.log(vegetabls.indexOf('Pinapple'));

//console.log(newArrayProducts);

//console.log(fruits.indexOf('lemon'));

const numbers = [1,2,3,4,5]

for (let i = 1; i <newArrayProducts.length; i++) {
    //numbers[i] = numbers[i] +2;
    numbers[i] +=2;
    console.log(numbers[i]);
}
 console.log(numbers);