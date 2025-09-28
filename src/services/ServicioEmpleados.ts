// src/services/ServicioEmpleados.ts
import { ApiService } from "./ApiService";
import { Desarrollador } from "../classes/Desarrollador";
import { Gerente } from "../classes/Gerente";
import { Departamento } from "../interfaces/types";

export class ServicioEmpleados {
  constructor(private apiService: ApiService) {}

  async listarEmpleados(): Promise<void> {
    const usuarios = await this.apiService.obtenerUsuarios();

    const empleados = usuarios.map((usuario: any, index: number) => {
      if (index % 2 === 0) {
        // Los pares son desarrolladores
        return new Desarrollador(
          usuario.id,
          usuario.name,
          30,
          usuario.email,
          "No especificado",
          4000
        );
      } else {
        // Los impares son gerentes
        return new Gerente(
          usuario.id,
          usuario.name,
          40,
          usuario.email,
          "No especificado",
          Departamento.RRHH,
          6000
        );
      }
    });

    console.log("=== LISTA DE EMPLEADOS ===");
    empleados.forEach((empleado) => empleado.mostrarInformacion());
  }
}
