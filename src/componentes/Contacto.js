import React, { useState, useEffect } from 'react';

function Contactos() {
  const [formVisible, setFormVisible] = useState(true); // Estado para mostrar u ocultar el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fecha: '',
    telefono: '',
    direccion: '',
    region: '',
    mensaje: '',
    click: false,
  }); // Estado para los datos del formulario
  const [dataArr, setDataArr] = useState([]); // Estado para almacenar los datos enviados

  // Efecto para establecer la fecha actual en el formulario
  useEffect(() => {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    const fechaActual = `${año}-${mes}-${dia}`;
    setFormData((prevData) => ({ ...prevData, fecha: fechaActual }));
  }, []);

  // Maneja los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Muestra el formulario
  const mostrarContact = () => {
    setFormVisible(true);
  };

  // Oculta el formulario
  const ocultarContact = () => {
    setFormVisible(false);
  };

  // Guarda los datos del formulario en el estado y resetea el formulario
  const saveData = () => {
    const { nombre, email, fecha, telefono, direccion, region, mensaje, click } = formData;
    if (!nombre || !email || !fecha || !telefono || !direccion || !region || !mensaje || !click) {
      alert('Antes de guarda rellene el formulario');
    } else {
      const newData = { ...formData };
      setDataArr((prevDataArr) => [...prevDataArr, newData]);
      console.log('Datos enviado:', newData);
      alert('Datos guardados');
      setFormData({
        nombre: '',
        email: '',
        fecha: '',
        telefono: '',
        direccion: '',
        region: '',
        mensaje: '',
        click: false,
      });
    }
  };

  // Valida los campos esenciales del formulario antes de enviarlo
  const validarFormularioContacto = () => {
    const { nombre, email, mensaje } = formData;
    if (!nombre || !email || !mensaje) {
      alert('Rellene el formulario');
    } else {
      alert('Formulario enviado');
    }
  };

  // Descarga los datos almacenados en formato JSON
  const downloadJSON = () => {
    const jsonData = JSON.stringify(dataArr);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'datos.json';
    link.click();
    URL.revokeObjectURL(url);
    setDataArr([]);
  };

  const [regiones, setRegiones] = useState([]); // Estado para las regiones
  const [selectedRegion, setSelectedRegion] = useState(''); // Estado para la región seleccionada

  // Efecto para obtener las regiones desde una API
  useEffect(() => {
    const fetchRegiones = async () => {
      try {
        const response = await fetch('https://api.shipit.cl/v/regions');
        const data = await response.json();
        setRegiones(data);
      } catch (error) {
        console.error('Error fetching regions:', error);
      }
    };

    fetchRegiones();
  }, []);

  // Maneja el cambio en la selección de región
  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
  };


  // Efecto de entrada para el formulario
  useEffect(() => {
    if (formVisible) {
      const form = document.getElementById('contactForm');
      if (form) {
        form.style.opacity = 0;
        form.style.transform = 'translateY(50px)';
        setTimeout(() => {
          form.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
          form.style.opacity = 1;
          form.style.transform = 'translateY(0)';
        }, 100);
      }
    }
  }, [formVisible]);

  // Efecto de desvanecimiento para el mensaje de contacto
  useEffect(() => {
    const message = document.querySelector('#contactForm p');
    if (message) {
      message.style.opacity = 0;
      setTimeout(() => {
        message.style.transition = 'opacity 3s ease-out';
        message.style.opacity = 1;
      }, 100);
    }
  }, []);

  return (
    <section id="contacto">
      <div className="contan">
        <h2>Contacto</h2>
        <p>
          Ponte en contacto con nosotros para más información sobre nuestros productos.
        </p>

        <button className="formcontac" onClick={mostrarContact}>
          Formulario
        </button>
        <button className="formcontac" onClick={ocultarContact}>
          Ocultar formulario
        </button>

        {formVisible && (
          <form id="contactForm">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Correo:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="fecha">Fecha de contacto:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleInputChange}
            /><br />

            <label htmlFor="telefono">Número de teléfono:</label>
            <input
              type="number"
              id="telefono"
              name="telefono"
              placeholder="Número de teléfono"
              value={formData.telefono}
              onChange={handleInputChange}
            /><br />

            <label htmlFor="direccion">Dirección:</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              placeholder="Dirección"
              value={formData.direccion}
              onChange={handleInputChange}
            /><br />

            <label htmlFor="region">Región:</label>
            <select value={selectedRegion} onChange={handleChange}>
              <option value="">Seleccione una región</option>
              {regiones.map((region) => (
                <option key={region.id} value={region.id}>{region.name}</option>
              ))}
            </select><br />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              name="mensaje"
              id="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              required
            ></textarea>

            <label>
              <input
                type="checkbox"
                name="click"
                checked={formData.click}
                onChange={handleInputChange}
              />
              He leído y acepto la Política de privacidad
            </label><br />
            <button type="button" onClick={validarFormularioContacto}>Enviar</button>
            <button type="button" onClick={saveData}>Guardar Datos</button>
            <button type="button" onClick={downloadJSON} id="download">Descargar JSON</button>
          </form>
        )}
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </section>
  );
}

export default Contactos;
