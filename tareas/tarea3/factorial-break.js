let resultado = 1;
let i = 2;

while(true){
    if(i < 11){
        resultado = resultado*i;
        i++;
    }else{
        break;
    }
}

console.log(resultado);