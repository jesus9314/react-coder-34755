import React from "react";
import ItemListContainer from "../Products/ItemListContainer";
import Filters from "./Filters/Filters";
import FiltersModal from "./Filters/FiltersModal";
import Header from "./Header/Header";

const Container = () => {
	return (
		<div className="bg-white">
			<div>
				<FiltersModal show="hidden"/>
				<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					{/* header */}
					<Header />
					<section aria-labelledby="products-heading" className="pt-6 pb-24">
						<h2 id="products-heading" className="sr-only">
							Products
						</h2>
						<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
							{/* Filters */}
							<Filters classes="hidden lg:block"/>
							{/* Product grid */}
							<div className="lg:col-span-3">
								{/* Contenedor de productos */}
								<ItemListContainer />
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Container;
