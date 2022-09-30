import React from "react";

const NavLinkActive = ({children}) => {
	return (
		<a href="/#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
			{children}
		</a>
	);
};

export default NavLinkActive;
