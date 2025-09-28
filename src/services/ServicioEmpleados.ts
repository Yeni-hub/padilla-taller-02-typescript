// src/services/ServicioEmpleados.ts

import fetch from "node-fetch";
import { UsuarioApi, Usuario } from "../interfaces/types";

export class ServicioEmpleados {
  private apiUrl = "https://dummyjson.com/users";

  async listarEmpleados(): Promise<Usuario[]> {
    try {
      const respuesta = await fetch(this.apiUrl);

      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }

      // Forzamos el tipo de retorno de json() para que TypeScript no dé error
      const data = (await respuesta.json()) as { users: UsuarioApi[] };
      const { users } = data;

      // Mapeo seguro a nuestro tipo Usuario
      return Array.isArray(users)
        ? users.map((u: UsuarioApi) => ({
            nombre: `${u.firstName} ${u.lastName}`,
            edad: u.age ?? 0,
            correo: u.email || "",
            genero: u.gender || "N/A",
          }))
        : [];

    } catch (error) {
      console.error("Error al listar empleados:", error);
      return [];
    }
  }
}
