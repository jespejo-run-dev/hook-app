import { render, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook"

describe('Pruebas en <MultipleCustomHook />', () => {

    test('debe mostrar el componente por defecto', () => {  

        render(<MultipleCustomHook />)

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Información de Pokemon'))
        
        //button
        const nextButton = screen.getByRole('button', {name: 'Siguiente'})
        expect(nextButton).toBeTruthy()

        // screen.debug();

    })  

})