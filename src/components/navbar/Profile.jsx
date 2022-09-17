import React from "react";
import MenuProfile from "./MenuProfile";

const Profile = () => {
	return (
		<div className="relative ml-3">
			<div>
				<button type="button" id="btnProfile" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-expanded="false" aria-haspopup="true">
					<span className="sr-only">Open user menu</span>
					<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
				</button>
			</div>
            <MenuProfile/>
		</div>
	);
};

export default Profile;
