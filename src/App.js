import React, { useState } from 'react'; // Importación de React y useState
import Home from './componentes/Home';
import QuienesSomos from './componentes/QuienesSomos';
import Contacto from './componentes/Contacto';
import Productos from './componentes/Productos';
import Horario from './componentes/Horario';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Estado para manejar si el usuario está logueado
  const [visibleComponent, setVisibleComponent] = useState('Home'); // Estado para manejar el componente visible

  const handleLogin = (event) => {
    event.preventDefault();
    setLoggedIn(true); // Actualiza el estado a loggedIn cuando se envía el formulario
  };

  const renderComponent = () => {
    switch (visibleComponent) { // Renderiza el componente según el estado visibleComponent
      case 'Home':
        return <Home />;
      case 'QuienesSomos':
        return <QuienesSomos />;
      case 'Contacto':
        return <Contacto />;
      case 'Productos':
        return <Productos />;
      case 'Horario':
        return <Horario />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      {loggedIn ? ( // Si el usuario está logueado
        <>
          <Navbar setVisibleComponent={setVisibleComponent} /> {/* Renderiza la barra de navegación */}
          {renderComponent()} {/* Renderiza el componente seleccionado */}
          <Footer /> {/* Renderiza el pie de página */}
        </>
      ) : ( // Si el usuario no está logueado
        <section className="loginn">
          <div className="login1" id="container">
            <div className="menu-principal">
              <form method="post" onSubmit={handleLogin}>{/* Formulario de inicio de sesión */}
                <h2>Inicia Sesión</h2>
                <input
                  type="email"
                  id="correo_user"
                  name="correo_user"
                  placeholder="Correo electrónico"
                  required
                /><br />
                <input
                  type="password"
                  id="contra_user"
                  name="contra_user"
                  placeholder="Contraseña"
                  required
                /><br />
                <button type="submit">Entrar</button>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App; // Exportación del componente App
