import React from "react";

const Nav = () => {
	return (
		<div id="nav" className="flex flex-1 items-center justify-center z-50 sm:items-stretch sm:justify-start">
			<div className="flex flex-shrink-0 items-center">
				<img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
				<img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
			</div>
			<div className="hidden sm:ml-6 sm:block">
				<div className="flex space-x-4">
					{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
					<a href="/#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
						Dashboard
					</a>
					<a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
						Team
					</a>
					<a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
						Projects
					</a>
					<a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
						Calendar
					</a>
				</div>
			</div>
		</div>
	);
};

export default Nav;
