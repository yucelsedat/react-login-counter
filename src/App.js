import './tailwind.css'
import { Routes, Route } from 'react-router-dom';
import HomeLayout from './pages';
import AuthLayout from './pages/auth/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PrivateRoute from './components/PrivateRoute';
import Counter from './pages/Counter';


function App() {

  console.log('APP rendered')

  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route path='Auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Route>
      <Route path='/home' element={<PrivateRoute><Counter /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
