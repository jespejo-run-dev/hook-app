import { useState, useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'jespejo',
        email: 'jespejo@gmail.com',
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState, [name]: value
        })
    }

    useEffect(() => {

        return () => {

        }

    }, [])


    useEffect(() => {
        // console.log('useEffect');
    }, [])

    useEffect(() => {
        // console.log('formState changed');
    }, [formState])

    useEffect(() => {
        // console.log('email changed');
    }, [email])

  return (
    <>
        <h1>Formulario Simple</h1>

        <input 
            type="text"
            className="form-control" 
            placeholder="Username" 
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email"
            className="form-control mt-2" 
            placeholder="jespejo@gmail.com"  
            name="email"
            value={email}
            onChange={onInputChange}
        />

        {
            (username === 'jespejo2') && <Message /> 
        }
    </>
  )
}
