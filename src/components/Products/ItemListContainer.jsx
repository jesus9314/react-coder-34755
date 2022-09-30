import { useEffect, useState } from "react";
import Pagination from "../Container/Filters/pagination/Pagination";
import Products from "./Products";

const ItemListContainer = ({ productos, setProductos, showProducts, setShowProducts, page, setPage }) => {
	useEffect(() => {
		const getProductos = async () => {
			const result = await fetch("https://fakestoreapi.com/products");
			const data = await result.json();
			setProductos(data);
		};
		getProductos();
	}, []);
	return (
		<div className="bg-white">
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-2">
					{showProducts.map(({ title, price, description, image }, index) => (
						<Products key={index} title={title} price={price} description={description} image={image} />
					))}
				</div>
				<Pagination page={page} setPage={setPage} productos={productos} showProducts={showProducts} setShowProducts={setShowProducts} setProductos={setProductos} />
			</div>
		</div>
	);
};

export default ItemListContainer;
