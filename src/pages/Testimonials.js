import React from "react";
import Banner from "../Components/Banner";
import Card from "../Components/UI/Card";
import { RiMedalLine } from "react-icons/ri";
import MacWindow from "../Components/UI/MacWindow";
import { Link } from "react-router-dom";

const Testimonals = () => {
	return (
		<div className="p-2 md:p-4 h-[calc(100vh-4rem)] overflow-scroll">
			<Banner />
			<div className="flex items-center justify-center gap-4 my-4 md:gap-8">
				<RiMedalLine className="w-8 h-8 md:h-10 md:w-10" />
				<h1 className="text-2xl text-center underline md:text-4xl underline-offset-8">
					Testimonials
				</h1>
				<div
					className="badge-base LI-profile-badge"
					data-locale="en_US"
					data-size="large"
					data-theme="dark"
					data-type="HORIZONTAL"
					data-vanity="osama-shaikh-790b6a118"
					data-version="v1"
				>
					<Link
						className="badge-base__link LI-simple-link"
						to="https://in.linkedin.com/in/osama-shaikh-790b6a118?trk=profile-badge"
					>
						Osama Shaikh
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Testimonals;
