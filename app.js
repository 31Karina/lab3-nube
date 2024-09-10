const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express Cardenas!');
});

// Ruta para clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { id: 1, nombre: 'Cliente 1' },
    { id: 2, nombre: 'Cliente 2' },
    { id: 3, nombre: 'Cliente 3' },
  ];
  res.json(clientes);
});

// Ruta para productos
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
  ];
  res.json(productos);
});

// Definir el puerto
const PORT = process.env.PORT || 8031;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
