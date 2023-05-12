const fechaHoy = new Date();
console.log(fechaHoy);

const miFechaNacimiento = new Date(1998, 11, 4);
console.log(miFechaNacimiento);

const fechaMasTarde = fechaHoy.getTime() > miFechaNacimiento.getTime();
console.log(fechaMasTarde);

const diaNacimiento = miFechaNacimiento.getDate();
const MesNacimiento = miFechaNacimiento.getMonth() + 1;
const AnoNacimiento = miFechaNacimiento.getFullYear();
console.log(diaNacimiento);
console.log(MesNacimiento);
console.log(AnoNacimiento);