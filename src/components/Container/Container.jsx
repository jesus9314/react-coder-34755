import { useEffect, useState } from "react";
import ItemListContainer from "../Products/ItemListContainer";
import Filters from "./Filters/Filters";
import FiltersModal from "./Filters/FiltersModal";
import Header from "./Header/Header";

const Container = ({ show, setShow }) => {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		const getProductos = async () => {
			const result = await fetch("https://fakestoreapi.com/products");
			const data = await result.json();
			setProductos(data);
		};
		getProductos();
	},[]);
	return (
		<div className="bg-gray-100">
			<FiltersModal show="hidden" />
			<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* header */}
				<Header show={show} setShow={setShow} />
				<section aria-labelledby="products-heading" className="pt-6 pb-24">
					<h2 id="products-heading" className="sr-only">
						Products
					</h2>
					<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
						{/* Filters */}
						<Filters classes="hidden lg:block" />
						{/* Product grid */}
						<div className="lg:col-span-3">
							{/* Contenedor de productos */}
							<ItemListContainer productos={productos}/>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Container;
