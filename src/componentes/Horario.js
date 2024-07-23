import React, { useEffect } from 'react';

function Horario() {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.txt');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
          el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, index * 450); // Animar cada elemento con un delay
      });
    };

    const addMapStyles = () => {
      const map = document.querySelector('.map');
      if (map) {
        map.style.borderRadius = '10px';
        map.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
      }
    };

    animateElements();
    addMapStyles();
  }, []);

  return (
    <section className="horario" id="horario">
      <div className="horario-info container">
        <br /><br /><br /><br /><br /><br /><br />
        <h2 className="section-title">Horario</h2>
        <div className="horario-txt">
          <div
            className="txt"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.transition = 'transform 0.3s ease';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.transition = 'transform 0.3s ease';
            }}
          >
            <h4>Dirección</h4>
            <p>La Pintana</p>
            <p>Venancia Leiva</p>
          </div>
          <div
            className="txt"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.transition = 'transform 0.3s ease';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.transition = 'transform 0.3s ease';
            }}
          >
            <h4>Horario</h4>
            <p>Lunes a viernes: 9am - 8pm</p>
            <p>Sábado y Domingo: 11am - 7pm</p>
          </div>
          <div
            className="txt"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.transition = 'transform 0.3s ease';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.transition = 'transform 0.3s ease';
            }}
          >
            <h4>Teléfonos</h4>
            <p>+56 22 243 5210</p>
            <p>+56 25 763 6324</p>
          </div>
        </div>
      </div>
      <div className="mapa">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32137.910189224436!2d-70.64716797902351!3d-33.571233035529055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662da11cc1a428b%3A0xd4008cf9b54a7c3f!2sVilla%20el%20Bosque%2C%208820251%20La%20Pintana%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1717457848000!5m2!1ses-419!2scl"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Horario;
