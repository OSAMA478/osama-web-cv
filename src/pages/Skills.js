import React from "react";
import Banner from "../Components/Banner";
import MacWindow from "../Components/UI/MacWindow";
import { HiCodeBracket } from "react-icons/hi2";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { GiSkills } from "react-icons/gi";
import {
	SiTailwindcss,
	SiVercel,
	SiRedux,
	SiReact,
	SiJavascript,
	SiTypescript,
	SiFirebase,
	SiReactrouter,
	SiCanva,
	SiFigma,
} from "react-icons/si";
import { TbBrandNextjs, TbTools } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";
import { RxNotionLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

const skillsData = [
	{
		headline: "Core Technologies",
		icon: () => (
			<HiCodeBracket className="w-4 h-4 text-yellow-300 md:w-8 md:h-8" />
		),
		barColor: "bg-yellow-300",

		technologies: [
			{
				techName: "html",

				percentForBar: "w-4/5",
				icon: () => <AiFillHtml5 className={`w-8 h-8 text-[#e96228]`} />,
			},
			{
				techName: "css",
				icon: () => <DiCss3 className={`w-8 h-8 text-[#2965f1]`} />,

				percentForBar: "w-11/12",
			},
			{
				techName: "javaScript",
				icon: () => <SiJavascript className={`w-8 h-8 text-[#f3d22e]`} />,

				percentForBar: "w-4/5",
			},
			{
				techName: "typeScript",
				icon: () => <SiTypescript className={`w-8 h-8 text-[#3178c6]`} />,

				percentForBar: "w-6/12",
			},
		],
	},
	{
		headline: "React Ecosystem",
		icon: () => <SiReact className="w-4 h-4 text-[#5ed3f3] md:w-8 md:h-8" />,
		barColor: "bg-[#5ed3f3]",
		technologies: [
			{
				techName: "reactjs",
				icon: () => <SiReact className={`w-8 h-8 text-[#5ed3f3]`} />,

				percentForBar: "w-4/5",
			},
			{
				techName: "redux",
				icon: () => <SiRedux className={`w-8 h-8 text-[#7248b6]`} />,

				percentForBar: "w-3/5",
			},
			{
				techName: "router",
				icon: () => <SiReactrouter className={`w-8 h-8 text-white`} />,

				percentForBar: "w-3/5",
			},
			{
				techName: "nextjs",
				icon: () => <TbBrandNextjs className={`w-8 h-8 text-white`} />,

				percentForBar: "w-3/5",
			},
			{
				techName: "tailwind",
				icon: () => <SiTailwindcss className={`w-8 h-8 text-teal-400`} />,

				percentForBar: "w-4/5",
			},
		],
	},
	{
		headline: "Tools",
		icon: () => <TbTools className="w-4 h-4 text-white md:w-8 md:h-8" />,
		barColor: "bg-white",
		technologies: [
			{
				techName: "git",
				icon: () => <BiGitBranch className={`w-8 h-8 text-[#e84d31]`} />,

				percentForBar: "w-4/5",
			},
			{
				techName: "github",
				icon: () => <BsGithub className={`w-8 h-8 text-white`} />,

				percentForBar: "w-4/5",
			},
			{
				techName: "firebase",
				icon: () => <SiFirebase className={`w-8 h-8 text-[#ffa714]`} />,

				percentForBar: "w-3/5",
			},
			{
				techName: "vercel",
				icon: () => <SiVercel className={`w-8 h-8 text-white`} />,

				percentForBar: "w-3/4",
			},
			{
				techName: "notion",
				icon: () => <RxNotionLogo className={`w-8 h-8 text-white`} />,

				percentForBar: "w-3/4",
			},
			{
				techName: "figma",
				icon: () => <SiFigma className={`w-8 h-8 text-red-500`} />,

				percentForBar: "w-3/5",
			},
			{
				techName: "canva",
				icon: () => <SiCanva className={`w-8 h-8 text-teal-400`} />,

				percentForBar: "w-11/12",
			},
		],
	},
];

const Skills = () => {
	const myStyle = {
		backgroundImage: `url(${require("../Assets/img/UI/redStripes.png")})`,
		height: "100%",
		fontSize: "50px",
		// backgroundSize: "cover",
		backgroundRepeat: "repeat",
	};
	return (
		<div className="p-2 md:p-4 h-[calc(100vh-4rem)] overflow-scroll">
			<Banner />
			<div className="flex items-center justify-center gap-4 mt-4 md:gap-8">
				<GiSkills className="w-8 h-8 md:h-10 md:w-10" />
				<h1 className="text-2xl text-center underline md:text-4xl underline-offset-8">
					Skills
				</h1>
			</div>
			{skillsData.map((item) => (
				<MacWindow>
					<div className="flex flex-col p-2 bg-slate-800">
						<div className="flex items-center justify-start gap-4 px-2 md:gap-8 md:px-4">
							{item.icon()}
							<h1 className="text-xl">{item.headline}</h1>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2">
							{item?.technologies?.map((tech) => (
								<div className="relative flex items-center h-20 gap-20 p-4 rounded-lg justify-evenly md:gap-10 ">
									<div>{tech.icon()}</div>
									<div className={`w-full  h-2 overflow-hidden bg-slate-500`}>
										<div
											className={` ${tech.percentForBar} h-full overflow-hidden ${item.barColor} `}
										>
											<div></div>
											{/* <span
												// style={myStyle}
												className="w-[200%] bg-text-yellow-300 inline-block absolute left-0 -translate-x-[0%] 
											
											"
											></span> */}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</MacWindow>
			))}
			<div className="flex justify-between max-w-lg mx-auto">
				<Link to="/">
					<button className="p-2 mt-2 rounded-md md:px-4 bg-slate-800 md:mt-4">
						👆 prev Page
					</button>
				</Link>
				<Link to="/">
					<button className="p-2 mt-2 rounded-md md:px-4 bg-slate-800 md:mt-4">
						👆 home
					</button>
				</Link>
				<Link to="/project">
					<button className="p-2 mt-2 rounded-md md:px-4 bg-slate-800 md:mt-4 ">
						👆 next Page
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Skills;
