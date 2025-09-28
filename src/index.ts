// src/index.ts

import { ServicioEmpleados } from "./services/ServicioEmpleados";

async function main() {
  const servicio = new ServicioEmpleados();
  const empleados = await servicio.listarEmpleados();

  console.log("Empleados:", empleados);
}

main();

