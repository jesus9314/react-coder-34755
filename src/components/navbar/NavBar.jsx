import React from "react";
import Nav from "./Nav";
import MenuMobile from "./MenuMobile";
import MenuMobileButton from "./MenuMobileButton";
import ProfileSection from "./ProfileSection";

const NavBar = () => {
	return (
		<nav className="bg-gray-800 absolute w-full">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button*/}
						<MenuMobileButton />
					</div>
					{/* nav */}
					<Nav />

					{/* Profile Section */}
					<ProfileSection />
				</div>
			</div>
			{/* Mobile menu, show/hide based on menu state. */}
			<MenuMobile />
		</nav>
	);
};

export default NavBar;
