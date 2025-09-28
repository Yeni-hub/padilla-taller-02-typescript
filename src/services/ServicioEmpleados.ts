// src/services/ServicioEmpleados.ts
import { ApiService } from "./ApiService";
import { Desarrollador } from "../classes/Desarrollador";
import { Gerente } from "../classes/Gerente";
import { Departamento, UsuarioApi } from "../interfaces/types";

export class ServicioEmpleados {
  constructor(private apiService: ApiService) {}

  async listarEmpleados(): Promise<void> {
    // Traer usuarios desde la API externa
    const usuarios: UsuarioApi[] = await this.apiService.obtenerUsuarios();

    const empleados = usuarios.map((usuario, index) => {
      if (index % 2 === 0) {
        // Pares = Desarrolladores
        return new Desarrollador(
          usuario.id,
          usuario.name,
          30,
          usuario.email,
          "No especificado",
          4000
        );
      } else {
        // Impares = Gerentes
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

    console.log("=== LISTA DE EMPLEADOS DESDE API ===");
    empleados.forEach((empleado) => empleado.mostrarInformacion());
  }
}
