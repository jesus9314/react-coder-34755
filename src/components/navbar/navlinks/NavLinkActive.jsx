import { Link } from "react-router-dom";

const NavLinkActive = ({ children, link }) => {
	return (
		<Link to={link} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium capitalize" aria-current="page">
			{children}
		</Link>
	);
};

export default NavLinkActive;
