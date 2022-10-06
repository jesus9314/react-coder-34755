import React from "react";
import NavLink from "./navlinks/NavLink";
import NavLinkActive from "./navlinks/NavLinkActive";
import {Link} from 'react-router-dom'

const Nav = () => {
	const menus = [
		{
			id: 0,
			name: "inicio",
			path: "/",
		},
		{
			id: 1,
			name: "electronics",
			path: "/categoria/electronics",
		},
		{
			id: 2,
			name: "jewelery",
			path: "/categoria/jewelery",
		},
		{
			id: 3,
			name: "men's clothing",
			path: "/categoria/men's clothing",
		},
		{
			id: 4,
			name: "women's clothing",
			path: "/categoria/women's clothing",
		},
	];
	return (
		<div id="nav" className="flex flex-1 items-center justify-center z-50 sm:items-stretch sm:justify-start">
			<Link to='/' className="flex flex-shrink-0 items-center">
				<img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
				<img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
			</Link>
			<div className="hidden sm:ml-6 sm:block">
				<div className="flex space-x-4">
					{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
					{menus.map(({ id, name, path }, i) => {
						return i === 0 ? (
							<NavLinkActive key={id} link={path}>
								{name}
							</NavLinkActive>
						) : (
							<NavLink key={id} link={path}>
								{name}
							</NavLink>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Nav;
