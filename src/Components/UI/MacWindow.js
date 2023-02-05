import React from "react";

const MacWindow = ({ children }) => {
	return (
		<div className="pt-8 mx-auto overflow-hidden text-center rounded-lg ">
			<div className="w-full">
				<div className="shadow-2xl">
					<div className="flex items-center flex-none px-4 bg-black rounded-b-none h-11 rounded-xl">
						<div className="[&>*]:w-3 [&>*]:h-3 [&>*]:rounded-full flex space-x-1.5">
							<div className="bg-red-500"></div>
							<div className="bg-yellow-500"></div>
							<div className="bg-green-500"></div>
						</div>
					</div>
				</div>
			</div>
			<>{children}</>
		</div>
	);
};

export default MacWindow;
