import React from "react";

const Image = ({ src }) => {
	const imagePath = require(src).default;
	return <img src={imagePath} className="w-full h-full" alt="project" />;
};

export default Image;
