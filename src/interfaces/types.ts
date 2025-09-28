// src/interfaces/types.ts

// Interfaz básica para un usuario
export interface Usuario {
  nombre: string;
  edad: number;
  correo: string;
  genero: string;
}

// Interfaz de empleado que hereda de Usuario
export interface Empleado extends Usuario {
  id: number;
  cargo: string;
  departamento: string;
  salario: number;
}

// Enumeración para los departamentos de la empresa
export enum Departamento {
  IT = "IT",
  RRHH = "RRHH",
  VENTAS = "VENTAS",
  MERCADEO = "MERCADEO",
}
