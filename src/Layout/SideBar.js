import React from "react";
import { VscFilePdf } from "react-icons/vsc";
import { BsPersonSquare } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiMedalLine } from "react-icons/ri";
import { BsInfoSquare } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";
import Card from "../Components/UI/Card";

const SideBar = () => {
	return (
		<>
			<aside
				id="logo-sidebar"
				className="absolute top-0 left-0 z-40 w-64 min-h-[calc(100vh)] h-full pt-16 transition duration-200 -translate-x-full shadow-lg md:block md:translate-x-0 bg-slate-800"
				aria-label="Sidebar"
			>
				<div className="p-2 md:p-4  text-[#c8c8c8] bg-slate-800 ">
					<div className="p-2">
						<Card
							tiltEnable="true"
							glareEnable="true"
							glareMaxOpacity={0.4}
							glareColor="#ffffff"
						>
							<div className="flex flex-col items-center h-full p-2 bg-slate-600">
								<div className="flex justify-center w-20 h-20 rounded-full bg-slate-400">
									{/* <img
										src={require("../Assets/img/face.png")}
										alt="profile pic"
										className="h-20 p-2"
									/> */}
								</div>
								<h2 className="text-2xl ">Osama Shaikh</h2>
								<p className="text-sm">Frontend Developer</p>
								<p className="text-xs text-blue-400">
									{" "}
									# Learner # Open to Work
								</p>
							</div>
						</Card>
					</div>
					<ul className="space-y-2 ">
						<li>
							<NavLink
								style={({ isActive }) => ({
									backgroundColor: isActive ? "rgb(81 102 133)" : "transparent",
								})}
								to="/"
								href="#"
								className="flex items-center p-2 text-base font-normal text-gray-300 transition duration-100 rounded-lg active:bg-teal-500 dark:text-white hover:bg-slate-500 dark:hover:bg-gray-700"
							>
								<BsPersonSquare className="w-4 h-4 sm:w-6 sm:h-6 " />
								<span className="ml-3">Home</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) => ({
									backgroundColor: isActive ? "rgb(81 102 133)" : "transparent",
								})}
								to="/skills"
								className="flex items-center p-2 text-base font-normal text-gray-300 transition duration-100 rounded-lg active:bg-teal-500 dark:text-white hover:bg-slate-500 dark:hover:bg-gray-700"
							>
								<GiSkills className="w-4 h-4 sm:w-6 sm:h-6 " />
								<span className="flex-1 ml-3 whitespace-nowrap">Skills</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) => ({
									backgroundColor: isActive ? "rgb(81 102 133)" : "transparent",
								})}
								to="/project"
								className="flex items-center p-2 text-base font-normal text-gray-300 transition duration-100 rounded-lg active:bg-teal-500 dark:text-white hover:bg-slate-500 dark:hover:bg-gray-700"
							>
								<AiOutlineFundProjectionScreen className="w-4 h-4 sm:w-6 sm:h-6 " />
								<span className="flex-1 ml-3 whitespace-nowrap">Project</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) => ({
									backgroundColor: isActive ? "rgb(81 102 133)" : "transparent",
								})}
								to="/testimonials"
								className="flex items-center p-2 text-base font-normal text-gray-300 transition duration-100 rounded-lg active:bg-teal-500 dark:text-white hover:bg-slate-500 dark:hover:bg-gray-700"
							>
								<RiMedalLine className="w-4 h-4 sm:w-6 sm:h-6 " />
								<span className="flex-1 ml-3 whitespace-nowrap">
									Testimonials
								</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) => ({
									backgroundColor: isActive ? "rgb(81 102 133)" : "transparent",
								})}
								to="/about"
								className="flex items-center p-2 text-base font-normal text-gray-300 transition duration-100 rounded-lg active:bg-teal-500 dark:text-white hover:bg-slate-500 dark:hover:bg-gray-700"
							>
								<BsInfoSquare className="w-4 h-4 sm:w-6 sm:h-6 " />
								<span className="flex-1 ml-3 whitespace-nowrap">About</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</aside>
			<div className="w-64"></div>
			<div className="col-start-1 col-end-3 row-start-1 row-end-2 pt-16 md:col-end-3 md:col-start-2 justify-self-center">
				<Outlet />
			</div>
		</>
	);
};

export default SideBar;
