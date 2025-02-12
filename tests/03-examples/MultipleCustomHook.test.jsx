import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHook />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe mostrar el componente por defecto', () => {  

        useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });

        render(<MultipleCustomHook />)

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Información de Pokemon'))
        
        //button
        const nextButton = screen.getByRole('button', {name: 'Siguiente'})
        
        expect(nextButton).toBeTruthy()
        expect(nextButton.disable).toBeFalsy();

        // screen.debug();

    })  

    test('debe mostrar un pokemon', () => { 

        useFetch.mockReturnValue({
            data: {
                id: 1,
                name: "bulbasaur",
                sprites: {
                    back_default: "back_default",
                    back_shiny: "back_shiny",
                    front_default: "front_default",
                    front_shiny: "front_shiny",
              },
            },
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHook />)

        
        expect(screen.getByText('#1 - bulbasaur')).toBeTruthy()
        
    })

    test('deve de llamar ala funcion de incrementar', () => {
        useFetch.mockReturnValue({
            data: {
                id: 2,
                name: "Charmander",
                sprites: {
                    back_default: "back_default",
                    back_shiny: "back_shiny",
                    front_default: "front_default",
                    front_shiny: "front_shiny",
              },
            },
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHook />)
        
        const siguienteButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click(siguienteButton);
     
        expect(mockIncrement).toHaveBeenCalled();
    

    })

})