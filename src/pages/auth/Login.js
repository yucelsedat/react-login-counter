import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/userContext"

 

const Login = () => {

    const { users , setUser } = useAuth()
    const navigate = useNavigate()

    console.log('Login rendered')

    const [message, setMessage] = useState('message')

    const usernameRef = useRef()
    const passwordRef = useRef()
    const messageRef = useRef()

    const handleLogin = (e) => {
        e.preventDefault()
        if (usernameRef.current.value && passwordRef.current.value) {
            
            const usernameExist = users.filter( val => val.username === usernameRef.current.value)
 
            if( usernameExist[0]) {

                if (usernameExist[0].password === passwordRef.current.value) {
                    setUser(usernameExist[0].username)
                    navigate('/home')
                } else {
                    messageRef.current.className = 'visible text-red-500'
                setMessage('şifre hatalı') 
                }


            } else {
                messageRef.current.className = 'visible text-red-500'
                setMessage('böyle bir kullanıcı bulunamadı') 
            }

            
        } else {
            messageRef.current.className = 'visible text-red-500'
            setMessage('Nicname and password cannot be empty')
        }
        
    }
    
    return (
        <div className="fixed inset-0 w-1/3 mx-auto grid place-items-center content-center bg-gray-200">
            <Link to="/"
                className="absolute left-0 top-0 p-4"
            >
                X
            </Link>
            <h1 className='text-3xl font-bold mt-4'>Hoş geldin</h1>
            <form onSubmit={handleLogin} className='w-4/5 flex flex-col gap-4 py-12 px-8'>
                <input ref={usernameRef} type="text" placeholder='username' 
                className="p-2 text-center"
                />
                <input ref={passwordRef} type="password" placeholder='password' 
                className="p-2 text-center"
                />
                <button type='submit' 
                className='p-2 bg-blue-400 hover:bg-blue-500  rounded-md'
                >
                Login
                </button>
                <p ref={messageRef} className="invisible">{message}</p>
            </form>
        </div>
    ) 
}

export default Login