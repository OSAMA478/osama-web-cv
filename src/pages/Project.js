import React from "react";
import Banner from "../Components/Banner";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiExternalLinkFill } from "react-icons/ri";
import Card from "../Components/UI/Card";
import { Link } from "react-router-dom";
const ProjectData = [
	{
		name: "Airbnb clone",
		imgName: "Airbnb",
		liveLink: "https://10-react-airbnb-clone.vercel.app/",
	},
	{
		name: "Al-pakeezo website",
		imgName: "HalalOPakeeza",
		liveLink: "https://halalopakeeza.com/",
	},
	{
		name: "Food Order App",
		imgName: "FoodOrderApp",
		liveLink: "https://food-order-app.osama478.vercel.app/",
	},
	{
		name: "Expense Tracker",
		imgName: "ExpenseTracker",
		liveLink: "https://06-react-expense-tracker.vercel.app/",
	},
	{
		name: "Counter App",
		imgName: "CounterApp",
		liveLink: "https://07-react-redux-counter-app.vercel.app/",
	},
	{
		name: "Shopping Cart",
		imgName: "ShopingCart",
		liveLink: "https://08-react-shopping-cart-app.vercel.app/",
	},
	{
		name: "Rick and Morty",
		imgName: "RickAndMorty",
		liveLink: "https://11-react-rick-morty-all-character.vercel.app/",
	},
	{
		name: "Analog Clock",
		imgName: "Clock",
		liveLink: "https://osama478.github.io/18-JS-clock/",
	},
	{
		name: "Stopwatch",
		imgName: "Stopwatch",
		liveLink: "https://osama478.github.io/20-JS-stopwatch/",
	},
	{
		name: "Word Clock",
		imgName: "WordClock",
		liveLink: "https://osama478.github.io/19-JS-word-clock/",
	},

	{
		name: "Music Animation",
		imgName: "MusicAnimation",
		liveLink: "https://osama478.github.io/02-css-music-animation/",
	},
	{
		name: "Notebook",
		imgName: "Notes",
		liveLink: "https://osama478.github.io/01-css-notes-project/",
	},
	{
		name: "Clock Animation",
		imgName: "ClockAnimation",
		liveLink: "https://osama478.github.io/04-css-clock-animation/",
	},
	{
		name: "Grid Layout",
		imgName: "GridLayout",
		liveLink: "https://osama478.github.io/07-css-grid-layout3-resposive/",
	},
	{
		name: "Parallax",
		imgName: "parallex",
		liveLink: "https://osama478.github.io/12-css-prallex/",
	},
	{
		name: "Product Card",
		imgName: "ProducCard",
		liveLink: "https://osama478.github.io/08-css-creative-product-card/",
	},
];
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
				<div className="grid grid-cols-1 gap-6 p-4 lg:gap-10 lg:p-10 place-items-center lg:grid-cols-2 bg-slate-800 ">
					{ProjectData.map((project) => (
						<div className="h-full w-80 lg:w-full " key={`${project.name}`}>
							<Card glareEnable="true" tiltEnable="true" glareMaxOpacity={0.4}>
								<div className="relative w-full h-48  bg-black hover:-translate-y-[100%] transition duration-300 ease-in-out">
									<div className="absolute top-0 w-full h-48 bg-slate-700">
										{/* <Image src={project.imgLink} /> */}
										<img
											src={require(`../Assets/img/Project/${project.imgName}.png`)}
											className="w-full h-full"
											alt="project"
										/>
									</div>

									<div className="absolute grid place-items-center top-[100%] w-full h-48 bg-slate-700">
										<Link
											to={project.liveLink}
											target="_blank"
											className="flex flex-col items-center justify-center text-4xl text-white hover:text-green-400"
										>
											<h1 className="text-2xl">{project.name}</h1>
											<RiExternalLinkFill />
										</Link>
									</div>
								</div>
							</Card>
						</div>
					))}
				</div>
			</Card>
			<div className="flex justify-between max-w-lg mx-auto">
				<Link to="/skills">
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
					<button
						disabled
						className="p-2 mt-2 rounded-md md:px-4 bg-slate-800 md:mt-4 hover:cursor-not-allowed opacity-60"
					>
						👆 next Page
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Project;
