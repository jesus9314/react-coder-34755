import React from "react";
import CartWidget from "./CartWidget";
import Notifications from "./Notifications";
import Profile from "./Profile";

const ProfileSection = () => {
	return (
		<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
			{/* Shopping Cart */}
			<CartWidget />
			{/* notifications */}
			<Notifications />

			{/* Profile dropdown */}
			<Profile />
		</div>
	);
};

export default ProfileSection;
