import React from "react";

const Products = ({ name, price }) => {
	return (
		<div className="max-w-xs overflow-hidden mx-auto bg-white transition-colors duration-300 transform hover:bg-gray-200 rounded-lg shadow-2xl">
			<div className="px-4 py-2 flex flex-col justify-center a1">
				<h1 className="text-3xl font-bold text-gray-800 uppercase">{name}</h1>
				<p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
			</div>
			<img className="object-cover w-full h-48 a2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />
			<div className="a3 flex items-center justify-between px-4 py-2">
				<h1 className="text-lg font-bold">S/{price}</h1>
				<button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-black rounded hover:bg-gray-300 hover:text-black focus:bg-gray-400 focus:outline-none">Agregar al Carrito</button>
			</div>
		</div>
	);
};

export default Products;
