import React from "react";
import Card from "./UI/Card";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<Card glareEnable="true" glareMaxOpacity={0.2}>
			<div className="pb-2 bg-slate-800">
				<img src={require("../Assets/img/UI/banner.jpg")} alt="" />
				<div className="flex items-center justify-between px-4 -mt-10 md:-mt-16 sm:-mt-12 lg:-mt-20 sm:px-4 ">
					<div className="w-24 h-24 border-[6px] overflow-hidden  rounded-full sm:h-30 sm:w-30 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-[#7DB3E3] justify-self-auto">
						{/* <img
							src={require("../Assets/img/UIprofile.png")}
							alt=""
							className="h-full mx-auto my-0"
						/> */}
					</div>
					<div className="flex self-end justify-end flex-grow gap-2 md:pb-6 md:gap-8">
						<Link to="">
							<BsGithub className="text-2xl md:text-4xl " />
						</Link>
						<Link to="">
							<AiFillLinkedin className="text-2xl md:text-4xl  text-[#0a66c2]" />
						</Link>
						{/* </div> */}
						{/* <div className="flex justify-center gap-2 md:gap-4"> */}
						<Link to="">
							<SiDiscord className="text-2xl md:text-4xl  text-[#5865f2]" />
						</Link>
						<Link to="">
							<IoMdDownload className="text-2xl text-green-400 md:text-4xl" />
						</Link>
					</div>
				</div>
			</div>
			{/* <h1 className="text-4xl ">Osama Shaikh</h1> */}
		</Card>
	);
};

export default Banner;
