function fibonacci(num){
    let listaFibonacci = [1, 1];

    for(let i = 0 ; i < num-2 ; i++){
        listaFibonacci.push(listaFibonacci[i]+listaFibonacci[i+1]);
    }

    return listaFibonacci;
}

console.log(fibonacci(10));