import React from "react";
import { VscFilePdf } from "react-icons/vsc";
import { BsPersonSquare } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiMedalLine } from "react-icons/ri";
import { BsInfoSquare } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";

const SideBar = () => {
	return (
		<>
			<aside
				id="logo-sidebar"
				className="z-40 pt-16 w-64 h-[calc(100vh)] transition duration-200 -translate-x-full shadow-lg sm:block sm:translate-x-0 bg-slate-700"
				aria-label="Sidebar"
			>
				<div className="h-full p-2 sm:p-4 bg-slate-700">
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
			<div className="col-start-1 col-end-3 row-start-1 row-end-2 pt-16 sm:col-end-3 sm:col-start-2 justify-self-center">
				<Outlet />
			</div>
		</>
	);
};

export default SideBar;
