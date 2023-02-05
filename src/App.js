import SideBar from "./Layout/SideBar";
import Project from "./pages/Project";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import NoPage from "./pages/NoPage";
import Header from "./Layout/Header";

const App = () => {
	return (
		<main className="relative h-screen mx-auto my-0 bg-slate-700 max-w-7xl">
			<Header />
			<div className="grid grid-cols-[auto_1fr]">
				<Routes>
					<Route path="/" element={<SideBar />}>
						<Route index element={<Home />} />
						<Route path="project" element={<Project />} />
						<Route path="skills" element={<Skills />} />
						<Route path="testimonials" element={<Testimonials />} />
						<Route path="about" element={<About />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</div>
		</main>
	);
};

export default App;
