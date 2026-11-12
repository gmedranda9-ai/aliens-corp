/* Catálogo de Regalos · Aliens Corp (datos públicos: solo precio de venta) */
const REGALOS = [
 {
  "id": "AC-NAV-01",
  "coleccion": "navidad",
  "nombre": "Brindis Clásico",
  "destacados": "Vino Gato Negro · Ferrero Rocher · Libreta",
  "caja": "Caja de madera de pino (14,5 x 14,5 cm)",
  "incluye": [
   "Botella de vino pequeña Gato Negro (187,5 ml)",
   "Libreta de notas blanca personalizada + bolígrafo",
   "Chocolate Ferrero Rocher (x3)"
  ],
  "presentacion": "Lazo, dedicatoria personalizada y envoltura de celofán",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 33.9
 },
 {
  "id": "AC-NAV-02",
  "coleccion": "navidad",
  "nombre": "Mortiño y Pistachos",
  "destacados": "Vino de mortiño · Pistachos · Llavero de madera",
  "caja": "Caja de madera MDF (25 x 12 cm)",
  "incluye": [
   "Botella de vino de mortiño mediana (375 ml)",
   "Pistachos en frasco de vidrio (45 ml)",
   "Llavero de madera personalizado en bolsa de tela"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 36.9
 },
 {
  "id": "AC-NAV-03",
  "coleccion": "navidad",
  "nombre": "Mug y Ferrero",
  "destacados": "Mug térmico personalizado · Ferrero Rocher",
  "caja": "Caja de madera de pino (15 x 15 cm)",
  "incluye": [
   "Mug térmico de aluminio personalizado (330 ml)",
   "Chocolate Ferrero Rocher (x3)"
  ],
  "presentacion": "Lazo, dedicatoria personalizada y envoltura de celofán",
  "nota": "",
  "licor": false,
  "planta": false,
  "personalizable": true,
  "precio": 37.9
 },
 {
  "id": "AC-NAV-04",
  "coleccion": "navidad",
  "nombre": "Vela y Vino Pequeño",
  "destacados": "Vino Indómita · Ferrero Rocher · Vela navideña",
  "caja": "Caja de madera de pino (10 x 10 cm)",
  "incluye": [
   "Botella de vino pequeña Indómita (187,5 ml)",
   "Chocolate Ferrero Rocher (x4)",
   "Vela navideña"
  ],
  "presentacion": "Lazo, dedicatoria personalizada y envoltura de celofán",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": false,
  "precio": 37.9
 },
 {
  "id": "AC-NAV-05",
  "coleccion": "navidad",
  "nombre": "Bonsái y Whisky Canela",
  "destacados": "Baby bonsái · Whisky Black Castle Canela · Pacari",
  "caja": "Caja de madera de pino (13 x 20 cm)",
  "incluye": [
   "Whisky Black Castle Canela (200 ml)",
   "Chocolate Pacari (2 barras de 10 g)",
   "Baby bonsái en maceta de barro (Ø 11 cm)"
  ],
  "presentacion": "Lazo decorativo y dedicatoria · Sin cubierta ni tapa",
  "nota": "Puedes cambiar el whisky por un vino de mortiño (165 ml) sin costo adicional.",
  "licor": true,
  "planta": true,
  "personalizable": false,
  "precio": 38.9
 },
 {
  "id": "AC-NAV-06",
  "coleccion": "navidad",
  "nombre": "Canasta Dulce",
  "destacados": "Vino Mancura · Nutella · Cactus",
  "caja": "Canasta de fibra natural (Ø 16 cm)",
  "incluye": [
   "Botella de vino pequeña Mancura",
   "Chocolate Nutella (140 g) + cuchara navideña dorada",
   "Planta (cactus/suculenta) en mini maceta (Ø 4,5 cm)",
   "Bastón de caramelo navideño"
  ],
  "presentacion": "Lazo, dedicatoria personalizada y envoltura de celofán",
  "nota": "",
  "licor": true,
  "planta": true,
  "personalizable": false,
  "precio": 39.9
 },
 {
  "id": "AC-NAV-07",
  "coleccion": "navidad",
  "nombre": "Hexágono Jäger",
  "destacados": "Mini Jägermeister · Mug térmico · Frutos secos",
  "caja": "Caja de madera de pino hexagonal (15 cm)",
  "incluye": [
   "Mug térmico plástico personalizado",
   "Chocolate Pacari (1 barra de 10 g)",
   "Mini licor Jägermeister (40 ml)",
   "Mix de frutos secos en bolsa de tela"
  ],
  "presentacion": "Lazo, dedicatoria personalizada y envoltura de celofán",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 39.9
 },
 {
  "id": "AC-NAV-08",
  "coleccion": "navidad",
  "nombre": "Galletas de Árbol",
  "destacados": "Mini Jägermeister · Galletas Colombina · Bombillo",
  "caja": "Caja de madera de pino (25 x 20 cm)",
  "incluye": [
   "Mini licor Jägermeister (40 ml)",
   "Galletas en lata en forma de árbol Colombina (200 g)",
   "Chocolate Pacari (2 barras de 10 g)",
   "Bombillo navideño pequeño personalizado"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 40.9
 },
 {
  "id": "AC-NAV-09",
  "coleccion": "navidad",
  "nombre": "Bonsái y Vino",
  "destacados": "Vino mediano · Baby bonsái · Frutos secos",
  "caja": "Caja de madera de pino hexagonal (18 cm)",
  "incluye": [
   "Botella de vino mediana (375 ml)",
   "Baby bonsái en maceta de barro (Ø 11 cm) + topper de madera",
   "Mix de frutos secos en frasco de vidrio con tapa de corcho (150 ml)"
  ],
  "presentacion": "Lazo decorativo y dedicatoria · Sin cubierta ni tapa",
  "nota": "",
  "licor": true,
  "planta": true,
  "personalizable": false,
  "precio": 40.9
 },
 {
  "id": "AC-NAV-10",
  "coleccion": "navidad",
  "nombre": "Bonsái y Caramelos",
  "destacados": "Baby bonsái · Caramelos en lata · Pacari",
  "caja": "Caja de madera MDF hexagonal (18 cm)",
  "incluye": [
   "Baby bonsái en maceta de barro (Ø 11 cm) + topper de madera",
   "Mix especial de frutos secos en bolsa de celofán",
   "Caramelos en lata Cavendish & Harvey",
   "Chocolate Pacari (2 barras de 10 g)"
  ],
  "presentacion": "Lazo decorativo y dedicatoria · Sin cubierta ni tapa",
  "nota": "",
  "licor": false,
  "planta": true,
  "personalizable": false,
  "precio": 40.9
 },
 {
  "id": "AC-NAV-11",
  "coleccion": "navidad",
  "nombre": "Pesebre Navideño",
  "destacados": "Taza navideña · Vino Gato Negro · Mini pesebre",
  "caja": "Caja de acetato tipo lonchera (15 x 15 cm)",
  "incluye": [
   "Taza navideña de cerámica + cuchara metálica navideña",
   "Botella de vino pequeña Gato Negro (187,5 ml)",
   "Barra de chocolate Pacari (50 g)",
   "Mini pesebre de madera + bombillo acrílico navideño personalizado (Ø 10 cm)"
  ],
  "presentacion": "Lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 40.9
 },
 {
  "id": "AC-NAV-12",
  "coleccion": "navidad",
  "nombre": "Copa y Cactus",
  "destacados": "Copa personalizada · Vino mediano · Pacari Rosas",
  "caja": "Caja de madera MDF (16 x 16 cm)",
  "incluye": [
   "Planta (cactus/suculenta) en maceta de barro (Ø 7 cm)",
   "Botella de vino mediana (375 ml)",
   "Copa de vidrio personalizada",
   "Chocolate Pacari Rosas (3 barras de 10 g)",
   "Mix especial de frutos secos en bolsa de celofán"
  ],
  "presentacion": "Lazo decorativo y dedicatoria · Sin cubierta ni tapa",
  "nota": "",
  "licor": true,
  "planta": true,
  "personalizable": true,
  "precio": 42.9
 },
 {
  "id": "AC-NAV-13",
  "coleccion": "navidad",
  "nombre": "Árbol y Champaña",
  "destacados": "Champaña Anthony · Ferrero Rocher · Vela",
  "caja": "Caja de madera de pino en forma de árbol de Navidad (28,5 x 21,5 cm)",
  "incluye": [
   "Champaña Anthony (187 ml)",
   "Chocolate Ferrero Rocher (x3)",
   "Mini vela decorativa navideña"
  ],
  "presentacion": "Lazo, dedicatoria personalizada y envoltura de celofán",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": false,
  "precio": 44.9
 },
 {
  "id": "AC-NAV-14",
  "coleccion": "navidad",
  "nombre": "Café Lojano y Jarro",
  "destacados": "Café El Gentil · Jarro personalizado · Vela",
  "caja": "Caja de madera de pino (25 x 20 cm)",
  "incluye": [
   "Café artesanal lojano El Gentil (200 g)",
   "Jarro con base de corcho y tapa personalizado (450 ml)",
   "Vela navideña"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": false,
  "planta": false,
  "personalizable": true,
  "precio": 44.9
 },
 {
  "id": "AC-NAV-15",
  "coleccion": "navidad",
  "nombre": "Set de Oficina",
  "destacados": "Vaso personalizado · Libreta y bolígrafo · Adaptadores",
  "caja": "Caja de madera MDF (25 x 20 cm)",
  "incluye": [
   "Set de adaptadores para oficina personalizado",
   "Vaso de vidrio personalizado con tapa de bambú y sorbete",
   "Libreta de notas personalizada con bolígrafo",
   "Chocolate Pacari (2 barras de 10 g)"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": false,
  "planta": false,
  "personalizable": true,
  "precio": 46.9
 },
 {
  "id": "AC-NAV-16",
  "coleccion": "navidad",
  "nombre": "Café y Té en Prensa",
  "destacados": "Prensa francesa · Set de tés · Frutos secos",
  "caja": "Caja de madera MDF con tapa deslizable, grabado láser y base de esponja (20 x 25 cm)",
  "incluye": [
   "Mix de frutos secos en frasco de vidrio con tapa de corcho (120 ml)",
   "Set x3 de tés/infusiones en frasco de vidrio (75 ml)",
   "Jarra/prensa francesa personalizada (350 ml)",
   "Porción de café de pasar"
  ],
  "presentacion": "Lazo decorativo y dedicatoria",
  "nota": "Sabores de té a elegir: frutos rojos o tropicales, té verde o negro, manzana y canela, guayusa.",
  "licor": false,
  "planta": false,
  "personalizable": true,
  "precio": 47.9
 },
 {
  "id": "AC-NAV-17",
  "coleccion": "navidad",
  "nombre": "Casita Navideña",
  "destacados": "Casita de madera · Vino mediano · Taza personalizada",
  "caja": "Caja tipo casa de madera MDF (20 x 10 x 25 cm)",
  "incluye": [
   "Botella de vino mediana (375 ml)",
   "Taza navideña personalizada",
   "Chocolate Hershey’s (barra de 43 g)",
   "Mix de frutos secos en bolsa de yute (50 g)"
  ],
  "presentacion": "Lazo decorativo y dedicatoria · Sin cubierta adicional",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 47.9
 },
 {
  "id": "AC-NAV-18",
  "coleccion": "navidad",
  "nombre": "Hexágono Negro y Café",
  "destacados": "Nombre personalizado · Mug térmico · Prensa francesa",
  "caja": "Caja de madera MDF hexagonal (18 cm), pintada en negro mate con nombre personalizado",
  "incluye": [
   "Mug térmico plástico personalizado (300 ml)",
   "Jarra/prensa francesa (350 ml)",
   "Café de pasar Montañés (200 g)"
  ],
  "presentacion": "Dedicatoria personalizada y envoltura de celofán",
  "nota": "",
  "licor": false,
  "planta": false,
  "personalizable": true,
  "precio": 48.9
 },
 {
  "id": "AC-NAV-19",
  "coleccion": "navidad",
  "nombre": "Casita Café y Alfajor",
  "destacados": "Taza navideña · Café Montañés · Alfajor Cachafaz",
  "caja": "Caja de madera de pino tipo casa con tapa de acrílico deslizable y grabado láser (22 x 17 cm)",
  "incluye": [
   "Taza navideña de cerámica + cuchara metálica navideña",
   "Café de pasar Montañés (60 g)",
   "Alfajor Cachafaz (60 g)",
   "Mix de arándanos y maní salado en frasco de vidrio con tapa de corcho (50 ml)"
  ],
  "presentacion": "Lazo decorativo y dedicatoria",
  "nota": "",
  "licor": false,
  "planta": false,
  "personalizable": true,
  "precio": 48.9
 },
 {
  "id": "AC-NAV-20",
  "coleccion": "navidad",
  "nombre": "Bonsái, Taza y Café",
  "destacados": "Baby bonsái · Café Montañés · Taza especial",
  "caja": "Caja de madera de pino (20 x 20 cm)",
  "incluye": [
   "Baby bonsái en maceta de barro (Ø 11 cm)",
   "Café de pasar Montañés (200 g)",
   "Taza navideña especial",
   "Chocolate Pacari (2 barras de 10 g)",
   "Mix de frutos secos en bolsa de tela"
  ],
  "presentacion": "Lazo decorativo y dedicatoria · Sin cubierta ni tapa",
  "nota": "",
  "licor": false,
  "planta": true,
  "personalizable": false,
  "precio": 48.9
 },
 {
  "id": "AC-NAV-21",
  "coleccion": "navidad",
  "nombre": "Jäger y Copa",
  "destacados": "Jägermeister 200 ml · Mini copa · Ferrero Rocher",
  "caja": "Caja de madera MDF hexagonal (15 cm), pintada en negro mate con nombre personalizado",
  "incluye": [
   "Licor Jägermeister (200 ml)",
   "Mini copa de vidrio decorativa",
   "Chocolate Ferrero Rocher (x4)"
  ],
  "presentacion": "Lazo, dedicatoria personalizada y envoltura de celofán",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 49.9
 },
 {
  "id": "AC-NAV-22",
  "coleccion": "navidad",
  "nombre": "Té, Café y Chocolate",
  "destacados": "Prensa francesa · Café El Gentil · Set de tés",
  "caja": "Caja de madera MDF hexagonal (18 cm)",
  "incluye": [
   "Jarra/prensa francesa personalizada (350 ml)",
   "Café artesanal lojano El Gentil (200 g)",
   "Set x3 de té/infusión en frasco de vidrio con tapa de corcho (80 ml)",
   "Barra de chocolate Pacari (50 g)"
  ],
  "presentacion": "Lazo, dedicatoria personalizada y envoltura de celofán",
  "nota": "Sabores de té a elegir: frutos rojos o tropicales, té verde o negro, manzana y canela, guayusa.",
  "licor": false,
  "planta": false,
  "personalizable": true,
  "precio": 50.9
 },
 {
  "id": "AC-NAV-23",
  "coleccion": "navidad",
  "nombre": "Tabla de Quesos",
  "destacados": "Tabla y cuchillo · Queso Mondel · Mermelada",
  "caja": "Caja de madera MDF con jaladeras de cuerda (20 x 20 cm)",
  "incluye": [
   "Tabla y cuchillo de quesos de bambú",
   "Queso maduro Mondel (110 g) envuelto en tela decorativa",
   "Mermelada de arándano St Dalfour (284 g)",
   "Bastón de caramelo navideño"
  ],
  "presentacion": "Lazo, dedicatoria personalizada y envoltura de celofán",
  "nota": "",
  "licor": false,
  "planta": false,
  "personalizable": false,
  "precio": 51.9
 },
 {
  "id": "AC-NAV-24",
  "coleccion": "navidad",
  "nombre": "Jardín y Mug",
  "destacados": "Bonsái jardín · Mug térmico · Capuchino",
  "caja": "Caja de madera MDF (25 x 20 cm)",
  "incluye": [
   "Baby bonsái en maceta de cerámica con decoración tipo jardín (Ø 12 cm)",
   "Mug térmico de aluminio personalizado (330 ml)",
   "Capuchino instantáneo y mix de frutos secos en frascos de vidrio con tapa de corcho (80 ml)",
   "Chocolate Pacari (2 barras de 10 g)"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": false,
  "planta": true,
  "personalizable": true,
  "precio": 54.9
 },
 {
  "id": "AC-NAV-25",
  "coleccion": "navidad",
  "nombre": "Café Lojano y Tés",
  "destacados": "Café El Gentil · Set de tés · Prensa francesa",
  "caja": "Caja de madera MDF (33 x 20 cm)",
  "incluye": [
   "Café artesanal lojano El Gentil (200 g)",
   "Barra de chocolate Pacari (50 g)",
   "Set x3 de tés/infusiones en frasco de vidrio (75 ml)",
   "Jarra/prensa francesa personalizada (350 ml)"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "Sabores de té a elegir: frutos rojos o tropicales, té verde o negro, manzana y canela, guayusa.",
  "licor": false,
  "planta": false,
  "personalizable": true,
  "precio": 54.9
 },
 {
  "id": "AC-NAV-26",
  "coleccion": "navidad",
  "nombre": "Bombillo y Vino",
  "destacados": "Vino Gato Negro · Mug · Bombillo con dulces",
  "caja": "Caja de madera de pino con frente de acrílico deslizable y grabado láser (20 x 20 cm)",
  "incluye": [
   "Botella de vino pequeña Gato Negro (187,5 ml)",
   "Mug térmico de aluminio personalizado (330 ml)",
   "Bombillo traslúcido personalizado (Ø 8 cm) relleno de dulces: chocolate Rafaello, caramelo de leche, chocolate Noggy",
   "Esfero negro personalizado en caja de cartulina"
  ],
  "presentacion": "Dedicatoria · Sin cubierta adicional",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 54.9
 },
 {
  "id": "AC-NAV-27",
  "coleccion": "navidad",
  "nombre": "Parlante y Jarro",
  "destacados": "Parlante bluetooth · Jarro personalizado · Porta celular",
  "caja": "Caja de madera con tapa deslizable y grabado láser (20 x 20 cm)",
  "incluye": [
   "Jarro con base de corcho y tapa personalizado (400 ml)",
   "Parlante bluetooth pequeño",
   "Porta celular de bambú",
   "Chocolate Pacari (1 barra de 10 g)"
  ],
  "presentacion": "Lazo decorativo y dedicatoria",
  "nota": "",
  "licor": false,
  "planta": false,
  "personalizable": true,
  "precio": 54.9
 },
 {
  "id": "AC-NAV-28",
  "coleccion": "navidad",
  "nombre": "Bonsái, Copa y Vino",
  "destacados": "Bonsái jardín · Copa personalizada · Vino Mancura",
  "caja": "Caja de madera MDF (33 x 20 cm)",
  "incluye": [
   "Baby bonsái con decoración tipo jardín (Ø 13 cm)",
   "Copa de vidrio personalizada",
   "Botella de vino pequeña Mancura (187,5 ml)",
   "Chocolate Ferrero Rocher (x4)",
   "Mix de frutos secos en frasco de vidrio con tapa de corcho (150 ml)"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": true,
  "personalizable": true,
  "precio": 55.9
 },
 {
  "id": "AC-NAV-29",
  "coleccion": "navidad",
  "nombre": "Mortiño y Bonsái",
  "destacados": "Vino de mortiño · Bonsái · Copa personalizada",
  "caja": "Caja de madera de pino (25 x 25 cm)",
  "incluye": [
   "Baby bonsái en maceta de barro (Ø 11 cm)",
   "Botella de vino de mortiño mediana (375 ml)",
   "Copa de vidrio personalizada",
   "Set de pistachos y maní/arándanos en frasco de vidrio con corcho (110 ml c/u)"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": true,
  "personalizable": true,
  "precio": 56.9
 },
 {
  "id": "AC-NAV-30",
  "coleccion": "navidad",
  "nombre": "Mortiño Grande",
  "destacados": "Mortiño 750 ml · Galletas · Bombillo personalizado",
  "caja": "Caja de madera MDF con nombre personalizado (20 x 20 cm)",
  "incluye": [
   "Botella de vino de mortiño grande (750 ml)",
   "Galletas en lata en forma de árbol de Navidad Colombina (200 g)",
   "Vela navideña",
   "Chocolate Ferrero Rocher (x1)",
   "Bombillo traslúcido personalizado (Ø 10 cm)",
   "Topper de madera"
  ],
  "presentacion": "Lazo decorativo y dedicatoria · Sin cubierta ni tapa",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 58.9
 },
 {
  "id": "AC-NAV-31",
  "coleccion": "navidad",
  "nombre": "Bonsái y Whisky",
  "destacados": "Bonsái jardín · Whisky Canela · Café El Gentil",
  "caja": "Caja de madera MDF (33 x 20 cm)",
  "incluye": [
   "Baby bonsái con decoración tipo jardín en maceta de barro + topper de madera",
   "Whisky Black Castle Canela (200 ml)",
   "Caramelos en lata Cavendish & Harvey",
   "Café artesanal lojano El Gentil (200 g)",
   "Mix de frutos secos en frasco de vidrio con tapa de corcho (80 ml)"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": true,
  "personalizable": false,
  "precio": 60.9
 },
 {
  "id": "AC-NAV-32",
  "coleccion": "navidad",
  "nombre": "Vino y Sacacorchos",
  "destacados": "Vino mediano · Nutella · Galletas Tivoli",
  "caja": "Caja de madera de pino (20 x 20 cm)",
  "incluye": [
   "Botella de vino mediana (375 ml)",
   "Sacacorchos multiuso",
   "Lata de galletas Tivoli (150 g)",
   "Chocolate Nutella (140 g)",
   "Bombillo traslúcido personalizado (Ø 7 cm) + chocolate Ferrero Rocher (x1)"
  ],
  "presentacion": "Lazo, dedicatoria personalizada y envoltura de celofán",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 60.9
 },
 {
  "id": "AC-NAV-33",
  "coleccion": "navidad",
  "nombre": "Noche de Vino",
  "destacados": "Vino mediano · Accesorios de vino · Cascanueces",
  "caja": "Caja de madera de pino (19 x 19 cm)",
  "incluye": [
   "Botella de vino mediana (375 ml)",
   "Aceitunas rellenas (235 - 250 g)",
   "Barra de chocolate Pacari (50 g)",
   "Set de accesorios de vino (4 piezas)",
   "Esfero negro en estuche metálico personalizado",
   "Cascanueces decorativo de madera"
  ],
  "presentacion": "Lazo, dedicatoria personalizada y envoltura de celofán",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 67.9
 },
 {
  "id": "AC-NAV-34",
  "coleccion": "navidad",
  "nombre": "Libreta y Café",
  "destacados": "Libreta personalizada · Café El Gentil · Mug térmico",
  "caja": "Caja de madera MDF (33 x 23 cm)",
  "incluye": [
   "Libreta personalizada + esfero",
   "Café artesanal lojano El Gentil (200 g)",
   "Chocolate Pacari (2 barras de 10 g)",
   "Mug térmico de aluminio personalizado (330 ml)",
   "Jarra/prensa francesa (350 ml)"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": false,
  "planta": false,
  "personalizable": true,
  "precio": 68.9
 },
 {
  "id": "AC-NAV-35",
  "coleccion": "navidad",
  "nombre": "Bonsái Adulto y Vino",
  "destacados": "Bonsái de 3 años · Vino grande · Caramelos",
  "caja": "Caja de madera MDF (33 x 23 cm)",
  "incluye": [
   "Bonsái adulto (3 años) en maceta rústica tipo piedra + topper de madera",
   "Caramelos Cavendish & Harvey (200 g) o chocolates Ferrero Rocher (x4)",
   "Botella de vino grande: El Último Inca o Gato Negro (750 ml)"
  ],
  "presentacion": "Lazo decorativo y dedicatoria · Sin cubierta ni tapa",
  "nota": "Puedes cambiar el vino por una crema de licor Brogan’s por un adicional (consúltalo por WhatsApp).",
  "licor": true,
  "planta": true,
  "personalizable": false,
  "precio": 68.9
 },
 {
  "id": "AC-NAV-36",
  "coleccion": "navidad",
  "nombre": "Mortiño y Jardín",
  "destacados": "Mortiño 750 ml · Bonsái jardín · Vela de árbol",
  "caja": "Caja de madera de pino (33 x 19 cm)",
  "incluye": [
   "Botella de vino de mortiño grande (750 ml)",
   "Mini copa de vidrio personalizada",
   "Baby bonsái con decoración tipo jardín en maceta de cerámica (Ø 12 cm)",
   "Vela decorativa en forma de árbol de Navidad",
   "Chocolate Ferrero Rocher (x3)"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": true,
  "personalizable": true,
  "precio": 72.9
 },
 {
  "id": "AC-NAV-37",
  "coleccion": "navidad",
  "nombre": "Triángulo y Champaña",
  "destacados": "Champaña Alto Palermo · Taza · Bombillo con Ferrero",
  "caja": "Caja de madera de pino en forma de triángulo (40 x 32 cm)",
  "incluye": [
   "Champaña Alto Palermo (750 ml)",
   "Taza navideña personalizada",
   "Chocolate Ferrero Rocher (x3) + bombillo traslúcido personalizado (Ø 8 cm)",
   "Bastón de caramelo navideño"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 73.9
 },
 {
  "id": "AC-NAV-38",
  "coleccion": "navidad",
  "nombre": "Ciprés y Cerezas",
  "destacados": "Ciprés limón · Cerezas en almíbar · Ferrero Rocher",
  "caja": "Caja de madera de pino vertical con tapa de acrílico deslizable y grabado láser (33 x 20 cm)",
  "incluye": [
   "Baby bonsái ciprés limón en maceta decorativa de plástico",
   "Cerezas en almíbar Helios (160 g)",
   "Chocolate Ferrero Rocher (x4)",
   "Vela navideña"
  ],
  "presentacion": "Lazo decorativo y dedicatoria",
  "nota": "",
  "licor": false,
  "planta": true,
  "personalizable": true,
  "precio": 73.9
 },
 {
  "id": "AC-NAV-39",
  "coleccion": "navidad",
  "nombre": "Rosado y Vela",
  "destacados": "Vino rosado Mateus · Jarro de vidrio · Ferrero Rocher",
  "caja": "Caja de madera de pino con tapa superpuesta de acrílico (20 x 20 cm)",
  "incluye": [
   "Vino rosado pequeño Mateus (187 ml)",
   "Jarro de vidrio doble pared con tapa de bambú personalizado (250 ml)",
   "Chocolate Ferrero Rocher (x4)",
   "Vela navideña",
   "Bastón de caramelo navideño"
  ],
  "presentacion": "Lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 73.9
 },
 {
  "id": "AC-NAV-40",
  "coleccion": "navidad",
  "nombre": "Bonsái Adulto y Café",
  "destacados": "Bonsái adulto · Prensa francesa · Café Montañés",
  "caja": "Caja de madera MDF (33 x 20 cm)",
  "incluye": [
   "Bonsái adulto en maceta tipo piedra (20 cm) + topper de madera",
   "Jarra/prensa francesa (350 ml)",
   "Café de pasar Montañés (200 g)",
   "Mix de frutos secos en bolsa de yute",
   "Set x3 de infusiones en frasco de vidrio con corcho (75 ml)"
  ],
  "presentacion": "Lazo decorativo, dedicatoria y cubierta de tela tul",
  "nota": "Sabores de té a elegir: frutos rojos o tropicales, té verde o negro, manzana y canela, guayusa.",
  "licor": false,
  "planta": true,
  "personalizable": false,
  "precio": 76.9
 },
 {
  "id": "AC-NAV-41",
  "coleccion": "navidad",
  "nombre": "Espumante y Aroma",
  "destacados": "Espumante Alto Palermo · Vela aromática · Bombillo Kisses",
  "caja": "Caja de madera de pino vertical con tapa de acrílico deslizable y grabado láser (33 x 20 cm)",
  "incluye": [
   "Vino espumante Alto Palermo (750 ml)",
   "Vela aromática",
   "Bombillo traslúcido personalizado (Ø 8 cm) con chocolates Kisses Hershey’s (70 g)",
   "Mix de frutos secos en frasco de vidrio (212 ml)"
  ],
  "presentacion": "Lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 77.9
 },
 {
  "id": "AC-NAV-42",
  "coleccion": "navidad",
  "nombre": "Quesos y Vino Grande",
  "destacados": "Vino 750 ml · Tabla de quesos · Copa",
  "caja": "Caja de madera de pino (24 x 24 cm)",
  "incluye": [
   "Botella de vino grande Gato Negro (750 ml)",
   "Copa de vidrio personalizada",
   "Tabla de quesos + set x2 cuchillos de queso",
   "Galletas de crema de avellana Grisbi (135 g)",
   "Lata de aceitunas El Corte Inglés (120 g)"
  ],
  "presentacion": "Lazo decorativo, dedicatoria y cubierta de tela tul",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 77.9
 },
 {
  "id": "AC-NAV-43",
  "coleccion": "navidad",
  "nombre": "Canasta Gourmet",
  "destacados": "Whisky Johnnie Walker · Aceitunas con trufa · Mug",
  "caja": "Canasta artesanal con agarraderas (27 x 20 cm)",
  "incluye": [
   "Whisky Johnnie Walker Rojo (200 ml)",
   "Shot de vidrio decorativo",
   "Mug térmico plástico personalizado (300 ml) + sorbete de aluminio",
   "Aceitunas gourmet rellenas de trufa La Explanada (350 g)",
   "Galletas en lata en forma de árbol Colombina (200 g)",
   "Barra de chocolate Pacari (50 g)",
   "Vela decorativa en forma de árbol de Navidad",
   "Topper de madera"
  ],
  "presentacion": "Lazo decorativo, dedicatoria y cubierta de tela tul",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 85.9
 },
 {
  "id": "AC-NAV-44",
  "coleccion": "navidad",
  "nombre": "Negro y Chandon",
  "destacados": "Mini Chandon · Frutos secos · Café Juan Valdez",
  "caja": "Caja de madera MDF pintada en negro mate (34 x 20 cm)",
  "incluye": [
   "Set x3 de frutos secos en frasco de vidrio (75 ml): almendras, pistachos y arándanos",
   "Lata de galletas Tivoli (150 g)",
   "Café instantáneo Juan Valdez (50 g)",
   "Chocolate Ferrero Rocher (x3)",
   "Mini champaña Chandon (187 ml)"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": false,
  "precio": 85.9
 },
 {
  "id": "AC-NAV-45",
  "coleccion": "navidad",
  "nombre": "Bonsái Adulto Jardín",
  "destacados": "Bonsái adulto · Vino Gato Negro · Vela aromática",
  "caja": "Caja de madera MDF (30 x 30 cm)",
  "incluye": [
   "Bonsái adulto en maceta tipo piedra con decoración de jardín (Ø 20 cm) + topper de madera",
   "Botella de vino pequeña Gato Negro (187,5 ml)",
   "Chocolate Ferrero Rocher (x4)",
   "Caramelos alemanes en lata Cavendish & Harvey",
   "Mix de frutos secos en bolsa de yute (50 g)",
   "Vela aromática"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": true,
  "personalizable": false,
  "precio": 86.9
 },
 {
  "id": "AC-NAV-46",
  "coleccion": "navidad",
  "nombre": "Gran Caja Vino y Bonsái",
  "destacados": "Vino 750 ml · Bonsái jardín · Mug térmico",
  "caja": "Caja de madera MDF (30 x 30 cm)",
  "incluye": [
   "Botella de vino grande Gato Negro (750 ml)",
   "Baby bonsái con decoración tipo jardín en maceta de cerámica (Ø 12 cm)",
   "Mug térmico plástico (300 ml)",
   "Caramelos alemanes en lata Cavendish & Harvey (210 g)",
   "Cerezas en almíbar Helios (160 g)",
   "Chocolate Ferrero Rocher (x4)",
   "Bastón de caramelo navideño"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": true,
  "personalizable": false,
  "precio": 88.9
 },
 {
  "id": "AC-NAV-47",
  "coleccion": "navidad",
  "nombre": "Cafetera Italiana",
  "destacados": "Cafetera italiana · Café Cosecha Roja · Bonsái jardín",
  "caja": "Caja de madera de pino con jaladera y frente de acrílico, grabado láser (24 x 14,8 cm)",
  "incluye": [
   "Baby bonsái con decoración tipo jardín en maceta de cerámica (Ø 13,5 cm)",
   "Café de pasar Cosecha Roja (340 g) + cuchara medidora de madera",
   "Cafetera italiana metálica",
   "Vaso de vidrio doble pared para café personalizado"
  ],
  "presentacion": "Lazo decorativo y dedicatoria · Sin cubierta ni tapa",
  "nota": "",
  "licor": false,
  "planta": true,
  "personalizable": true,
  "precio": 97.9
 },
 {
  "id": "AC-NAV-48",
  "coleccion": "navidad",
  "nombre": "Amaretto y Pistacho",
  "destacados": "Amaretto Venezia 700 ml · Snacks · Crema de pistacho",
  "caja": "Caja de madera MDF (34 x 20 cm)",
  "incluye": [
   "Licor italiano Amaretto Venezia (700 ml)",
   "Set x3 de snacks en contenedor metálico (60 g): mix de frutos secos, chocolates Kisses Hershey’s y pistachos",
   "Crema de pistacho Quadriccio (200 g)"
  ],
  "presentacion": "Tapa de acetato, lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": false,
  "precio": 99.9
 },
 {
  "id": "AC-NAV-49",
  "coleccion": "navidad",
  "nombre": "Chandon Premium",
  "destacados": "Mini Chandon · Mug con corcho · Vela premium",
  "caja": "Caja de madera de pino con tapa deslizable de acrílico y grabado láser (32 x 22 cm)",
  "incluye": [
   "Mini champaña Chandon (187 ml)",
   "Mug térmico de aluminio con base de corcho personalizado (500 ml)",
   "Libreta de notas personalizada + esfero",
   "Crema al capuchino Scyavuru (200 g)",
   "Vela aromática premium",
   "Muñeco colgante navideño"
  ],
  "presentacion": "Lazo decorativo y dedicatoria",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 117.9
 },
 {
  "id": "AC-NAV-50",
  "coleccion": "navidad",
  "nombre": "Ejecutivo Brogan’s",
  "destacados": "Crema Brogan’s 700 ml · Mug 580 ml · Libreta",
  "caja": "Caja de madera de pino con jaladera (25 x 25 cm)",
  "incluye": [
   "Crema de licor Brogan’s (700 ml)",
   "Mug térmico de aluminio personalizado (580 ml)",
   "Libreta de notas negra con cierre imantado personalizada (incluye post-it)",
   "Esfero negro en estuche metálico personalizado",
   "Lata de galletas Tivoli (150 g)",
   "Cascanueces decorativo de madera"
  ],
  "presentacion": "Lazo decorativo y dedicatoria · Sin cubierta ni tapa",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 122.9
 },
 {
  "id": "AC-NAV-51",
  "coleccion": "navidad",
  "nombre": "Whisky 12 Años",
  "destacados": "Buchanan’s 12 años · Vaso whiskero · Caminera",
  "caja": "Caja de madera de pino con frente de acrílico deslizable y grabado láser (20 x 20 cm)",
  "incluye": [
   "Whisky Deluxe 12 Años Buchanan’s (750 ml)",
   "Vaso whiskero personalizado (10 oz)",
   "Caminera metálica para whisky personalizado con inicial (7 oz)",
   "Cubos de piedra + pinza para hielo",
   "Turrón premium El Almendro (75 g)"
  ],
  "presentacion": "Lazo decorativo y dedicatoria · Sin cubierta ni tapa",
  "nota": "",
  "licor": true,
  "planta": false,
  "personalizable": true,
  "precio": 163.9
 }
];
