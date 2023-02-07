import React from "react";
import Banner from "../Components/Banner";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiExternalLinkFill } from "react-icons/ri";
import Card from "../Components/UI/Card";
import { Link } from "react-router-dom";
const ProjectData = [
	{
		name: "Airbnb clone",
		imgLink: "../Assets/img/Project/Airbnb.png",
		liveLink: "https://10-react-airbnb-clone.vercel.app/",
	},
	{
		name: "Al-pakeezo website",
		imgLink: "../Assets/img/Project",
		liveLink: "https://halalopakeeza.com/",
	},
	{
		name: "Food Order App",
		imgLink: "../Assets/img/Project/FoodOrderApp.png",
		liveLink: "https://food-order-app.osama478.vercel.app/",
	},
	{
		name: "Expense Tracker",
		imgLink: "../Assets/img/Project/ExpenseTracker.png",
		liveLink: "https://06-react-expense-tracker.vercel.app/",
	},
	{
		name: "Counter App",
		imgLink: "../Assets/img/Project/CounterApp.png",
		liveLink: "https://07-react-redux-counter-app.vercel.app/",
	},
	{
		name: "Shopping Cart",
		imgLink: "../Assets/img/Project/ShopingCart.png",
		liveLink: "https://08-react-shopping-cart-app.vercel.app/",
	},
	{
		name: "Rick and Morty",
		imgLink: "../Assets/img/Project/RickAndMorty.png",
		liveLink: "https://11-react-rick-morty-all-character.vercel.app/",
	},
	{
		name: "Analog Clock",
		imgLink: "../Assets/img/Project/Clock.png",
		liveLink: "https://osama478.github.io/18-JS-clock/",
	},
	{
		name: "Stopwatch",
		imgLink: "../Assets/img/Project/Stopwatch.png",
		liveLink: "https://osama478.github.io/20-JS-stopwatch/",
	},
	{
		name: "Word Clock",
		imgLink: "../Assets/img/Project/WordClock.png",
		liveLink: "https://osama478.github.io/19-JS-word-clock/",
	},

	{
		name: "Music Animation",
		imgLink: "../Assets/img/Project/MusicAnimation.png",
		liveLink: "https://osama478.github.io/02-css-music-animation/",
	},
	{
		name: "Notebook",
		imgLink: "../Assets/img/Project/Notes.png",
		liveLink: "https://osama478.github.io/01-css-notes-project/",
	},
	{
		name: "Clock Animation",
		imgLink: "../Assets/img/Project/ClockAnimation.png",
		liveLink: "https://osama478.github.io/04-css-clock-animation/",
	},
	{
		name: "Grid Layout",
		imgLink: "../Assets/img/Project/GridLayout.png",
		liveLink: "https://osama478.github.io/07-css-grid-layout3-resposive/",
	},
	{
		name: "Parallax",
		imgLink: "../Assets/img/Project/parallex.png",
		liveLink: "https://osama478.github.io/12-css-prallex/",
	},
	{
		name: "Product Card",
		imgLink: "../Assets/img/Project/ProducCard.png",
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
				<div className="grid grid-cols-1 gap-2 p-4 md:gap-4 md:p-10 place-items-center md:grid-cols-2 bg-slate-800 ">
					{ProjectData.map((project, i) => (
						<div className="w-full h-full " key={`${i}`}>
							<Card glareEnable="true" tiltEnable="true" glareMaxOpacity={0.4}>
								<div className="relative w-full h-48  bg-black hover:-translate-y-[100%] transition duration-300 ease-in-out">
									<div className="absolute top-0 w-full h-48 bg-slate-700">
										<img
											src={require(`../Assets/img/Project/Airbnb.png`)}
											// src={`${project.imgLink}`}
											className="w-full h-full"
											alt="project"
										/>
									</div>

									<div className="absolute grid place-items-center top-[100%] w-full h-48 bg-slate-700">
										<Link
											to={project.liveLink}
											className="flex flex-col items-center justify-center inline-block text-4xl text-white hover:text-green-400"
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
		</div>
	);
};

export default Project;
