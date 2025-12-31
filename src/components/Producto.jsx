import React from 'react';


export default function Producto({ img, producto, alClickar }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer bg-white" onClick={alClickar}>
      <img src={require(`../assets/images/${img}.jpg`)} alt={producto.name} className="w-full h-32 object-cover mb-2 rounded" />
      <h2 className="text-lg font-bold mb-1">{producto.name}</h2>
      <p className="text-gray-700 mb-2">{producto.description}</p>
      <span className="block text-green-700 font-bold">${producto.price.toFixed(2)}</span>
    </div>
  );
}
