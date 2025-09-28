// src/classes/BaseEmpleado.ts
import { Departamento } from "../interfaces/types";

// Clase abstracta que representa a un empleado genérico
export abstract class BaseEmpleado {
  constructor(
    public id: number,
    public nombre: string,
    public edad: number,
    public correo: string,
    public genero: string,
    public cargo: string,
    public departamento: Departamento,
    public salario: number
  ) {}

  // Método abstracto: cada clase hija debe implementarlo
  abstract mostrarInformacion(): void;
}
