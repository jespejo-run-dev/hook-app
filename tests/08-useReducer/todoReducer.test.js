import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Recolectar la piedra del Alma',
        done: false,
    }]

    test('debe regresar el estado inicial', () => { 

        const newState = todoReducer(initialState, {});

        expect(newState).toEqual(initialState);

    });

    test('debe agregar un TODO', () => { 

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Recolectar la piedra del Poder',
                done: false,
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);


     })

     test('debe eliminar un todo', () => {
        
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1,
        }
        
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
     })

     test('should debe realizar el Toggle del todo', () => {
        
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        }
        
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBe(false);
    
      })

 })