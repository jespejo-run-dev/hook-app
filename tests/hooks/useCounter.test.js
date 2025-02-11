import { act, render, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en useCounter', () => { 

    test('debe retornar los valores por defecto', () => { 

       const {result} = renderHook(()=> useCounter());
             
       const {counter, increment, decrement, reset} = result.current;

       expect(counter).toBe(5);
       expect(increment).toEqual(expect.any(Function));
       expect(decrement).toEqual(expect.any(Function));
       expect(reset).toEqual(expect.any(Function));

     })

     test('debe generar el counter con el valor de 100', () => {
        const {result} = renderHook(()=> useCounter(100));
        expect(result.current.counter).toBe(100);
      })

    test('debe incrementar el contador', () => { 

        const {result} = renderHook(()=> useCounter(100));
        const {counter, increment} = result.current; 

        act(() => { 
            increment() 
            increment(2) 
        });

        expect(result.current.counter).toBe(103);

     })

     test('debe decrementar el contador', () => { 

        const {result} = renderHook(()=> useCounter(100));
        const {counter, decrement} = result.current; 

        act(() => { 
            decrement() 
            decrement(2) 
        });

        expect(result.current.counter).toBe(97);

     })


     test('debe realizar el reset del contador', () => { 

        const {result} = renderHook(()=> useCounter(100));
        const {counter, reset, decrement} = result.current; 

        act(() => { 
            decrement()
            reset() 
        });

        expect(result.current.counter).toBe(100);

     })

 })