const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiURL: 'https://jsonplaceholder.typicode.com',
            currentUser: null,
            users: [],
            noticias: [],
            mails: [],
            counter: 0,
            name: 'John Doe'
        },
        actions: {
            getUsers: async () => {
                try {
                    const store = getStore(); // accedo a un atributo 
                    console.log(store.apiURL)
                    
                    const response = await fetch(`${store.apiURL}/users`)

                    console.log(response)
                    
                    const data = await response.json()

                    console.log(data)
                    
                    setStore({
                        users: data
                    })
                    
                    /* const actions = getActions();
                    actions.saludar()
                    getActions().saludar() */

                } catch (error) {
                    
                }
            },
            getTodos: () => {},
            getNoticias: () => {},
            saludar: () => {
                console.log("Hola desde Context API and Flux")
            }
        }
    }
}

export default getStore