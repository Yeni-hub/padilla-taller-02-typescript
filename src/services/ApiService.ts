// src/services/ApiService.ts
import { UsuarioApi } from "../interfaces/types";

export class ApiService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async obtenerUsuarios(): Promise<UsuarioApi[]> {
    try {
      const respuesta = await fetch(this.apiUrl);

      if (!respuesta.ok) {
        throw new Error(`Error al consultar la API: ${respuesta.status}`);
      }

      const datos: UsuarioApi[] = await respuesta.json();
      return datos;
    } catch (error) {
      console.error("❌ Error en ApiService:", error);
      return [];
    }
  }
}
