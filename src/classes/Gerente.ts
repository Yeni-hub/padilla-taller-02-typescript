import { BaseEmpleados } from "./BaseEmpleado";
import { Usuario } from "../interfaces/types";

export class Gerente extends BaseEmpleados {
  constructor(usuario: Usuario, salario: number) {
    super(usuario, salario); // pasamos el salario
  }

  dirigir() {
    console.log(`${this.nombre} está dirigiendo el equipo. Salario: $${this.salario}`);
  }
}
