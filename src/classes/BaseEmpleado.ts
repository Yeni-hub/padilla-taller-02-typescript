// BaseEmpleados.ts
import { Usuario } from "../interfaces/types";

export class BaseEmpleados {
  nombre: string;
  edad: number;
  genero: string;
  salario: number;  // <-- agregamos salario

  constructor(usuario: Usuario, salario: number = 0) {
    this.nombre = usuario.nombre;
    this.edad = usuario.edad;
    this.genero = usuario.genero;
    this.salario = salario; // asignamos
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}, Salario: $${this.salario}`);
  }
}
