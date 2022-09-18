import React from "react";
import Products from "./Products";

const ItemListContainer = () => {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
					<Products name="NIKE AIR" price={129} />
					<Products name="NIKE AIR" price={129} />
					<Products name="NIKE AIR" price={129} />
					<Products name="NIKE AIR" price={129} />
					<Products name="NIKE AIR" price={129} />
					<Products name="NIKE AIR" price={129} />
				</div>
			</div>
		</div>
	);
};

export default ItemListContainer;
