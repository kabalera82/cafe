
export default function DetalleProducto({ producto, alVolver }) {
    if (!producto) return null;

    let imgSrc = "";
    try {
      imgSrc = require(`../assets/images/${producto.image}.jpg`);
    } catch (e) {
      imgSrc = "";
    }

    return (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-8 rounded-2xl max-w-2xl w-full relative">
                <button 
                    onClick={alVolver}
                    className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                    Cerrar X
                </button>
                <div className="flex flex-col md:flex-row gap-6">
                   <img 
                       src={imgSrc}
                       alt={producto.name} 
                       className="w-full md:w-1/2 rounded-lg object-cover"
                    />
                   <div className="flex-1">
                       <h2 className="text-4xl font-bold text-amber-900 mb-4">{producto.name}</h2>
                       <p className="text-gray-600 text-lg mb-6">{producto.description}</p>
                       <div className="text-2xl font-mono text-green-700 font-bold">
                           {producto.price} EUR
                       </div>
                       <p className="mt-2 text-sm text-gray-400">Stock disponible: {producto.stock}</p>
                   </div>
                </div>
            </div>
        </div>
    );
}