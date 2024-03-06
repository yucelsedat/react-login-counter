import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/userContext"

export default function PrivateRoute ({ children }) {

    const { user } = useAuth()

    if ( !user ) {

        return <Navigate to="/" /> 
    }

    return children
}