import { useState } from 'react';
import Login from './components/Login';
import Counter from './components/Counter';
import { UserContext } from './contexts/userContext';
import './tailwind.css'



function App() {

  console.log('APP rendered')

  const [auth , setAuth] = useState(false)
  const [activeUser , setActiveUser] = useState(false)

  return (
    <UserContext.Provider value={activeUser} >
      <div className='w-full h-screen grid'>
        {auth? <Counter />:<Login setAuth={setAuth} setActiveUser={setActiveUser}/>}
      </div>
    </UserContext.Provider> 
  );
}

export default App;
