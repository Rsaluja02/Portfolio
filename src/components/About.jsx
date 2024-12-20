import { ABOUT_TEXT } from "../constants";
import aboutPic from "../assets/about-pic.jpg";
import { motion } from "motion/react";

const About = () => {
	return (
		<div className="border-b border-neutral-800 pb-4">
			<h2 className="my-20 text-center text-5xl"> About Me </h2>

			<div className="flex flex-wrap justify-end gap-5 lg:flex-end">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.7 }}
					className="w-full gap-10 lg:w-1/3 lg:p-7 mb-10 ">
					<div className="flex justify-center items-center ">
						<img src={aboutPic} alt="profile" className="rounded-2xl" />
					</div>
				</motion.div>
				<div className="w-full lg:w-1/2">
					<div className="flex justify-end lg:justify-start">
						<motion.p
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.7 }}
							className="my-5 items-end max-w-xl px-6 text-2xl">
							{ABOUT_TEXT}
						</motion.p>
					</div>
					<div className="flex items-end  w-1/2 ">
						<a
							href="#projects"
							className="text-center my-5 mx-4 btn bg-gradient-to-r from-rose-600 to-violet-900 text-l font-bold rounded-full border-none px-5 py-5 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
							View My Projects!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
