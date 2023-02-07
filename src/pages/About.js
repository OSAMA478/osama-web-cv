import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FcCellPhone } from "react-icons/fc";
import { MdAlternateEmail, MdLocationOn } from "react-icons/md";
import Banner from "../Components/Banner";
import Card from "../Components/UI/Card";
import { BsInfoSquare } from "react-icons/bs";

const About = () => {
	return (
		<div className="p-2 md:p-4 h-[calc(100vh-4rem)] overflow-scroll">
			<Banner />
			<div className="flex items-center justify-center gap-4 my-4 md:gap-8">
				<BsInfoSquare className="w-8 h-8 md:h-10 md:w-10" />
				<h1 className="text-2xl text-center underline md:text-4xl underline-offset-8">
					About
				</h1>
			</div>
			<div className="flex flex-col gap-2 p-2 md:grid md:grid-cols-2 md:gap-4 md:p-4 ">
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
							<p>Date if Birth</p>
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
		</div>
	);
};

export default About;
