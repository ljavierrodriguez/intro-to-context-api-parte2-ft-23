import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'
import { AppContext } from '../store/AppContext'

const Home = () => {
    const { theme, setTheme } = useContext(ThemeContext) // Consumer
    const { store, actions } = useContext(AppContext)

    return (
        <>
            <div>Home</div>

            <button onClick={actions.saludar}>Saludar</button>
            <button onClick={() => actions.addTask("Tarea de Prueba")}>Añadir Tarea</button>

            <h4>{store.name}</h4>

            <button className={'btn btn-' + theme} onClick={() => setTheme(theme === 'dark' ? 'primary' : 'dark')}>
                {theme}
            </button>
        </>
    )
}

export default Home