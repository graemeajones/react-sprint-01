import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from './components/auth/useAuth.js';
import Layout from './components/layouts/Layout.js';
import MyModules from './components/pages/MyModules.js';
import MySecrets from './components/pages/MySecrets.js';
import FauxLogin from './components/pages/FauxLogin.js';
import PageNotFound from './components/pages/404.js';
import './App.scss';

export default function App() {
  // Initialisation ------------------------------
  const { loggedinUser } = useAuth();

  // View ----------------------------------------
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {
            loggedinUser
              ? <>
                  <Route path='/' element={<MyModules />} />
                  <Route path='/secrets' element={<MySecrets />} />
                </>
              : <>
                  <Route path='/' element={<FauxLogin />} />
                  <Route path='/login' element={<FauxLogin />} />
                </>
          }
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
