# React Custom Hooks y Optimización

Este documento cubre los conceptos clave y las mejores prácticas relacionadas con los hooks de React, incluyendo tanto los hooks básicos como los hooks personalizados. A continuación se detallan los temas cubiertos:

## useState
El hook `useState` es utilizado para gestionar el estado en componentes funcionales. Permite declarar variables de estado y actualizar sus valores de manera eficiente.

## useCounter - Custom Hook
En este tema, se crea un custom hook llamado `useCounter`, que permite manejar la lógica de un contador de forma reutilizable.

## Exponer métodos del Hook
Se explora cómo un custom hook puede exponer métodos para ser utilizados en los componentes que lo consumen, lo que facilita la reutilización del código y la gestión del estado de forma más estructurada.

## useEffect - SimpleForm
`useEffect` es un hook que se usa para realizar efectos secundarios en los componentes, como obtener datos o modificar el DOM. En este ejemplo, se aplica a un formulario simple.

## Dependencias del useEffect
Este tema profundiza en cómo las dependencias dentro de `useEffect` determinan cuándo se ejecutan los efectos. Es importante gestionar correctamente las dependencias para evitar comportamientos inesperados.

## useEffect unmount - Cleanup
Se explica cómo usar `useEffect` para realizar limpieza cuando un componente se desmonta, como cancelar solicitudes HTTP o eliminar suscripciones.

## useEffect - Precauciones
Aquí se abordan las precauciones al usar `useEffect`, como evitar llamadas innecesarias y manejar correctamente los efectos que dependan de estados o props.

## Formulario con custom Hook
Se construye un formulario utilizando un custom hook para manejar la lógica y el estado del formulario de manera eficiente.

## Tarea - Implementar funcionalidad de Reset
Este tema es una tarea práctica donde se implementa una funcionalidad de reinicio para un formulario o estado usando hooks personalizados.

## useFetch - CustomHook
`useFetch` es un custom hook que maneja la lógica de solicitudes HTTP, permitiendo realizar peticiones y gestionar el estado de los datos de manera limpia.

## Parametrizar y consumir nuestro custom Hook
Aquí se aprende a parametrizar el custom hook `useFetch` para hacerlo más flexible y reutilizable en diferentes situaciones.

## useFetch + useCounter
Se combinan los hooks `useFetch` y `useCounter` para gestionar tanto la obtención de datos como el estado del contador en el mismo componente.

## Incorporar caché
Este tema cubre la implementación de una estrategia de caché en un custom hook para evitar solicitudes repetidas y mejorar el rendimiento.

## useRef - Primer uso
`useRef` se utiliza para acceder a elementos DOM directamente o almacenar valores mutables que no causan una re-renderización cuando cambian.

## useLayoutEffect
`useLayoutEffect` es similar a `useEffect`, pero se ejecuta de manera sincrónica después de todas las mutaciones del DOM. Esto es útil para realizar mediciones o ajustes antes de que el navegador pinte la pantalla.

## Memo - Método de React
El método `React.memo` se utiliza para evitar re-renderizados innecesarios de un componente funcional si sus props no han cambiado.

## useMemo
`useMemo` es un hook que memoriza un valor calculado para evitar realizar cálculos costosos en cada renderizado si los valores de las dependencias no han cambiado.

## useCallback
`useCallback` se usa para memorizar una función y evitar que se recree en cada renderizado, lo cual es útil cuando se pasa como prop a componentes hijos.

## useCallback con argumentos
Aquí se ve cómo utilizar `useCallback` con argumentos, asegurando que la función no se recree innecesariamente, incluso cuando se pasen nuevos valores.

## Tarea Memorize
Una tarea práctica donde se pone en práctica el uso de `useMemo` y `useCallback` para optimizar el rendimiento en una aplicación React.