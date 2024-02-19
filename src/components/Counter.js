import { useContext, useEffect, useReducer } from "react"
import reducer from "../reducers/countReducer";
import { UserContext } from "../contexts/userContext";



const Counter = () => {

    const nickname = useContext(UserContext)

    const [state, dispatch] = useReducer(reducer, {
        activeUser: null,
        count: 0
    })

    useEffect(()=>{
        dispatch({
            type: 'USER',
            value: nickname
        })
    },[])

    const artır = () => {
        dispatch({
            type: 'COUNT',
            value: state.count + 3
        })  
    }

    const azalt = () => {
        dispatch({
            type: 'COUNT',
            value: state.count - 2
        })
    }

    const reset = () => {
        dispatch({
            type: 'COUNT',
            value: 0
        })
    }

    return (
        <div className="w-1/3 mx-auto flex flex-col items-center gap-8 pt-24 bg-gray-200">
            <h1 className="text-3xl font-bold mt-4'">Welcome, {state.activeUser}</h1>        
            <p className="w-1/4 p-2 font-bold text-2xl text-center ">
                {state.count}
            </p>
            <div className="flex justify-center items-center gap-4">
                <button 
                onClick={azalt}
                className="p-2 bg-red-400 hover:bg-red-500  rounded-md"
                >Decrease
                </button>
                <button 
                onClick={reset}
                className="p-2 bg-blue-400 hover:bg-blue-500  rounded-md"
                >Reset
                </button>
                <button 
                onClick={artır}
                className="p-2 bg-green-400 hover:bg-green-500  rounded-md"
                >Increase
                </button>
            </div>       
    </div>
    )
}

export default Counter 