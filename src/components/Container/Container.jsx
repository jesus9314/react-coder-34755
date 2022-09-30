import { useState } from "react";
import ItemListContainer from "../Products/ItemListContainer";
import Filters from "./Filters/Filters";
import FiltersModal from "./Filters/FiltersModal";
import Header from "./Header/Header";

const Container = ({ show, setShow }) => {
	const [productos, setProductos] = useState([]);
	const [showProducts, setShowProducts] = useState([]);
	const [page, setPage] = useState(1);
	return (
		<div className="bg-white">
			<div>
				<FiltersModal show="hidden" />
				<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					{/* header */}
					<Header show={show} setShow={setShow} productos={productos} setProductos={setProductos} page={page} setPage={setPage} />
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
								<ItemListContainer page={page} setPage={setPage} productos={productos} setProductos={setProductos} showProducts={showProducts} setShowProducts={setShowProducts} />
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Container;
