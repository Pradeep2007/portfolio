import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectData from "../data/project";


const Projects = ()=>{
    return(
        <section className="body-font">
            <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
                <div id="projects" className="flex flex-col items-center text-center w-full">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">Projects</h1>
                    <p
                    data-aos="zoom in"
                    data-aos-duration="1000"
                    data-aos-once="false"
                    className="text-orange-500 font-medium md:text-lg leading-relaxed mb-5"
                    >My Works</p>
                </div>
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-3 md:gap-x-5 lg:gap-x-2 lg:gap-y-5 xl:gap-y-10 xl:gap-x-5 mt-4 md:mt-8 ">
                    {ProjectData.map((project)=>{
                        return(
                            <div
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-once="false"
                            key={project.id}
                            className="relative group flex flex-col flex-wrap h-80 w-[95%] mx-auto shadow-md md:shadow-lg rounded-xl"
                            >
                                <img className="h-80 rounded-xl" src={project.image} alt={project.name} />
                                <div className="absolute flex flex-col items-center justify-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-slate-950 rounded-xl">
                                    <h3 className="text-white text-2xl my-2 ">{project.name}</h3>
                                    <p className="text-white text-lg px-2">{project.description}</p>
                                    <div className="flex flex-wrap mt-3 items-center gap-3">
                                        {project?.icon?.map((Icon,index)=>{
                                            return(
                                                <div
                                                key={index}
                                                className="rounded-full p-2">
                                                <Icon className="text-white text-4xl font-bold"/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex items-center gap-7 my-7 justify-center text-2xl">
                                        <a className="text-slate-950 text-xl bg-white rounded-full p-2" 
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                           <FaGithub/> 
                                        </a>
                                        <a 
                                        className="text-slate-950 text-xl bg-white rounded-full p-2" 
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                            <FaExternalLinkAlt/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Projects;