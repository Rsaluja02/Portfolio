import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Navbar = () => {
	return (
		<nav className="mb-20 flex justify-between items-center py-3">
			<div className="flex flex-shrink-0 items-center">
				<img src={logo} alt="logo" className="w-13 h-12" />
			</div>
			<div className="m-8 flex items-center justify-center gap-3 text-2xl">
				<a href="https://github.com/Rsaluja02/" className="btn z-0">
					<FaGithub/>
				</a>
				<a href="https://www.linkedin.com/in/raushansaluja/" className="btn z-0">
					<FaLinkedin/>
				</a>
			</div>
		</nav>
	);
};


export default Navbar;
