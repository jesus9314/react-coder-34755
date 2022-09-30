import BtnFilters from "./BtnFilters";
import BtnGrid from "./BtnGrid";
import Sort from "./Sort";
import SortMenu from "./SortMenu";

const Header = ({ show, setShow, productos, setProductos, page, setPage }) => {
	return (
		<div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
			<h1 className="text-4xl font-bold tracking-tight text-gray-900">Productos</h1>
			<div className="flex items-center">
				<div className="relative inline-block text-left">
					<div>
						<Sort show={show} setShow={setShow} />
					</div>
					<SortMenu page={page} setPage={setPage} show={show} productos={productos} setProductos={setProductos}/>
				</div>
				<BtnGrid />
				<BtnFilters />
			</div>
		</div>
	);
};

export default Header;
