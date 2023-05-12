const nombre = "Juan";
const apellido = "Consigliere";
const persona = {nombre, apellido};

localStorage.setItem("persona", JSON.stringify(persona));
sessionStorage.setItem("persona", JSON.stringify(persona));

expires = new Date(new Date().getTime() + 2*60000)
document.cookie = `persona=${JSON.stringify(persona)};expires=${expires.toUTCString()}`;

console.log(document.cookie);