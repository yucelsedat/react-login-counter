import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/userContext"

 

const Register = () => {

    const {users, setUsers} = useAuth()
    const navigate = useNavigate()

    console.log('Register rendered')

    const [message, setMessage] = useState('message')

    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const messageRef = useRef()

    const handleRegister = (e) => {
        e.preventDefault()
        if (emailRef.current.value && usernameRef.current.value && passwordRef.current.value) {
            
            const emailExist = users.filter((val) => val.email === emailRef.current.value )

            if(emailExist[0]) {
                console.log(emailExist)
                console.log(users)
                messageRef.current.className = 'visible text-red-500'
                setMessage('bu email kullanılıyor')
            }else {

                const usernameExist = users.filter((val) => val.username === usernameRef.current.value )

                if (usernameExist[0]) {
                    messageRef.current.className = 'visible text-red-500'
                    setMessage('bu username alınmış')
                } else {
                    const newUser = {
                        email: emailRef.current.value,
                        username : usernameRef.current.value,
                        password : passwordRef.current.value
                    }
                    setUsers([...users, newUser])
                    navigate('/Auth/login')
                }
   
            }
            
        } else {
            messageRef.current.className = 'visible text-red-500'
            setMessage('Email, nickname and password cannot be empty')
        }
        
    }
    
    return (
        <div className="fixed inset-0 w-1/3 mx-auto grid place-items-center content-center bg-gray-200">
            <Link to="/"
                className="absolute left-0 top-0 p-4"
            >
                X
            </Link>
            <h1 className='text-3xl font-bold mt-4'>Kayıt</h1>
            <form onSubmit={handleRegister} className='w-4/5 flex flex-col gap-4 py-12 px-8'>
                <input ref={emailRef} type="email" placeholder='email' 
                className="p-2 text-center"
                />
                <input ref={usernameRef} type="text" placeholder='username' 
                className="p-2 text-center"
                />
                <input ref={passwordRef} type="password" placeholder='password' 
                className="p-2 text-center"
                />
                <button type='submit' 
                className='p-2 bg-blue-400 hover:bg-blue-500  rounded-md'
                >
                Register
                </button>
                <p ref={messageRef} className="invisible">{message}</p>
            </form>
        </div>
    )
}

export default Register