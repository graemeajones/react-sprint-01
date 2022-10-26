import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import AuthContext from './components/auth/AuthContext.js';
import Layout from './components/layouts/Layout.js';
import MyModules from './components/pages/MyModules.js';
import Login from './components/pages/Login.js';
import PageNotFound from './components/pages/404.js';
import './App.scss';

export default function App() {
  // Initialisation ------------------------------
  // State ---------------------------------------
  const [loggedinUser, setLoggedinUser] = useState(null);
      
  // Methods -------------------------------------
  const logout = () => setLoggedinUser(null);

  // View ----------------------------------------
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ loggedinUser, setLoggedinUser, logout }}>
        <Layout>
          <Routes>
            {
              loggedinUser
                ? <Route path='/' element={<MyModules />} />
                : <Route path='/' element={<Login />} />
            }
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}
