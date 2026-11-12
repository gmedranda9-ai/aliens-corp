/* Catálogo Tecnología · Aliens Corp (laptops e impresoras) */
/* ====== DATA ====== */
const PHOTOS = {
  "epson_l3250": "../img/tecnologia/epson_l3250.webp",
  "epson_l4360": "../img/tecnologia/epson_l4360.webp",
  "epson_l14150": "../img/tecnologia/epson_l14150.webp",
  "hp_r7": "../img/tecnologia/hp_r7.webp",
  "lenovo_r7": "../img/tecnologia/lenovo_r7.webp",
  "hp_gamer": "../img/tecnologia/hp_gamer.webp",
  "yoga_i7": "../img/tecnologia/yoga_i7.webp",
  "hp_i5": "../img/tecnologia/hp_i5.webp",
  "lenovo_i3": "../img/tecnologia/lenovo_i3.webp",
  "dell_i5": "../img/tecnologia/dell_i5.webp",
  "hp_r5": "../img/tecnologia/hp_r5.webp",
  "lenovo_r5": "../img/tecnologia/lenovo_r5.webp",
  "lenovo_r3": "../img/tecnologia/lenovo_r3.webp",
};

const items = [
  {brand:"Apple", tags:["Apple"], type:"yoga_no", t:"MacBook Air M2 · 13.3\"",
   specs:["Chip <b>M2</b>","<b>8GB</b>","<b>256GB</b> SSD","13.3\"","macOS"],
   price:1106, art:"mac", body:"#23252e", accent:"#a07bff", note:"Color Medianoche", premium:true},

  {brand:"Lenovo", tags:["Lenovo","Gaming"], gaming:true, photo:"yoga_i7", t:"Lenovo ThinkPad X1 Yoga · i7",
   specs:["Intel <b>i7</b> Gen13","<b>32GB</b>","<b>512GB</b> SSD","14\" Táctil","Win 11"],
   price:2049, art:"yoga", accent:"#5be8ff", note:"Convertible 2-en-1 · Táctil", premium:true},

  {brand:"HP", tags:["HP","Gaming"], gaming:true, photo:"hp_gamer", t:"HP Gamer · Ryzen 7 · RTX 4050",
   specs:["AMD <b>Ryzen 7</b>","<b>16GB</b>","<b>512GB</b> SSD","<b>RTX 4050</b> 6GB","15.6\""],
   price:1243, art:"gaming", accent:"#ff5a6e", note:"Gráfica dedicada para juegos y diseño", premium:true},

  {brand:"Apple", tags:["Apple"], t:"MacBook Air · 6 núcleos · 13\"",
   specs:["Chip <b>6 núcleos</b>","<b>8GB</b>","<b>256GB</b> SSD","13\"","macOS"],
   price:979, art:"mac", body:"#c9ccd4", accent:"#5be8ff"},

  {brand:"Apple", tags:["Apple"], t:"MacBook Air · 6 núcleos · 13\"",
   specs:["Chip <b>6 núcleos</b>","<b>8GB</b>","<b>256GB</b> SSD","13\"","macOS"],
   price:979, art:"mac", body:"#8e919b", accent:"#a07bff", note:"Color Gris Espacial"},

  {brand:"Lenovo", tags:["Lenovo"], photo:"lenovo_r7", t:"Lenovo · Ryzen 7 · Táctil",
   specs:["AMD <b>Ryzen 7</b>","<b>16GB</b>","<b>512GB</b> SSD","15.6\" Táctil","Win 11"],
   price:919, art:"win", accent:"#36d7c9", note:"Pantalla táctil · teclado inglés"},

  {brand:"HP", tags:["HP"], photo:"hp_r7", t:"HP · AMD Ryzen 7 · 1TB",
   specs:["AMD <b>Ryzen 7</b>","<b>16GB</b>","<b>1TB</b> SSD","15.6\""],
   price:892, art:"win", accent:"#36d7c9"},

  /* ===== NUEVAS · sin sistema operativo (efectivo + $100) ===== */

  {brand:"HP", tags:["HP"], photo:"hp_i5", t:"HP · Intel Core i5 · 12ª Gen",
   specs:["Intel <b>Core i5</b> 12ª Gen","<b>16GB</b>","<b>512GB</b> SSD","15.6\""],
   price:557, art:"win", accent:"#36d7c9"},

  {brand:"HP", tags:["HP"], photo:"hp_r5", t:"HP · AMD Ryzen 5",
   specs:["AMD <b>Ryzen 5</b>","<b>16GB</b>","<b>512GB</b> SSD","15.6\""],
   price:735, art:"win", accent:"#36d7c9"},

  {brand:"Lenovo", tags:["Lenovo"], photo:"lenovo_i3", t:"Lenovo · Intel Core i3 · 13ª Gen",
   specs:["Intel <b>Core i3</b> 13ª Gen","<b>8GB</b>","<b>512GB</b> SSD","15.6\""],
   price:662, art:"win", accent:"#ff5a6e"},

  {brand:"Lenovo", tags:["Lenovo"], photo:"lenovo_r5", t:"Lenovo · Ryzen 5",
   specs:["AMD <b>Ryzen 5</b>","<b>16GB</b>","<b>512GB</b> SSD","15.6\""],
   price:753, art:"win", accent:"#ff5a6e"},

  {brand:"Lenovo", tags:["Lenovo"], photo:"lenovo_r3", t:"Lenovo · Ryzen 3",
   specs:["AMD <b>Ryzen 3</b>","<b>8GB</b>","<b>512GB</b> SSD","15.6\""],
   price:556, art:"win", accent:"#ff5a6e"},

  {brand:"Dell", tags:["Dell"], photo:"dell_i5", t:"Dell · Intel Core i5 · 13ª Gen · Táctil",
   specs:["Intel <b>Core i5</b> 13ª Gen","<b>8GB</b>","<b>512GB</b> SSD","15.6\" Táctil","Win 11"],
   price:735, art:"win", accent:"#5be8ff", note:"Táctil · Windows 11 · teclado inglés"},

  /* ===== IMPRESORAS EPSON ===== */
  {brand:"Epson", cat:"Impresoras", tags:["Impresoras"], photo:"epson_l3250", t:"Epson EcoTank L3250",
   specs:["<b>3 en 1</b>","Wi-Fi Direct","Tinta continua","Incluye <b>4 tintas</b>","Sin bordes"],
   price:262, accent:"#66ecff", note:"Imprime, escanea y copia · EcoTank recargable"},

  {brand:"Epson", cat:"Impresoras", tags:["Impresoras"], photo:"epson_l4360", t:"Epson EcoTank L4360",
   specs:["<b>Multifunción</b>","Wi-Fi","<b>Dúplex</b>","Tinta continua","Incluye <b>4 tintas</b>"],
   price:320, accent:"#66ecff", note:"A color · impresión a doble cara automática"},

  {brand:"Epson", cat:"Impresoras", tags:["Impresoras"], photo:"epson_l14150", t:"Epson L14150 · A3",
   specs:["<b>Multifunción A3</b>","Wi-Fi","<b>Dúplex</b> + ADF","Imprime <b>A4 y A3</b>","Incluye <b>4 tintas</b>"],
   price:770, accent:"#66ecff", note:"Formato grande A3 · tinta continua · escanea y copia", premium:true},
];

