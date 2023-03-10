import React from "react";
import { VscFilePdf } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="absolute top-0 left-0 z-50 w-full shadow-xl bg-slate-700 ">
			<div className="flex items-center justify-between w-full h-16 px-3 py-3 text-gray-300 lg:px-5 lg:pl-3">
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
				<Link to="/">
					<h1 className="sm:text-xl">Osama CV</h1>
				</Link>
				<Link
					to="https://drive.google.com/file/d/1kJt50OqJouvcd3pL_9WYH3cLCnm507zK/view?usp=sharing"
					target="_blank"
					download
				>
					<VscFilePdf className="w-6 h-6 sm:w-8 sm:h-8 " />
				</Link>
			</div>
		</nav>
	);
};

export default Header;
