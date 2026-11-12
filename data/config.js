/* ====== CONFIGURACIÓN GENERAL · Aliens Corp ======
   WhatsApp: con código de país, sin + ni espacios.
   Para cambiar algo de la tienda, se cambia aquí y se refleja en todas las páginas. */
const WHATSAPP = "593982354338";

const TIENDA = {
  nombre: "Aliens Corp",
  ciudad: "Pedernales, Manabí",
  entrega: "7 a 10 días",
  /* Fecha límite para pedidos de Navidad (ej. "15 de diciembre"). Si queda en null, no se muestra. */
  limiteNavidad: null,
};

function money(n){ return "$" + Number(n).toFixed(2).replace(".", ","); }
function waURL(texto){ return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto); }
