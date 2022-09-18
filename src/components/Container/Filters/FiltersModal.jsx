import React from "react";
import Filters from "./Filters";
import OpaqueBG from "../OpaqueBG";

const FiltersModal = ({show = ""}) => {
	return (
		<div className={`${show} relative z-40 lg:hidden" role="dialog" aria-modal="true`}>
			<OpaqueBG show={show}/>
			<div className="fixed inset-0 z-40 flex">
				<div className=" relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
					<div className="flex items-center justify-between px-4">
						<h2 className="text-lg font-medium text-gray-900">Filters</h2>
						<button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
							<span className="sr-only">Close menu</span>
							{/* Heroicon name: outline/x-mark */}
							<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					{/* Filters */}
					<Filters classes="mt-4 border-t border-gray-200"/>
				</div>
			</div>
		</div>
	);
};

export default FiltersModal;
