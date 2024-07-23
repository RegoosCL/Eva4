import React from 'react';
import logoimg from "../imagen/logo.png"; // Importación de la imagen del logo
import menunav from "../imagen/menu.png"; 

function Navbar({ setVisibleComponent }) {
  const handleMenuClick = (component) => {
    setVisibleComponent(component); // Cambia el componente visible al hacer clic en un elemento del menú
  };

  return (
    <nav className="menu container">
      <img className="logo" src={logoimg} width="70" alt="Logo" /> 
      <input type="checkbox" id="menu" /> 
      <label htmlFor="menu">
        <img src={menunav} className="menu-icono" alt="Menu" /> 
      </label>
      <div className="navbar">
        <ul>
          <li><a href="#home" onClick={() => handleMenuClick('Home')}>Home</a></li> {/* Enlace a la sección Home */}
          <li><a href="#quienes-somos" onClick={() => handleMenuClick('QuienesSomos')}>Quiénes somos</a></li> 
          <li><a href="#contacto" onClick={() => handleMenuClick('Contacto')}>Contacto</a></li> {/* Enlace a la sección Contacto */}
          <li><a href="#productos" onClick={() => handleMenuClick('Productos')}>Productos</a></li> 
          <li><a href="#horario" onClick={() => handleMenuClick('Horario')}>Horario</a></li> {/* Enlace a la sección Horario */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
