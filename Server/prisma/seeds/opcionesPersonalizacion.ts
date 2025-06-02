// seeds/opcionesPersonalizacion.ts

/**
 * Cada objeto indica a qué atributo corresponde (atributoId),
 * el nombre de la opción y el costo adicional que implica.
 * Asegúrate de que atributoId 1 = Switch, 2 = Keycap, 3 = Cable, 4 = Carcasa.
 */

export const opcionesPersonalizacion = [
  // Opciones para el atributo "Switch" (atributoId: 1)
  {
    atributoId: 1,
    nombreOpcion: "Cherry MX Red",
    costoAdicional: 5.00
  },
  {
    atributoId: 1,
    nombreOpcion: "Gateron Brown",
    costoAdicional: 4.50
  },
  {
    atributoId: 1,
    nombreOpcion: "Kailh Box White",
    costoAdicional: 6.00
  },

  // Opciones para el atributo "Keycap" (atributoId: 2)
  {
    atributoId: 2,
    nombreOpcion: "ABS Doble Inyección",
    costoAdicional: 8.00
  },
  {
    atributoId: 2,
    nombreOpcion: "PBT Sublimado",
    costoAdicional: 12.00
  },
  {
    atributoId: 2,
    nombreOpcion: "POM Dye-Sub",
    costoAdicional: 15.00
  },

  // Opciones para el atributo "Cable" (atributoId: 3)
  {
    atributoId: 3,
    nombreOpcion: "Cable Trenzado Negro",
    costoAdicional: 3.00
  },
  {
    atributoId: 3,
    nombreOpcion: "Cable USB-C Coiled",
    costoAdicional: 5.00
  },

  // Opciones para el atributo "Carcasa" (atributoId: 4)
  {
    atributoId: 4,
    nombreOpcion: "Carcasa Aluminio Anodizado",
    costoAdicional: 20.00
  },
  {
    atributoId: 4,
    nombreOpcion: "Carcasa Acrílico Transparente",
    costoAdicional: 12.00
  }
];
