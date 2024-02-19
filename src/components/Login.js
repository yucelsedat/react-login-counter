import { useState, useRef } from "react"



const Login = ({setAuth, setActiveUser}) => {

    const [message, setMessage] = useState('message')

    const nicknameRef = useRef()
    const passwordRef = useRef()
    const messageRef = useRef()

    const handleLogin = (e) => {
        e.preventDefault()
        if (nicknameRef.current.value && passwordRef.current.value) {
            console.log('tiklandi')
            if(passwordRef.current.value === '123456') {
                setActiveUser(nicknameRef.current.value)
                setAuth(true) 
            } else {
                messageRef.current.className = 'visible text-red-500'
                setMessage('incorrect password')
                
            }
            
        } else {
            messageRef.current.className = 'visible text-red-500'
            setMessage('Nicname and password cannot be empty')
        }
        
    }
    
    return (
        <div className="w-1/3 mx-auto grid place-items-center content-center bg-gray-200">
            <h1 className='text-3xl font-bold mt-4'>My App</h1>
            <form onSubmit={handleLogin} className='w-4/5 flex flex-col gap-4 py-12 px-8'>
                <input ref={nicknameRef} type="text" placeholder='nickname' 
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