import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import validator from "validator";


const ContactUs = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_891pg19", "template_97mp94g", form.current, {
				publicKey: "kOPWyDtyqbJbJvXyY",
			})
			.then(
				() => {
					alert("Message Sent Successfully!");
					form.current.reset();
				},
				(error) => {
					alert("FAILED...", error.text);
				}
			);
	};

	const validateEmail = (e) => {
		const email = e.target.value;

		if (validator.isEmail(email)) {
			return "Valid Email";
		} else {
			return "Enter valid Email!"
		}
	}



	return (
		<div className="border-b border-neutral-800 pb-4">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1 }}
				className="my-20 text-center text-5xl">
				Contact Me
			</motion.h2>
			<motion.form
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 0.5 }}
				id="contact"
				ref={form}
				onSubmit={sendEmail}
				className="flex flex-col text-center justify-center items-center ">
				<label className="text-xl font-medium text-white ">Name</label>
				<input
					required
					type="text"
					placeholder="Full Name"
					name="user_name" 
					id="user_name"
					className="my-5 w-full h-14 px-4 py-2 bg-neutral-900 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-violet-600
                focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 lg:w-1/3"
				/>
				<label className="text-xl font-medium text-white">Email</label>
				<input
					required
					type="email"
					placeholder="Email Adress"
					name="user_email" 
					id="user_email"
					onChange={(e) => validateEmail(e)}
					className="my-5 w-full h-14 px-4 py-2 bg-neutral-900 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-violet-600
                focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 lg:w-1/3"
				/>
				<label className="text-xl font-medium text-white">Subject</label>
				<textarea
					required
					name="subject" 
					id="subject"
					type="text"
					placeholder="Subject"
					className="my-5 w-full h-14 px-4 py-2 bg-neutral-900 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-violet-600
                focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 lg:w-1/3"
				/>
				<label className="text-xl font-medium text-white">Message</label>
				<textarea
					required
					name="message" 
					id="message"
					className="my-5 h-40 w-full px-4 py-2 bg-neutral-900 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-violet-600
                focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 lg:w-1/3"
				/>
				<button
					type="submit"
					value="Send"
					className="my-5 btn bg-gradient-to-r from-rose-600  to-violet-900  text-xl font-bold rounded-full border-none px-6 py-4  hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
					Send Message
				</button>
			</motion.form>
		</div>
	);
};

export default ContactUs;
