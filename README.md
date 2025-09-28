# Taller de Empleados - Proyecto TypeScript


repositorio : Padilla-taller-02-typescript https://github.com/Yeni-hub/padilla-taller-02-typescript

## Descripción
Este taller simula un sistema de empleados usando TypeScript. Se obtiene información de una API pública ([dummyjson.com/users](https://dummyjson.com/users)) asignada en la descripcion y guia del taller  y se crean diferentes clases de empleados: `Desarrollador` y `Gerente`.

El proyecto permite practicar:
- Clases y herencia en TypeScript.
- Tipado fuerte con interfaces.
- Consumo de APIs con `fetch`.
- Organización de un proyecto con buenas prácticas.

## Tecnologías usadas
- TypeScript
- Node.js
- Node Fetch (`node-fetch`)

## Estructura del proyecto

```
/src
 ├─ /classes
 │   ├─ BaseEmpleados.ts
 │   ├─ Desarrollador.ts
 │   └─ Gerente.ts
 ├─ /interfaces
 │   └─ types.ts
 ├─ /services
 │   └─ ServicioEmpleados.ts
 └─ index.ts
```
- `BaseEmpleados.ts`: clase base con propiedades comunes.
- `Desarrollador.ts`: hereda de BaseEmpleados, método `trabajar()`.
- `Gerente.ts`: hereda de BaseEmpleados, tiene `salario` y método `dirigir()`.
- `types.ts`: interfaces `UsuarioApi` y `Usuario`.
- `ServicioEmpleados.ts`: obtiene datos de la API y los mapea.
- `index.ts`: archivo principal que ejecuta el proyecto.

## Instalación
- Clonar el repositorio:
git clone <https://github.com/Yeni-hub/padilla-taller-02-typescript>


- Instalar dependencias:  npm install
- Instalar `node-fetch` si no está incluido: npm install node-fetch
- Compilar TypeScript: npx tsc
- Ejecutar proyecto: node dist/index.js

## Uso
* Se obtienen empleados desde la API.
* Se crean instancias de `Desarrollador` y `Gerente`.
* Se muestran mensajes en consola:

nombre: 'Alexander Jones',
    edad: 38,
    correo: 'alexander.jones@x.dummyjson.com',
    genero: 'male'
  },
  {
    nombre: 'Ava Taylor',
    edad: 27,
    correo: 'ava.taylor@x.dummyjson.com',
    genero: 'female'

## Autor
* Yennifer Padilla Hernandez
* Curso: Taller de TypeScript / Programación Orientada a Objetos
