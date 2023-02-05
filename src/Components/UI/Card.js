import React from "react";
import Tilt from "react-parallax-tilt";
const Card = ({
	children,
	tiltEnable = false,
	glareEnable = false,
	glareMaxOpacity = 0.7,
	glareColor = "#ffffff",
	clickEffect = false,
}) => {
	return (
		<div
			className={`inline-block w-full h-full  text-center transition duration-200 rounded-lg ${
				clickEffect ? "active:scale-90" : ""
			} `}
		>
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
				className={"overflow-hidden h-full rounded-lg "}
			>
				{children}
			</Tilt>
		</div>
	);
};

export default Card;
