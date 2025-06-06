import project1 from "../assets/restaraunt.png"
import project2 from "../assets/weather.png";
import project3 from "../assets/portfolio.png";
import project4 from "../assets/samudash.gif";

export const HERO_CONTENT = `A passionate Front-end + Python developer with a knack for crafting aesthetic and scalable applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Frontend developer with a passion for creating efficient and user-friendly web applications. I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const EXPERIENCES = [

];

export const PROJECTS = [
        {
        title: "SamuDash",
        image: project4,
        description:
            "A 2D Platformer Ninja Dash game with 3 custom maps, made using the beloved 8bit artstyle.",
        technologies: ["Python", "Pygame",],
        link : "https://github.com/Rsaluja02/SamuDash"
    },
    {
        title: "Fine Dining Restaraunt Website",
        image: project1,
        description:
            "A feature-full Front-end Restaurant Website with a Fine Dining Aesthetic.",
        technologies: ["HTML", "CSS", "JS", "React"],
        link:"https://rsaluja02.github.io/Restaraunt-app/"
    },
    {
        title: "Weather App",
        image: project2,
        description:
            "A Weather application showing current weather conditions with important information as well as a 5 day weather forecast, including a location search feature.",
        technologies: ["HTML", "CSS", "JS", "React", "GeoDB API","OpenWeather API"],
        link:"https://rsaluja02.github.io/React-Weather-App/"
    },
    {
        title: "Portfolio Website",
        image: project3,
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Tailwind CSS","Framer Motion"],
        link:"#hero"
    },

];


