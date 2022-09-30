import { useEffect, useState } from "react";
import LeftButton from "./LeftButton";
import NumberButton from "./NumberButton";
import RightButton from "./RightButton";

const Pagination = ({ productos, showProducts, setShowProducts, page, setPage }) => {
	const [buttons, setButtons] = useState([]);
	const getPages = (productos, producstPerPage) => {
		let pages = 0;
		const residuo = productos.length % producstPerPage;
		if (residuo !== 0) {
			pages = Math.floor(productos.length / producstPerPage) + 1;
		} else {
			pages = Math.floor(productos.length / producstPerPage);
		}
		return pages;
	};
	const producstPerPage = 9;
	const pages = getPages(productos, producstPerPage);
	const pagination = () => {
		setShowProducts(productos);

		const newButtons = [];
		for (let index = 1; index <= pages; index++) {
			newButtons.push(index);
		}
		setButtons(newButtons);
		const prosuctsToShow = productos.filter((producto, index) => index >= (page - 1) * producstPerPage && index <= page * producstPerPage - 1);
		setShowProducts(prosuctsToShow);
	};
	useEffect(() => {
		pagination();
	});
	useEffect(() => {
		pagination();
	}, [page]);

	return (
		<div className="flex justify-center space-x-1 dark:text-gray-100 mt-10">
			<LeftButton />
			{buttons.map((button) => (
				<NumberButton setPage={setPage} button={button} key={button}>
					{button}
				</NumberButton>
			))}
			<RightButton />
		</div>
	);
};

export default Pagination;
