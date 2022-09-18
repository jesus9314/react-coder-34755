import React from "react";

const SortMenu = ({show = ""}) => {
	return (
		<div className={`${show} absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
			<div className="py-1" role="none">
				<a href="/#" className="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
					Most Popular
				</a>
				<a href="/#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
					Best Rating
				</a>
				<a href="/#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">
					Newest
				</a>
				<a href="/#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
					Price: Low to High
				</a>
				<a href="/#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-4">
					Price: High to Low
				</a>
			</div>
		</div>
	);
};

export default SortMenu;
