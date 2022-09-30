import React from "react";

const RightButton = () => {
	return (
		<button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
			<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
				<polyline points="9 18 15 12 9 6"></polyline>
			</svg>
		</button>
	);
};

export default RightButton;
