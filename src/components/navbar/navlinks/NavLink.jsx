import { Link } from "react-router-dom";

const NavLink = ({ children, link }) => {
	return (
		<Link to={link} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium capitalize">
			{children}
		</Link>
	);
};

export default NavLink;
