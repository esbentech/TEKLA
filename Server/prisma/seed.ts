// seeds/seed.ts

import { PrismaClient } from "@prisma/client";


import { roles } from "./seeds/roles";
import { usuarios } from "./seeds/usuario";
import { categorias } from "./seeds/categorias";
import { etiquetas } from "./seeds/etiquetas";
import { atributosPersonalizacion } from "./seeds/atributosPersonalizacion";
import { opcionesPersonalizacion } from "./seeds/opcionesPersonalizacion";
import { productos } from "./seeds/productos";

const prisma = new PrismaClient();

async function main() {
  try {
    // 1. Roles (no tienen dependencias)
    await prisma.role.createMany({
      data: roles,
    });
    console.log("→ Roles creados");

    // 2. Usuarios (necesitan que existan los roles)
    await prisma.usuario.createMany({
      data: usuarios,
    });
    console.log("→ Usuarios creados");

    // 3. Categorías (no dependen de nada más)
    await prisma.categoria.createMany({
      data: categorias,
    });
    console.log("→ Categorías creadas");

    // 4. Etiquetas (no dependen de nada más)
    await prisma.etiqueta.createMany({
      data: etiquetas,
    });
    console.log("→ Etiquetas creadas");

    // 5. Atributos de personalización (no dependen de nada más)
    await prisma.atributoPersonalizacion.createMany({
      data: atributosPersonalizacion,
    });
    console.log("→ Atributos de personalización creados");

    // 6. Opciones de personalización (necesitan atributoId que ya existe)
    await prisma.opcionPersonalizacion.createMany({
      data: opcionesPersonalizacion,
    });
    console.log("→ Opciones de personalización creadas");

    // 7. Productos (conectamos con categoría y luego etiquetas)
    for (const prod of productos) {
      // Desestructuramos para separar las etiquetas
      const { etiquetas: etiquetasIds, ...productoData } = prod;

      // 7.1. Creamos el producto base
      const nuevoProducto = await prisma.producto.create({
        data: {
          nombre: productoData.nombre,
          descripcion: productoData.descripcion,
          precioBase: productoData.precioBase.toString(), // Prisma espera string para Decimal
          stock: productoData.stock,
          categoria: { connect: { id: productoData.categoriaId } },
          promedioValoracion: productoData.promedioValoracion,
          activo: productoData.activo,
          // Fecha de creado y actualizado quedan con valor por defecto
        },
      });

      // 7.2. Asociamos las etiquetas (m:m) usando connect:
      if (etiquetasIds && etiquetasIds.length > 0) {
        await prisma.producto.update({
          where: { id: nuevoProducto.id },
          data: {
            productoEtiquetas: {
              create: etiquetasIds.map((etqId) => ({
                etiqueta: { connect: { id: etqId } },
              })),
            },
          },
        });
      }

      console.log(`→ Producto creado: ${nuevoProducto.nombre}`);
    }

    console.log("🎉 ¡Seeding completado satisfactoriamente!");
  } catch (error) {
    console.error("❌ Error al ejecutar seed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();