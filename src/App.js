import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Components/Home'
import Login from './Components/Login/Login';
import User from './Components/User/User'
import { UserStorage } from './UserContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* UserStorage --> contexto */}
        <UserStorage>
          <Header />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login/*" element={<Login />}/>
              {/* usa a protectedRoute para redirecionar à pagina do usuário */}
              <Route path="/conta/*" element={<ProtectedRoute><User /></ProtectedRoute>}/>
            </Routes>
            <Footer />
        </UserStorage>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
