import { ABOUT_TEXT } from "../constants";
import profilePic from "../assets/profilepic.png";
import { motion } from "motion/react";

const About = () => {
	return (
		<div className="border-b border-neutral-800 pb-4">
			<h2 className="my-20 text-center text-5xl"> About Me </h2>

			<div className="flex flex-wrap">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.7 }}
					className="w-full lg:w-1/2 lg:p-8">
					<div className="flex items-center justify-center">
						<img src={profilePic} alt="profile" className="rounded-2xl" />
					</div>
				</motion.div>
				<div className="w-full lg:w-1/2">
					<div className="flex justify-center lg:justify-start">
						<motion.p
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.7 }}
							className="my-2 max-w-xl px-6">
							{ABOUT_TEXT}
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
