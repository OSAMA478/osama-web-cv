import React from "react";
import { VscFilePdf } from "react-icons/vsc";
import { BsPersonSquare } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiMedalLine } from "react-icons/ri";

const SideBar = () => {
	return (
		<div className="relative ">
			<nav className="absolute top-0 left-0 z-50 w-full shadow-lg bg-slate-700 ">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between text-gray-300">
						<button
							data-drawer-target="logo-sidebar"
							data-drawer-toggle="logo-sidebar"
							aria-controls="logo-sidebar"
							type="button"
							className="inline-flex items-center p-2 text-sm rounded-lg md:hidden hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-200 "
						>
							<span className="sr-only">Open sidebar</span>
							<svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clip-rule="evenodd"
									fill-rule="evenodd"
									d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
								></path>
							</svg>
						</button>
						<h1 className="sm:text-2xl">Osama CV</h1>
						<VscFilePdf className="w-6 h-6 sm:w-8 sm:h-8 " />
					</div>
				</div>
			</nav>

			<aside
				id="logo-sidebar"
				className="absolute top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full shadow-lg sm:translate-x-0 bg-slate-700"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 pb-4 overflow-y-auto bg-slate-700">
					<ul className="space-y-2">
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-base font-normal text-gray-300 transition duration-100 rounded-lg active:bg-teal-500 dark:text-white hover:bg-slate-500 dark:hover:bg-gray-700"
							>
								<BsPersonSquare className="w-4 h-4 sm:w-6 sm:h-6 " />
								<span className="ml-3">About</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-base font-normal text-gray-300 transition duration-100 rounded-lg active:bg-teal-500 dark:text-white hover:bg-slate-500 dark:hover:bg-gray-700"
							>
								<GiSkills className="w-4 h-4 sm:w-6 sm:h-6 " />
								<span className="flex-1 ml-3 whitespace-nowrap">Skills</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-base font-normal text-gray-300 transition duration-100 rounded-lg active:bg-teal-500 dark:text-white hover:bg-slate-500 dark:hover:bg-gray-700"
							>
								<AiOutlineFundProjectionScreen className="w-4 h-4 sm:w-6 sm:h-6 " />
								<span className="flex-1 ml-3 whitespace-nowrap">Project</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-base font-normal text-gray-300 transition duration-100 rounded-lg active:bg-teal-500 dark:text-white hover:bg-slate-500 dark:hover:bg-gray-700"
							>
								<RiMedalLine className="w-4 h-4 sm:w-6 sm:h-6 " />
								<span className="flex-1 ml-3 whitespace-nowrap">
									Testimonals
								</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
};

export default SideBar;
