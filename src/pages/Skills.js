import React from "react";
import Banner from "../Components/Banner";
import MacWindow from "../Components/UI/MacWindow";
import { HiCodeBracket } from "react-icons/hi2";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";
import { RxNotionLogo } from "react-icons/rx";
import { SiFirebase } from "react-icons/si";
import { SiVercel } from "react-icons/si";

const Skills = () => {
	const myStyle = {
		backgroundImage: `url(${require("../Assets/img/redStripes.png")})`,
		height: "100vh",
		fontSize: "50px",
		// backgroundSize: "cover",
		// backgroundRepeat: "repeat",
	};
	return (
		<div className="p-2 md:p-4">
			<Banner />
			<MacWindow>
				<div className="flex flex-col p-2 bg-slate-800">
					<div className="flex items-center justify-start gap-4 px-2 md:gap-8 md:px-4">
						<HiCodeBracket className="w-4 h-4 text-yellow-300 md:w-8 md:h-8" />
						<h1 className="text-xl">Core Technologies</h1>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2">
						<div className="flex items-center h-20 gap-20 p-4 rounded-lg justify-evenly md:gap-10 ">
							<div>
								<AiFillHtml5 className="w-8 h-8" />
							</div>
							<div className="w-full h-2 bg-slate-500">
								{/* <img src="" alt="" /> */}
							</div>
						</div>
						<div className="flex items-center h-20 gap-20 p-4 rounded-lg justify-evenly md:gap-10 ">
							<div>
								<AiFillHtml5 className="w-8 h-8" />
							</div>
							<div className={`w-full h-2 overflow-hidden bg-slate-500`}>
								<div style={myStyle} className="w-4/5"></div>
							</div>
						</div>
					</div>
				</div>
			</MacWindow>
		</div>
	);
};

export default Skills;
