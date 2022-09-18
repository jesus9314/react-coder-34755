import React from "react";
import Categories from "./Categories";
import ExpandableSection from "./ExpandableSection"

const Filters = ({ classes }) => {
	return (
		<form className={classes}>
			<h3 className="sr-only">Categories</h3>
			<Categories/>
			<ExpandableSection/>
		</form>
	);
};

export default Filters;
