import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Protected from './components/Protected';
import Profile from './pages/Profile';


const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Protected />}>
        <Route index element={<Profile />} />
        <Route path='profile' element={<Profile />} />
        <Route path='edit-profile' element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App