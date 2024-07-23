import React, { useEffect } from 'react';

function QuienesSomos() {
  // Efecto de entrada para el contenedor "quienesomos"
  useEffect(() => {
    const quienesSomosContainer = document.querySelector('.quienesomo-txt');
    if (quienesSomosContainer) {
      quienesSomosContainer.style.opacity = 0;
      quienesSomosContainer.style.transform = 'translateY(50px)';
      setTimeout(() => {
        quienesSomosContainer.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
        quienesSomosContainer.style.opacity = 1;
        quienesSomosContainer.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  // Efecto de desvanecimiento para el mensaje "Quiénes Somos"
  useEffect(() => {
    const message = document.querySelector('.quienesomo-txt p');
    if (message) {
      message.style.opacity = 0;
      setTimeout(() => {
        message.style.transition = 'opacity 3s ease-out';
        message.style.opacity = 1;
      }, 100);
    }
  }, []);

  return (
    <section id="quiee">
      <div id="quienesomos" className="quienesomo">
        <div className="quienesomo-txt">
          <br /><br /><br /><br />
          <h2>Quiénes Somos</h2>
          <p>
            Bienvenidos a RegoStore, tu destino definitivo para la moda
            contemporánea y versátil. Sumérgete en un mundo de estilo y
            comodidad, donde cada prenda cuenta una historia única y refleja
            tu personalidad distintiva. Nos dedicamos a proporcionar productos
            que no solo sean elegantes, sino también cómodos y funcionales.
            Desde materiales de primera calidad hasta detalles cuidadosamente
            diseñados, cada artículo en RegoStore está cuidadosamente
            seleccionado para garantizar tu satisfacción y estilo impecable en
            cada uso. Ya sea que estés buscando un atuendo casual para el día
            a día o prendas impresionantes para destacar en cualquier ocasión,
            RegoStore tiene todo lo que necesitas para expresar tu
            individualidad y destacar en cualquier situación. ¡Explora nuestro
            catálogo ahora y descubre el mundo de posibilidades que te espera
            en RegoStore!
          </p>
          <br /><br /><br /><br /><br /><br />
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
