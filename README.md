# Taller de Empleados - Proyecto TypeScript

## Descripción
Este proyecto es un taller que simula un sistema de empleados usando TypeScript.  
Se obtiene información de una API pública ([dummyjson.com/users](https://dummyjson.com/users)) y se crean diferentes clases de empleados: `Desarrollador` y `Gerente`.  

El objetivo es practicar:
- Clases y herencia en TypeScript.
- Tipado fuerte con interfaces.
- Consumo de APIs con `fetch`.
- Organización de un proyecto con buenas prácticas.

---

## Tecnologías usadas
- TypeScript
- Node.js
- Node Fetch (`node-fetch`)

---

## Estructura del proyecto
/src
├─ /classes
│ ├─ BaseEmpleados.ts
│ ├─ Desarrollador.ts
│ └─ Gerente.ts
├─ /interfaces
│ └─ types.ts
├─ /services
│ └─ ServicioEmpleados.ts
└─ index.ts


- `BaseEmpleados.ts` → clase base con propiedades comunes de los empleados.  
- `Desarrollador.ts` → clase que hereda de BaseEmpleados y tiene método `trabajar()`.  
- `Gerente.ts` → clase que hereda de BaseEmpleados y tiene método `dirigir()`.  
- `types.ts` → interfaces `UsuarioApi` (API) y `Usuario` (app).  
- `ServicioEmpleados.ts` → obtiene los datos de la API y los mapea a objetos `Usuario`.  
- `index.ts` → archivo principal para ejecutar el proyecto.

---

## Instalación

1. Clonar el repositorio:

```bash
git clone <https://github.com/Yeni-hub/padilla-taller-02-typescript>


