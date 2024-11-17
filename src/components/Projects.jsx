import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const Projects = () => {
	return (
		<div  className="border-b border-neutral-900 pb-4">
			<motion.h2
				id="projects"
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1 }}
				className="my-20 text-center text-5xl">
				Projects
			</motion.h2>
			<div>
				{" "}
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className="mb-8 gap-5 flex flex-wrap lg:justify-center text-center ">
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 1, x: -100 }}
							transition={{duration:1}}
							className="w-full lg:w-1/4 justify-items-center mr-2 ">
							<img
								src={project.image}
								width={300}
								height={300}
								alt={project.title}
								className="mb-6 rounded"
							/>
						</motion.div>
						<motion.div 
							whileInView={{opacity:1,x:0}}
							initial={{opacity:0,x:100}}
							transition={{duration:1}}													
							className="w-full max-w-xl lg:w-3/4 justify-items-center">
							<h6 className="mb-2 font-semibold">{project.title}</h6>
							<p className="mb-4 text-neutral-400">{project.description}</p>
							{project.technologies.map((tech, index) => (
								<span
									key={index}
									className="mr-2 rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-700">
									{tech}
								</span>
							))}
							<div className="flex w-1/2 justify-center">
								<a
									href={project.link}
									target="_blank"
									className="text-center my-6 btn bg-gradient-to-r from-rose-600 to-violet-900 text-l font-bold rounded-full border-none px-6 py-4 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
									View Project
								</a>
							</div>
						</motion.div >
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
