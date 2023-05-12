let altura_cm = 177
let altura_m = new Number(1.77)
console.log(altura_cm)
console.log(altura_m.valueOf())

let peso_kg = new Number(77.0)
console.log(peso_kg.toPrecision(3))

let altura_round = Math.round(altura_m)
console.log(altura_round)

let peso_floor = Math.floor(peso_kg)
console.log(peso_floor.toPrecision(3))

let es_igual = Number.MAX_VALUE+1 === Number.MAX_VALUE
console.log(es_igual)