import React, { useEffect } from 'react';

function Home() {
  // Efecto de entrada para el contenedor principal
  useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.style.opacity = 0;
      mainContent.style.transform = 'translateY(50px)';
      setTimeout(() => {
        mainContent.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
        mainContent.style.opacity = 1;
        mainContent.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  // Efecto de desvanecimiento para el mensaje de bienvenida
  useEffect(() => {
    const message = document.querySelector('.main-content p');
    if (message) {
      message.style.opacity = 0;
      setTimeout(() => {
        message.style.transition = 'opacity 3s ease-out';
        message.style.opacity = 1;
      }, 100);
    }
  }, []);

  return (
    <section id="home">
      <div className="main-content">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1>RegoStore</h1>
        <p>
          Bienvenidos a RegoStore, tu destino para la moda contemporánea.
          Descubre nuestra selección de polerones, pantalones y poleras,
          diseñados para reflejar tu estilo único. Explora ahora y encuentra la
          pieza perfecta para tu armario en RegoStore.
        </p>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </section>
  );
}

export default Home;
