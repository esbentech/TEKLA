// seeds/usuarios.ts

/**
 * NOTA: Para este ejemplo, asumimos que en tu esquema Prisma el modelo Usuario
 * tiene campos: id, nombreUsuario, correoElectronico, contrasenaHash, rolId, etc.
 *
 * En un caso real deberías hashear la contraseña con bcrypt (o similar). Aquí 
 * se muestran contraseñas simuladas ya “hasheadas” para que Prisma las acepte.
 */

export const usuarios = [
  {
    nombreUsuario: "admin",
    correoElectronico: "admin@keycaps.io",
    contrasenaHash: "$2b$10$abcdefghijklmnopqrstuv", // ej.: bcrypt hash
    rolId: 1  // coincide con roles[0] == ADMIN
  },
  {
    nombreUsuario: "cliente1",
    correoElectronico: "usuario1@keycaps.io",
    contrasenaHash: "$2b$10$mnopqrstuvwxyzabcdef", // ejemplo
    rolId: 2  // coincide con roles[1] == CLIENTE
  },
  {
    nombreUsuario: "cliente2",
    correoElectronico: "usuario2@keycaps.io",
    contrasenaHash: "$2b$10$1234567890abcdefghij", // ejemplo
    rolId: 2
  }
  
];