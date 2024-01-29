import React, { createContext, useEffect, useState } from 'react'
import getStore from './flux'

export const AppContext = createContext()

const injectContext = Component => {
    const StoreWrapper = props => {
        const [state, setState] = useState(getStore({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updateStore) => setState({
                store: Object.assign(state.store, updateStore),
                actions: {...state.actions}
            }) 
        }))

        useEffect(() => {
            //state.actions.getUsers()
            //state.actions.getNoticias()
        }, [])

        return (
            <AppContext.Provider value={state}>
                <Component />
            </AppContext.Provider>
        )
    }

    return StoreWrapper;
}

export default injectContext
