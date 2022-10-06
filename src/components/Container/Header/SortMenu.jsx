
const SortMenu = ({ show, productos, setProductos, page, setPage }) => {
	const mostRating = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const data = await response.json();
		const newData = data.filter((d) => d.rating.rate > 4);
		setProductos(newData);
		// setPage(1)
	};

	const lowerToHigh = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const data = await response.json();
		const newData = data.sort((a, b) => a.price - b.price);
		console.log(newData);
		setProductos(newData);
		// setPage(1)
	};
	const highToLower = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const data = await response.json();
		const newData = data.sort((a, b) =>  b.price - a.price);
		console.log(newData);
		setProductos(newData);
		// setPage(1)
	};

	return (
		<div className={`${show} absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
			<div className="py-1" role="none">
				<a href="/#" onClick={() => mostRating()} className="text-gray-500 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
					Mejor Rating
				</a>
				<a href="/#" onClick={() => lowerToHigh()} className="text-gray-500 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
					Precio: de bajo hacia alto
				</a>
				<a href="/#" onClick={() => highToLower()} className="text-gray-500 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-4">
					Precio: de alto hacia bajo
				</a>
			</div>
		</div>
	);
};

export default SortMenu;
