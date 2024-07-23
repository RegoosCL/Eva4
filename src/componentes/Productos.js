import React, { useState } from 'react';

function Productos() {
  const [productos, setProductos] = useState([]); // Estado para la lista de productos
  const [formularioVisible, setFormularioVisible] = useState(false); // Estado para mostrar/ocultar el formulario de agregar producto
  const [editarVisible, setEditarVisible] = useState(false); // Estado para mostrar/ocultar el formulario de edición
  const [productoEnEdicion, setProductoEnEdicion] = useState(null); // Estado para manejar el producto en edición
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    imagen: '',
  }); // Estado para los datos del formulario de agregar producto
  const [formEditData, setFormEditData] = useState({
    nombre: '',
    precio: '',
    imagen: '',
  }); // Estado para los datos del formulario de editar producto
  const [colorFormu, setColorFormu] = useState(true); // Estado para cambiar el color del formulario

  const cambiarColor = () => {
    setColorFormu(!colorFormu); // Cambia el color del formulario
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    })); // Maneja el cambio en los campos del formulario de agregar producto
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setFormEditData((prevFormEditData) => ({
      ...prevFormEditData,
      [name]: value,
    })); // Maneja el cambio en los campos del formulario de editar producto
  };

  const agregarProducto = (event) => {
    event.preventDefault();
    setProductos((prevProductos) => [
      ...prevProductos,
      formData,
    ]); // Agrega un nuevo producto a la lista
    setFormData({
      nombre: '',
      precio: '',
      imagen: '',
    }); // Resetea los campos del formulario
    setFormularioVisible(false); // Oculta el formulario de agregar producto
  };

  const editarProducto = (index) => {
    setProductoEnEdicion(index);
    setFormEditData(productos[index]); // Pone los datos del producto en edición en el formulario de editar
    setEditarVisible(true); // Muestra el formulario de editar producto
  };

  const guardarCambiosProducto = (event) => {
    event.preventDefault();
    const nuevosProductos = productos.slice();
    nuevosProductos[productoEnEdicion] = formEditData; // Guarda los cambios en el producto editado
    setProductos(nuevosProductos);
    setProductoEnEdicion(null); // Resetea el estado de producto en edición
    setEditarVisible(false); // Oculta el formulario de editar producto
  };

  const eliminarProducto = (index) => {
    const nuevosProductos = productos.filter((_, i) => i !== index); // Elimina el producto seleccionado
    setProductos(nuevosProductos);
  };

  const cancelarEdicion = () => {
    setEditarVisible(false); // Oculta el formulario de editar producto
    setProductoEnEdicion(null); // Resetea el estado de producto en edición
  };

  return (
    <section id="productos" className="container-producto">
      <div className="container">
        <br /><br /><br /><br /><br /><br /><br /><br />
        <h2>Nuestros Productos</h2>
        <div id="product-list" className="product">
          {productos.map((producto, index) => (
            <div key={index}>
              <a href="#"><img src={producto.imagen} width="200" alt={producto.nombre} /></a>
              <h3>{producto.nombre}</h3>
              <p>${producto.precio}</p>
              <button onClick={() => eliminarProducto(index)}>Eliminar</button>
              <button onClick={() => editarProducto(index)}>Editar</button>
            </div>
          ))}
        </div>
        <button onClick={() => setFormularioVisible(true)}>Añadir Producto</button>
        <button onClick={() => setFormularioVisible(false)}>Ocultar</button>
        <button onClick={cambiarColor}>Cambiar Color</button>
      </div>
      {formularioVisible && (
        <div id="formularioProducto" style={{ display: 'block' }}>
          <div className="prods" style={{ backgroundColor: colorFormu ? '#3480b4c5' : '#8b694bc5' }}>
            <h2>Añadir Producto</h2>
            <form id="productoForm" onSubmit={agregarProducto}>
              <label htmlFor="nombreProducto">Nombre del Producto:</label>
              <input
                type="text"
                id="nombreProducto"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="precioProducto">Precio:</label>
              <input
                type="number"
                id="precioProducto"
                name="precio"
                value={formData.precio}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="imagenProducto">URL de la Imagen:</label>
              <input
                type="text"
                id="imagenProducto"
                name="imagen"
                value={formData.imagen}
                onChange={handleInputChange}
                required
              />

              <button type="submit">Añadir</button>
            </form>
          </div>
        </div>
      )}
      {editarVisible && (
        <section id="editarProducto" className="container-producto" style={{ display: 'block' }}>
          <div className="prods" style={{ backgroundColor: colorFormu ? '#3480b4c5' : '#8b694bc5' }}>
            <h2>Editar Producto</h2>
            <form id="editarProductoForm" onSubmit={guardarCambiosProducto}>
              <label htmlFor="nombreProductoEditar">Nombre del Producto:</label>
              <input
                type="text"
                id="nombreProductoEditar"
                name="nombre"
                value={formEditData.nombre}
                onChange={handleEditInputChange}
                required
              />

              <label htmlFor="precioProductoEditar">Precio:</label>
              <input
                type="number"
                id="precioProductoEditar"
                name="precio"
                value={formEditData.precio}
                onChange={handleEditInputChange}
                required
              />

              <label htmlFor="imagenProductoEditar">URL de la Imagen:</label>
              <input
                type="text"
                id="imagenProductoEditar"
                name="imagen"
                value={formEditData.imagen}
                onChange={handleEditInputChange}
                required
              />

              <button type="submit">Guardar Cambios</button>
              <button type="button" onClick={cancelarEdicion}>Cancelar</button>
            </form>
          </div>
        </section>
      )}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </section>
  );
};

export default Productos;
