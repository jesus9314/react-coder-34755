import { useEffect, useState } from "react";
import Products from "./Products";

const ItemListContainer = ({ productos }) => {
	return (
		<div className="bg-white pt-6">
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-2">
					{productos.map(({ id, title, price, description, image }) => (
						<Products key={id} id={id} title={title} price={price} description={description} image={image} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ItemListContainer;
