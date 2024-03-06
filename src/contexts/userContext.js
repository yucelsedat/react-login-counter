import { createContext, useContext, useState, useEffect } from "react"

const Context = createContext()

export default function AuthProvider ({ children }) {

    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('active_user')) || false)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
 
    const data = {
        user,
        setUser,
        users,
        setUsers
    }

    useEffect(() => {
      localStorage.setItem('active_user', JSON.stringify(user))
    }, [user])

    useEffect(() => {
      localStorage.setItem('users', JSON.stringify(users))
    }, [users])
    

    return (
        <Context.Provider value={data}>
                {children}
        </Context.Provider>     
    )
}

export const useAuth = () => useContext(Context)