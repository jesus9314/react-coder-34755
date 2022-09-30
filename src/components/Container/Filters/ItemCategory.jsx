import React from "react";

const ItemCategory = ({children}) => {
	return (
		<li>
			<a href="/#" className="block px-2 py-3 hover:bg-gray-200 rounded transition capitalize">
				{children}
			</a>
		</li>
	);
};

export default ItemCategory;
