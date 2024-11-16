import project1 from "../assets/restaraunt.png"
import project2 from "../assets/weather.png";
import project3 from "../assets/portfolio.png";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A passionate Frontend developer with a knack for crafting aesthetic and scalable web applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Frontend developer with a passion for creating efficient and user-friendly web applications. I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js.I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const EXPERIENCES = [

];

export const PROJECTS = [
    {
        title: "Fine Dining Restaraunt Website",
        image: project1,
        description:
            "A feature-full Frontend Restaurant Website with a Fine Dining Aesthetic.",
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
    },
    // {
    //     title: "Blogging Platform",
    //     // image: project4,
    //     description:
    //         "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    //     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    // },
];


