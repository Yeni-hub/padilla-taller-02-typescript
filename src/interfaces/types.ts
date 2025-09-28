// src/interfaces/types.ts

// Lo que devuelve la API
export interface UsuarioApi {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
}

// Lo que usa nuestra app
export interface Usuario {
  nombre: string;
  edad: number;
  correo: string;
  genero: string;
}
