import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero-pic.jpg";
import CV from "../assets/cv.pdf";
import { motion } from "motion/react";

const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
});

const Hero = () => {
	return (
		<div id="hero" className="border-b border-neutral-900 pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<motion.h1
							variants={container(0.3)}
							initial="hidden"
							animate="visible"
							className="pb-16 text-6xl font-medium tracking-normal lg:mt-16 lg:text-8xl ">
							Raushan Saluja
						</motion.h1>
						<motion.span
							variants={container(0.7)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-rose-600 to-violet-900 bg-clip-text text-transparent text-4xl font-bold lg:text-5xl">
							Frontend Developer
						</motion.span>
						<motion.p
							variants={container(1)}
							initial="hidden"
							animate="visible"
							className="my-2 max-w-xl py-6 font-light tracking-tigther text-xl">
							{HERO_CONTENT}
						</motion.p>

						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.5, delay: 1.2 }}
							className="flex justify-center gap-4 mt-5 mb-5">
							<motion.a
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								href={CV}
								className="btn bg-gradient-to-r from-rose-600  to-violet-900  text-xl font-bold rounded-full border-none px-6 py-4  hover:shadow-lg"
								download={CV}>
								Download CV
							</motion.a>
							<motion.a
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								href="#contact"
								className="btn bg-gradient-to-r from-rose-600  to-violet-900  text-xl font-bold rounded-full border-none px-6 py-4 hover:shadow-lg">
								Contact Me
							</motion.a>
						</motion.div>
					</div>
				</div>
				<div className="w-full lg:w-1/2 lg:p-8">
					<div className="flex justify-center ">
						<motion.img
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 1.3 }}
							src={profilePic}
							alt="profile"
							className="rounded-2xl mb-20"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
