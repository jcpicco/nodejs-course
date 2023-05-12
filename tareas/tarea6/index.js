const listaCompra = ['Tomate', 'Papa', 'Queso', 'Habichuelas', 'Pasta'];
listaCompra.push('Aceite de girasol');
console.log(listaCompra);

listaCompra.splice(listaCompra.indexOf('Aceite de girasol'), 1);
console.log(listaCompra);

const listaPelis = [
    {
        titulo: 'aa',
        director: 'Yo',
        fecha: new Date(2022, 0, 15)
    },
    {
        titulo: 'bb',
        director: 'Mi padre',
        fecha: new Date(2012, 0, 15)
    },
    {
        titulo: 'cc',
        director: 'Mi madre',
        fecha: new Date(2018, 0, 15)
    },
];

const newlistaPelis = listaPelis.filter(o => o.fecha > new Date(2010, 0, 10));
console.log(newlistaPelis);

const listaPelisTitulos = listaPelis.map(valor => {
    return valor.titulo;
});
console.log(listaPelisTitulos);

const listaPelisDirectores = listaPelis.map(valor => {
    return valor.director;
});
console.log(listaPelisDirectores);

let listaPelisTitulosDirectores = listaPelisTitulos.concat(listaPelisDirectores);
console.log(listaPelisTitulosDirectores);

let listaPelisTitulosDirectoresFactor = [...listaPelisTitulos, ...listaPelisDirectores];
console.log(listaPelisTitulosDirectores);
