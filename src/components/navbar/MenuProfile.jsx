import React from "react";

const MenuProfile = ({modalProfile}) => {
	const clickHandlerMenu = e =>{
		e.stopPropagation();
	}
	return (
		<div onClick={e => clickHandlerMenu(e)} className={`absolute right-0 z-10 mt-2 w-48 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${modalProfile}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
			{/* Active: "bg-gray-100", Not Active: "" */}
			<a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="user-menu-item-0">
				Tu Perfil
			</a>
			<a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="user-menu-item-1">
				Configuración
			</a>
			<a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="user-menu-item-2">
				Desconectarse
			</a>
		</div>
	);
};

export default MenuProfile;
