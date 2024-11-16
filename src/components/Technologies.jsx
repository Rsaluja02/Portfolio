import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { motion , animate } from "motion/react";



const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [ 10 , -10 ],
		transiton: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
			
		},
	},
});

const Technologies = () => {
	return (
		<div className="border-b border-neutral-800 pb-24">
			<h2 className="my-20 text-center text-4xl"> Technologies </h2>
			<div className="flex flex-wrap items-center justify-center gap-4">
				<motion.div
					variants={iconVariants(2.5)}
					initial="inital"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiReactjsLine className="text-7xl text-cyan-400" />
				</motion.div>
				<motion.div variants={iconVariants(3)}
					initial="initial"
					animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiTailwindCssFill className="text-7xl text-teal-500  " />
				</motion.div>
				<motion.div className="rounded-2xl border-4 border-neutral-800 p-4">
					<AiFillHtml5 className="text-7xl text-red-500" />
				</motion.div>
				<motion.div className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiJavascriptFill className="text-7xl text-yellow-400" />
				</motion.div>
				<motion.div className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiNodejsLine className="text-7xl text-green-500" />
				</motion.div>
			</div>
		</div>
	);
};

export default Technologies;
