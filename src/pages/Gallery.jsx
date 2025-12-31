
import React, { useState } from 'react';
import DetalleProducto from '../components/DetalleProducto';
import { db } from '../data/data';
import Producto from '../components/Producto';


export const Gallery = () => {

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <>
      <div className="App relative min-h-screen">
        <main className='container mx-auto p-4'>            
          {/* INTERRUPTOR */}
          {productoSeleccionado ? (
              <DetalleProducto 
                  producto={productoSeleccionado} 
                  alVolver={() => setProductoSeleccionado(null)} // Botón para volver a null
              />
          ) : (
              // CASO B: SI ES NULL, MUESTRA LA LISTA (GRID)
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {db.map((producto) => (
                  <Producto 
                      img ={producto.image}
                      key={producto.id} 
                      producto={producto} 
                      // Pasamos la función al hijo para que pueda "avisar" al padre
                      alClickar={() => setProductoSeleccionado(producto)} 
                  />
                ))}
              </div>
          )}

        </main>
      </div>
    </>
  );
}

export default Gallery;