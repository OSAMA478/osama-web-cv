import React from "react";
import Tilt from "react-parallax-tilt";
const Card = ({
	children,
	tiltEnable = false,
	glareEnable = false,
	glareMaxOpacity = 0.7,
	glareColor = "#ffffff",
}) => {
	return (
		<div className="inline-block w-64 m-4 text-center transition duration-200 rounded-lg active:scale-90 ">
			<Tilt
				tiltEnable={tiltEnable}
				tiltAngleXInitial="0"
				tiltAngleYInitial="0"
				tiltMaxAngleX="20"
				tiltMaxAngleY="20"
				glareEnable={glareEnable}
				glareMaxOpacity={glareMaxOpacity}
				glareColor={glareColor}
				glarePosition="all"
				className={"overflow-hidden rounded-lg "}
			>
				{children}
			</Tilt>
		</div>
	);
};

export default Card;
