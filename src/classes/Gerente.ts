// src/classes/Gerente.ts
import { BaseEmpleado } from "./BaseEmpleado";
import { Departamento } from "../interfaces/types";

export class Gerente extends BaseEmpleado {
  constructor(
    id: number,
    nombre: string,
    edad: number,
    correo: string,
    genero: string,
    departamento: Departamento,
    salario: number
  ) {
    super(id, nombre, edad, correo, genero, "Gerente", departamento, salario);
  }

  // Implementación del método abstracto
  mostrarInformacion(): void {
    console.log(`👔 Gerente: ${this.nombre} (${this.edad} años)
Correo: ${this.correo}
Género: ${this.genero}
Cargo: ${this.cargo}
Departamento: ${this.departamento}
Salario: $${this.salario}`);
  }
}
