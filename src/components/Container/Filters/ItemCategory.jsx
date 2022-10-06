import {Link} from "react-router-dom";

const ItemCategory = ({children, category}) => {
	return (
		<li>
			<Link to={`/categoria/${category}`} className="block px-2 py-3 hover:bg-gray-200 rounded transition capitalize">
				{children}
			</Link>
		</li>
	);
};

export default ItemCategory;
