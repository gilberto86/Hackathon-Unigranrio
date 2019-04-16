/*let nome;

if(nome === 'Gilberto Alves'){
    alert('Olá, ' + nome);
}else{
    alert('Olá, visitante');
}*/

function somar(primeiro, segundo){
    return primeiro + segundo;
}

function subtrair(primeiro, segundo){
    return primeiro - segundo;
}

/*function dividir(primeiro, segundo){
    if(segundo === 0){
        alert('Não é possivel fazer divisão com ' + segundo)
    }else{
        return primeiro / segundo;
    }
    
}*/

function dividir(primeiro, segundo){
    return segundo === 0 ? alert('Nao permitido') : primeiro / segundo;
}

function multiplicar(primeiro, segundo){
    return primeiro * segundo;
}

console.log(somar(1,2));
console.log(subtrair(5,2));
console.log(dividir(10,2));
console.log(multiplicar(5,5));

const animais = ['Cachorro', 'Gato', 'Jabuti', 'Papagaio', 'Tigre'];

const numbers = [314,100,3,2,250,9,1000];

// Neste metodo ira retornar outra array com os valores do array de numbers
//com o valor em dobro
//Obs: o array original (numbers) ficará com os valores iniciais
const doubleOfNumbers = numbers.map(function(number){
    return number * 2;
})

const addHappySufix = animais.map(function(animal){
    return animal + 'feliz';
})

const higherThanOneHundred = numbers.filter(function(number){
    return number >= 100;
})

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function isEven(number){
    return number % 2 === 0;
}

function isOdd(number){
    return number % 2 != 0
}

const evenNumbers = numbers2.filter(isEven);

const addNumbers = numbers2.filter(isOdd);





console.log(numbers2, evenNumbers);


console.log(higherThanOneHundred);

console.log(doubleOfNumbers, addHappySufix);

function insertSort(numeroAtual, proximoNumero){
    return numeroAtual - proximoNumero;
}
console.log(numbers.sort(function(numeroAtual, proximoNumero){

    return insertSort(numeroAtual, proximoNumero);
}));





