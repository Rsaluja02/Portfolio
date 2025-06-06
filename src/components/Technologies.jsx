import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { motion } from "motion/react";
import { BiLogoPython } from "react-icons/bi";

const Technologies = () => {
	return (
		<div className="border-b border-neutral-800 pb-24">
			<motion.h1 
			whileInView={{opacity:1, y:0}}
			initial={{opacity:0,y:-100}}
			transition={{duration:2}}
			className="my-20 text-center text-4xl">
				{" "}
				Technologies{" "}
			</motion.h1>
			<motion.div
			whileInView={{opacity:1 , x: 0}}
			initial={{opacity:0 , x: -200}}
			transition={{duration:2}}
			className="flex flex-wrap items-center justify-center gap-4">
				<motion.div
					initial={{ y: -10 }}
					animate={{ y: [10, -10] }}
					transition={{
						duration: 3,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiReactjsLine className="text-7xl text-cyan-400" />
				</motion.div>
				<motion.div
					initial={{ y: -10 }}
					animate={{ y: [10, -10] }}
					transition={{
						duration: 2.5,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiTailwindCssFill className="text-7xl text-teal-500  " />
				</motion.div>
				<motion.div
					initial={{ y: -10 }}
					animate={{ y: [10, -10] }}
					transition={{
						duration: 3.5,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<AiFillHtml5 className="text-7xl text-red-500" />
				</motion.div>
				<motion.div
					initial={{ y: -10 }}
					animate={{ y: [10, -10] }}
					transition={{
						duration: 1.5,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiJavascriptFill className="text-7xl text-yellow-400" />
				</motion.div>
				<motion.div
					initial={{ y: -10 }}
					animate={{ y: [10, -10] }}
					transition={{
						duration: 1,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<BiLogoPython className="text-7xl text-green-400" />
				</motion.div>
				<motion.div
					initial={{ y: -10 }}
					animate={{ y: [10, -10] }}
					transition={{
						duration: 4,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiNodejsLine className="text-7xl text-green-500" />
				</motion.div>
			</motion.div >
		</div >
	);
};

export default Technologies;
