// src/classes/Desarrollador.ts
import { BaseEmpleados } from "./BaseEmpleado";
import { Usuario } from "../interfaces/types";

export class Desarrollador extends BaseEmpleados {
  constructor(usuario: Usuario) {
    super(usuario);
  }

  trabajar() {
    console.log(`${this.nombre} está programando...`);
  }
}
