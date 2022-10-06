import { Link } from "react-router-dom";

const Products = ({ id, title, price, description, image }) => {
	return (
		<div className="max-w-xs mx-auto lg:mx-1 overflow-hidden bg-white transition-colors duration-300 hover:bg-gray-100 rounded-lg shadow-xl">
			<div className="px-4 py-2 flex flex-col justify-center a1">
				<Link to={`/producto/${id}`} className="text-3xl font-bold text-gray-800 hover:text-gray-500 transition capitalize truncate">
					{title}
				</Link>
				<p className="mt-1 text-sm text-gray-600 truncate">{description}</p>
			</div>
			<img className="object-cover w-full h-48 a2" src={image} alt="NIKE AIR" />
			<div className="a3 flex items-center justify-between px-4 py-2 bg-gray-900">
				<h1 className="text-lg font-bold text-white">S/{price}</h1>
				<button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 bg-black rounded hover:bg-gray-300 hover:text-black focus:bg-gray-400 focus:outline-none">Agregar al Carrito</button>
			</div>
		</div>
	);
};

export default Products;
