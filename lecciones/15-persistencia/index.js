// Local Storage: Datos persistentes en el navegador y el sistema
localStorage.setItem("nombre", "Juanma"); // Guarda info en local. Puede ser cualquier tipo de variable primitiva u objeto
localStorage.setItem("nombre", "Juanxo"); // Se edita así
console.log(localStorage.getItem("nombre"));

localStorage.setItem("persona", {nombre: "Juanma", edad: 24});
console.log(localStorage.getItem("persona"));

localStorage.setItem("persona", JSON.stringify({nombre: "Juanma", edad: 24})); // Forma correcta que convierte objeto a string
console.log(localStorage.getItem("persona"));
console.log(JSON.parse(localStorage.getItem("persona"))); // Vuelta a convertir a modo objeto

localStorage.removeItem("nombre");

// Session Storage: Datos persistentes por sesión
// Mismos métodos, se trabaja de la misma manera

// Cookies: Datos persistentes en el navegador nada más. Tienen caducidad
document.cookie = "nombreCookie=GorkaCookie"; // Creación de cookie
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString();

console.log(document.cookie);

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo
// - Observa cómo la SessionStorage está vacía
// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador
// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado