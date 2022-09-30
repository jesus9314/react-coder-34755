import React from "react";

const NavLink = ({children}) => {
	return (
		<a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
			{children}
		</a>
	);
};

export default NavLink;
