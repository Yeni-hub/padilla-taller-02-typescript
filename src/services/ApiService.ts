// src/services/ApiService.ts

export class ApiService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  // Método para obtener usuarios desde la API
  async obtenerUsuarios(): Promise<any[]> {
    try {
      const respuesta = await fetch(this.apiUrl);

      if (!respuesta.ok) {
        throw new Error(`Error al consultar la API: ${respuesta.status}`);
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error("❌ Error en ApiService:", error);
      return [];
    }
  }
}
