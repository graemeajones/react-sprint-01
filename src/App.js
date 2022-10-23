import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout.js';
import MyModules from './components/pages/MyModules.js';
import Login from './components/pages/Login.js';
import PageNotFound from './components/pages/404.js';
import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<MyModules />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
