import React from "react";
import Banner from "../Components/Banner";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Card from "../Components/UI/Card";
const Project = () => {
	return (
		<div className="p-2 md:p-4 h-[calc(100vh-4rem)] overflow-scroll">
			<Banner />
			<div className="flex items-center justify-center gap-4 my-4 md:gap-8">
				<AiOutlineFundProjectionScreen className="w-8 h-8 md:h-10 md:w-10" />
				<h1 className="text-2xl text-center underline md:text-4xl underline-offset-8">
					Projects
				</h1>
			</div>
			<Card>
				<div className="grid grid-cols-1 p-4 md:p-10 place-items-center md:grid-cols-2 bg-slate-800 ">
					<Card glareEnable="true" tiltEnable="true" glareMaxOpacity={0.4}>
						<div className="w-full h-48 bg-black hover:-translate-y-[100%] transition duration-300 ease-in-out">
							<div className="w-full h-48 bg-slate-700"></div>
							<div className="w-full h-48 bg-slate-600"></div>
						</div>
					</Card>
				</div>
			</Card>
		</div>
	);
};

export default Project;
