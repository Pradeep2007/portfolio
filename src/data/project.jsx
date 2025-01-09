import { SiHtml5} from "react-icons/si";
import { BiLogoCss3,BiLogoReact,BiLogoTailwindCss} from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";
import { TbApi} from "react-icons/tb";
import weather from "../assets/images/weather.png"
import travel from "../assets/images/travel.png"
import port from "../assets/images/port.png"

const ProjectData =[
    {
        id:"1",
        name:"Weather-App",
        image:weather,
        icon:[SiHtml5,BiLogoCss3,FaJsSquare,TbApi],
        description:"Implemented a weather application using open APIs to fetch and display current weather data based on user input.",
        github:"https://github.com/Pradeep2007/weather-app",
        demo:"https://weather-app-theta-indol-37.vercel.app/"
    },
    {
        id:"2",
        name:"Travel-List",
        image:travel,
        icon:[SiHtml5,BiLogoCss3,BiLogoReact],
        description:"It is a user-friendly interface for listing travel belongings",
        github:"https://github.com/Pradeep2007/Travel-List",
        demo:"https://travel-list-iota-two.vercel.app/"
    },
    {
        id:"3",
        name:"Portfolio",
        image:port,
        icon:[SiHtml5,BiLogoCss3,BiLogoTailwindCss,BiLogoReact],
        description:"A personal portfolio website showcasing projects, skills, experience,and contact information.",
        github:"https://github.com/Pradeep2007/portfolio",
        demo:"https://portfolio-bay-one-72.vercel.app/"
    },
]
export default ProjectData;