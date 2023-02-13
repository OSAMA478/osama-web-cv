import React from "react";
import Banner from "../Components/Banner";
import Card from "../Components/UI/Card";
import { BsPersonSquare } from "react-icons/bs";
import { MdAlternateEmail, MdLocationOn } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { FcCellPhone } from "react-icons/fc";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="p-2 md:p-4 h-[calc(100vh-4rem)] overflow-scroll">
			<Banner />
			<div className="flex items-center justify-center gap-4 my-4 md:gap-8">
				<BsPersonSquare className="w-8 h-8 md:h-10 md:w-10" />
				<h1 className="text-2xl text-center underline md:text-4xl underline-offset-8">
					Home
				</h1>
			</div>
			<Card>
				<div className="p-2 md:p-4 bg-slate-800">
					<p className="text-justify">
						Highly motivated 💪 Front-end Developer with passion for visually
						appealing 🎨 web apps. Strong technical skills in HTML, CSS,
						JavaScript & React 💻. Fresh Master's Grad 👨‍🎓, quick learner 💡 with
						problem-solving skills 🔧 and passion for functional websites 💻.
						Seeking dynamic team 💪 for career growth 📈 and innovative projects
						🔥.
					</p>
				</div>
			</Card>
			<div className="flex flex-col gap-2 md:grid md:grid-cols-2 ">
				<Card>
					<div className="flex justify-between gap-2 p-2 text-start md:p-4 bg-slate-800 item-center">
						<div>
							<p>Phone Number</p>
							<a href="tel:+918976748334">+91 - 89 7674 8334</a>
						</div>

						<FcCellPhone className="w-8 h-8 mx-0 my-auto" />
					</div>
				</Card>

				<Card>
					<div className="flex justify-between gap-2 p-2 text-start md:p-4 bg-slate-800 item-center ">
						<div>
							<p>Date of Birth</p>
							<p>Sep 1, 1998</p>
						</div>
						<CiCalendarDate className="w-8 h-8 mx-0 my-auto text-white" />
					</div>
				</Card>

				<Card>
					<div className="flex justify-between gap-2 p-2 text-start md:p-4 bg-slate-800 item-center ">
						<div>
							<p>E-mail</p>
							<a href="mailto:osamashaikh4tech@gmail.com">
								osamashaikh4tech@gmail.com
							</a>
						</div>
						<MdAlternateEmail className="w-8 h-8 mx-0 my-auto text-white" />
					</div>
				</Card>

				<Card>
					<div className="flex justify-between gap-2 p-2 text-start md:p-4 bg-slate-800 item-center ">
						<div>
							<p>Current City</p>
							<p>Kalyan, MH, IND</p>
						</div>

						<MdLocationOn className="w-8 h-8 mx-0 my-auto text-red-600" />
					</div>
				</Card>
			</div>
			<div className="flex justify-between max-w-lg mx-auto">
				<Link to="/">
					<button
						className="p-2 mt-2 rounded-md md:px-4 bg-slate-800 md:mt-4 hover:cursor-not-allowed opacity-60"
						disabled
					>
						👆 prev Page
					</button>
				</Link>
				<Link to="/">
					<button className="p-2 mt-2 rounded-md md:px-4 bg-slate-800 md:mt-4">
						👆 home
					</button>
				</Link>
				<Link to="/skills">
					<button className="p-2 mt-2 rounded-md md:px-4 bg-slate-800 md:mt-4">
						👆 next Page
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
