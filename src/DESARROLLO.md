# Documentación de Desarrollo - Padilla Taller 02 TypeScript

## 1. Configuración del Proyecto
Inicialicé el proyecto con Vite y TypeScript. Luego instalé las dependencias: typescript, ts-node, @types/node luego  configuré el tsconfig.json para usar CommonJS.  
Esto me permitió correr el proyecto con npm run dev.

## 2. Interfaces y Tipos
Creé el archivo types.ts donde definí las interfaces Usuario y Empleado.  
También definí el enum Departamento para controlar mejor los valores permitidos.

## 3. Clases y Herencia
aqui hice una clase abstracta BaseEmpleado.  
Donde se heredaria:
Desarrollador: siempre en el departamento IT.  
Gerente: puede recibir un departamento como parámetro.  
con esto pude reutilizar código y aplicar herencia básica.

## 4. Inyección de Dependencias
Implementé un ApiService para consumir datos desde la API falsa.  
Después creé ServicioEmpleados que recibe el ApiService en el constructor.  
De esa forma, el servicio de empleados no depende directamente de la API, sino de la abstracción.

## 5. Consumo de API
Usé la API https://jsonplaceholder.typicode.com/users.  
Mapeé los usuarios de la API a empleados (alternando Desarrollador y Gerente).  
Esto cumple el requisito de consumir un servicio externo.

## 6. Dificultades y Soluciones
- **Error con imports**: al inicio tenía un error y era un conflicto entre module: CommonJS y "type": "module".  
 Lo solucioné quitando "type": "module" en package.json.  
- **Imports no encontrados**: agregué las rutas correctas y ejecuté siempre con ts-node`.  
- **Pruebas con API**: a veces la conexión tardaba, así que hice también una lista personalizada para pruebas rápidas.

---
