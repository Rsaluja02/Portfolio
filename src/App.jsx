import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import ContactUs from "./components/Contacts";

const App = () => {
	return (
		<div className=" overflow-x-hidden top-0 -z-10 fixed h-full w-full bg-slate-950 antialiased selection:bg-sky-500">
			<div className="absolute bottom-[-10%] left-[-10%] right-0 top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
			<div className="absolute bottom-0 right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

			<div className="container mx-auto px-4 text-white">
				<Navbar />
				<Hero />
				<About />
				<Technologies />
				<Projects />
				<ContactUs />
			</div>
		</div>
	);
};

export default App;


