// src/main.ts
import { Desarrollador } from "./classes/Desarrollador";
import { Gerente } from "./classes/Gerente";
import { Departamento } from "./interfaces/types";
import { ApiService } from "./services/ApiService";
import { ServicioEmpleados } from "./services/ServicioEmpleados";

async function main(): Promise<void> {
  console.log("=== PUNTO 3: Prueba de clases y herencia ===");

  // Punto 3: Crear objetos manualmente
  const dev = new Desarrollador(1, "Ana", 28, "ana@mail.com", "Femenino", 3500);
  const gerente = new Gerente(
    2,
    "Carlos",
    40,
    "carlos@mail.com",
    "Masculino",
    Departamento.RRHH,
    5000
  );

  dev.mostrarInformacion();
  gerente.mostrarInformacion();

  console.log("\n=== PUNTO 4: Prueba con servicios e inyección de dependencias ===");

  // Punto 4: Usar ApiService + ServicioEmpleados
  const apiService = new ApiService("https://jsonplaceholder.typicode.com/users");
  const servicioEmpleados = new ServicioEmpleados(apiService);

  await servicioEmpleados.listarEmpleados();

  console.log("\n✅ Pruebas terminadas");
}

// Ejecutar
main();
