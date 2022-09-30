import React from "react";

const NumberButton = ({children, setPage, button}) => {
	return (
		<button onClick={() => setPage(button)} type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400">
			{children}
		</button>
	);
};

export default NumberButton;
