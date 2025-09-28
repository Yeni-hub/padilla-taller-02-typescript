// src/main.ts
import { ApiService } from "./services/ApiService";
import { ServicioEmpleados } from "./services/ServicioEmpleados";

async function main(): Promise<void> {
  console.log("Iniciando sistema de empleados con API externa...\n");

  // Usamos la API falsa de JSONPlaceholder
  const apiService = new ApiService("https://jsonplaceholder.typicode.com/users");
  const servicioEmpleados = new ServicioEmpleados(apiService);

  await servicioEmpleados.listarEmpleados();

  console.log("\n✅ Proceso terminado");
}

main();
