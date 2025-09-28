// src/classes/Desarrollador.ts
import { BaseEmpleado } from "./BaseEmpleado";
import { Departamento } from "../interfaces/types";

export class Desarrollador extends BaseEmpleado {
  constructor(
    id: number,
    nombre: string,
    edad: number,
    correo: string,
    genero: string,
    salario: number
  ) {
    super(id, nombre, edad, correo, genero, "Desarrollador", Departamento.IT, salario);
  }

  // Implementación del método abstracto
  mostrarInformacion(): void {
    console.log(`👨‍💻 Desarrollador: ${this.nombre} (${this.edad} años)
Correo: ${this.correo}
Género: ${this.genero}
Cargo: ${this.cargo}
Departamento: ${this.departamento}
Salario: $${this.salario}`);
  }
}
