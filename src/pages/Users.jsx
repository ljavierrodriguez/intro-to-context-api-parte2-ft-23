import React, { useContext, useEffect } from 'react'
import { AppContext } from '../store/AppContext'

const Users = () => {
    const { store, actions } = useContext(AppContext);

    useEffect(() => {
        actions.getUsers()
    }, [])

    return (
        <>
        <div>Users</div>
        <button onClick={actions.saludar}>Saludar</button>
        <button onClick={() => actions.addTask("Tarea de Prueba")}>Añadir Tarea</button>
        <ul>
            {
                store.users.length > 0 &&
                store.users.map((user) => <li key={user.id}>{user.name}</li>)
            }
        </ul>
        </>
    )
}

export default Users