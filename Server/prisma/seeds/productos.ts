// seeds/productos.ts

/**
 * Aquí definimos algunos productos de ejemplo. Cada uno se relaciona
 * con una categoría (categoriaId) y puede tener etiquetas conectadas
 * (vía createMany en relación intermedia productoEtiquetas).
 *
 * Se asume que:
 *  - categoriaId  1  => "Teclados"
 *  - categoriaId  2  => "Accesorios"
 *
 * Las etiquetas se conectan mediante connect en el create de Prisma.
 */

export const productos = [
  {
    nombre: "Teclado Mecánico Básico",
    descripcion: "Teclado mecánico compacto con switches Outemu Blue.",
    precioBase: 45.00,
    stock: 50,
    categoriaId: 1,                  // Pertenece a "Teclados"
    promedioValoracion: 4.2,
    activo: true,
    // Posteriormente, en seed.ts haremos la lógica para insertar productoEtiquetas
    etiquetas: [1, 3],               // IDs de etiquetas: "Electrónica", "Nuevo"
  },
  {
    nombre: "Keycap PBT Retro",
    descripcion: "Conjunto de keycaps PBT de alta durabilidad, diseño retro.",
    precioBase: 25.00,
    stock: 100,
    categoriaId: 2,                  // Pertenece a "Accesorios"
    promedioValoracion: 4.7,
    activo: true,
    etiquetas: [1, 4],               // "Electrónica", "Gaming"
  },
  {
    nombre: "Cable USB-C Coiled Verde",
    descripcion: "Cable trenzado en espiral para conexión USB-C, color verde oliva.",
    precioBase: 8.00,
    stock: 200,
    categoriaId: 2,                  // "Accesorios"
    promedioValoracion: 4.5,
    activo: true,
    etiquetas: [1, 5],               // "Electrónica", "Personalizado"
  }
    ,
    {
        nombre: "Teclado Mecánico Personalizado",
        descripcion: "Teclado mecánico con opciones de personalización avanzadas.",
        precioBase: 120.00,
        stock: 30,
        categoriaId: 1,                  // "Teclados"
        promedioValoracion: 4.9,
        activo: true,
        etiquetas: [1, 2, 3],            // "Electrónica", "Oferta", "Nuevo"
    }
    
];