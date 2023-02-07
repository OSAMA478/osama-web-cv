import React from "react";
import Banner from "../Components/Banner";
import Card from "../Components/UI/Card";
import { BsPersonSquare } from "react-icons/bs";

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
				<div className="px-10 bg-slate-800">
					<h1 className="text-lg font-semibold">
						"🔨Transforming Ideas into Reality: __A Talented Front-end Developer
						with an Eye for 🎨Aesthetics__"
					</h1>
					<p className="text-justify">
						I am a highly motivated and enthusiastic Front-end Developer with a
						passion for creating visually appealing and user-friendly web
						applications. With a strong background in HTML, CSS, JavaScript, and
						React, I have the technical skills needed to bring designs to life
						and create a seamless user experience.
					</p>
					<br />
					<br />
					<h1 className="text-lg font-semibold">
						"👨‍🎓Fresh Mind, 💪Fresh Skills: __A master's grad Ready to Tackle Any
						Front-end Challenge__"
					</h1>
					<p className="text-justify">
						As a fresher, I am eager to apply my knowledge and continue learning
						in a fast-paced, dynamic environment. I am a quick learner, able to
						adapt to new technologies and programming languages with ease. My
						strong problem-solving skill combined with my passion for creating
						beautiful, functional websites, make me an ideal candidate for any
						front-end development role.
					</p>
					<br />
					<br />
					<h1 className="text-lg font-semibold">
						"Taking My 💼Career to the Next Level: __Looking for One 💪Dynamic
						Team and 🔥Groundbreaking Project__"
					</h1>
					<p className="text-justify">
						I am excited about the opportunity to work with a team of
						experienced developers and to contribute to the creation of
						innovative web applications that will have a positive impact on
						users. I am eager to apply my skills and knowledge to help drive the
						success of a company and take my career to the next level.
					</p>
				</div>
			</Card>
		</div>
	);
};

export default Home;
