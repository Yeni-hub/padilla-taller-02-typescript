# Documentación de Desarrollo - Padilla Taller 02 TypeScript

## 1. Configuración del Proyecto

Inicialicé el proyecto con Vite y TypeScript. Luego instalé las dependencias: typescript, ts-node, @types/node y configuré el tsconfig.json para usar CommonJS. Esto me permitió correr el proyecto con npm run dev.

## 2. Interfaces y Tipos

Creé el archivo  types.ts , donde definí las interfaces UsuarioApi y Usuario/Empleado. También definí el enum Departamento para controlar mejor los valores permitidos y evitar errores de escritura.

## 3. Clases y Herencia

Creé una clase abstracta BaseEmpleado con propiedades comunes nombre,edad,genero.

* De ahí heredaron:

  * **Desarrollador**: siempre en el departamento IT.
  * **Gerente**: puede recibir un departamento como parámetro y tiene propiedad `salario`.
    Esto permitió reutilizar código y aplicar herencia básica.

## 4. Inyección de Dependencias

Implementé un `ApiService` para consumir datos desde la API falsa (`https://dummyjson.com/users`).
Después creé `ServicioEmpleados` que recibe el `ApiService` en el constructor.
Así, el servicio de empleados no depende directamente de la API, sino de la abstracción, lo que facilita pruebas y mantenimiento.

## 5. Consumo de API

* Se consumió la API externa para obtener usuarios reales.
* Se mapeó la información de la API a objetos internos Usuario:

  * firstName + lastName → nombre
  * age → edad
  * email → correo
  * gender → genero
* Se alternó la creación de **Desarrolladores** y **Gerentes**, asignando salario a los gerentes.

## 6. Métodos y Funcionalidad

* **Desarrollador**: método trabajar() imprime que está programando.
* **Gerente**: método dirigir() imprime que está dirigiendo el equipo y muestra salario.
* **BaseEmpleado**: método mostrarInfo() imprime datos comunes, reutilizable para todas las clases.

## 7. Dificultades y Soluciones

* **Errores con imports**: conflicto entre module: CommonJS  y "type": "module". Solución: quitar `"type": "module" en package.json y usar rutas relativas.
* - Imports no encontrados**: corregí rutas relativas y ejecuté con ts-node.
* - Pruebas con API lenta**: añadí lista simulada de empleados para pruebas rápidas.
* - Propiedad salario faltante**: agregada en Gerente y pasada en el constructor.

## 8. Conclusión

* Se practicó TypeScript con tipado, clases, herencia e interfaces.
* Se consumió una API externa y se mapearon datos internos.
* Se organizó el proyecto con buenas prácticas y estructura clara.
* Se simula un sistema de empleados mostrando acciones de desarrolladores y gerentes en consola.

