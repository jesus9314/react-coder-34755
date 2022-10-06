import { useState, useEffect } from "react";
import ItemCategory from "./ItemCategory";

const Categories = () => {
	
	const [categories2, setCategories2] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			const response = await fetch("https://fakestoreapi.com/products/categories");
			const data = await response.json();
			setCategories2(data);
		};
		getCategories();
	}, []);

	return (
		<ul className="px-2 py-3 font-medium text-gray-900">
			{categories2.map((category, index) => (
				<ItemCategory key={index} category={category}>{category}</ItemCategory>
			))}
		</ul>
	);
};

export default Categories;
